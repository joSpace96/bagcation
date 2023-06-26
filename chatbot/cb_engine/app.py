from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import asyncio
import uvicorn
import time
import random

from configs.DatabaseConfig import *
from utils.Database import Database
from utils.preprocessing import Preprocessing
from models.intent.intentModel import IntentModel
from models.ner.NerModel import NerModel
from utils.FindAnswer import FindAnswer

if __name__ == "__main__":
    uvicorn.run("app:app", host="0.0.0.0", port=8000, reload=True)
    
app = FastAPI()


# CORS 정책 설정
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 프론트 클라이언트 주소
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/chat_query")
async def chat_query(query: str):
    start = time.time()
    p = Preprocessing(
        word2index_dic="C:/Users/oem/Desktop/bagcation/chatbot/cb_engine/train_tools/dict/chatbot_dict.bin",
        userdic="C:/Users/oem/Desktop/bagcation/chatbot/cb_engine/utils/user_dic.tsv",
    )

    # 데이터베이스 삭제
    db = Database(
        host=DB_HOST, user=DB_USER, password=DB_PASSWORD, db_name=DB_NAME, port=DB_PORT
    )
    db.connect()

    # 의도 파악
    intent = IntentModel(
        model_name="C:/Users/oem/Desktop/bagcation/chatbot/cb_engine/models/intent/intent_model.h5",
        preprocess=p,
    )
    predict = intent.predict_class(query)
    intent_name = intent.label[predict]

    # 개체명 인식
    ner = NerModel(
        model_name="C:/Users/oem/Desktop/bagcation/chatbot/cb_engine/models/ner/ner_model.h5",
        preprocess=p,
    )
    ner_predict = ner.predict(query)
    tag = ner.predict_tag(query)

    result = None
    # 답변 검색
    try:
        f = FindAnswer(db)
        answer_text, answer_sub_url = f.search(intent_name, tag)
        answer = f.tag_to_word(ner_predict, answer_text)
        answer_sub_url = f.tag_to_word(ner_predict, answer_sub_url)
        if intent_name == "정보":  # 의도가 "정보"일때만 result 값을 설정
            result = random.sample(list(ner.search_hotel(query)), k=3)
        elif intent_name == "맛집":
            result = random.sample(list(ner.search_rest(query)), k=3)
    except:
        answer = "데이터가 없습니다"

    db.close()
    end = time.time()
    print(f"{end - start:.5f} sec")
    return {
        "질문": query,
        "의도": intent_name,
        "개체명": ner_predict,
        "ner태그": tag,
        "답변": answer,
        "답변링크": answer_sub_url,
        "검색결과": result,
    }
