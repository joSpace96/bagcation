import React, { useState } from "react";
import {
  ChatBox,
  Header,
  IconDiv,
  InputBox,
  ModalBottom,
  ModalContent,
  Profile,
} from "./ChatBotSty";
import "./ChatScroll.css";
import axios from "axios";

const ChatbotIcon = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [chatData, setChatData] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const OpenModal = () => {
    setIsModalOpen(true);
  };

  const CloseModal = () => {
    setIsModalOpen(false);
  };

  const ChatbotData = async () => {
    console.log(chatData);
    try {
      const response = await axios.get(`http://192.168.0.42:4000/chatbot`, {
        params: {
          query: chatData,
        },
      });
      console.log(response.data);

      // Add the input and chatbot response to the chat history
      const chatbotResponse = [
        { type: "chatbot", message: response.data.answer },
      ];
      if (response.data.result) {
        chatbotResponse.push({
          type: "chatbot",
          message: response.data.result.map(
            (result) => result.제목 + "," // + result.링크 + "," + result.평점
          ),
        });
      }

      if (response.data.link) {
        if (response.data.link !== "null") {
          chatbotResponse.push({
            type: "chatbot",
            message: <a href={response.data.link}>{response.data.link}</a>,
          });
        }
      }
      setChatHistory([
        ...chatHistory,
        { type: "user", message: chatData },
        ...chatbotResponse,
      ]);
    } catch (error) {
      console.log(`Error: ${error}`);
    }
    // Clear the input field
    setChatData("");
  };

  const onKeyUp = (event) => {
    // 'enter'키의 keycode는 13
    if (event.keyCode === 13) {
      console.log("enter");
      //input값 가져와서 ChatbotData호출
    }
  };

  return (
    <>
      <IconDiv
        onClick={() => {
          handleModal();
          !isModalOpen ? OpenModal() : CloseModal();
        }}
      >
        <span class="material-symbols-outlined">your_trips</span>
      </IconDiv>
      {isModalOpen && ( // 모달 컴포넌트
        <>
          <ModalContent>
            <Header>
              <Profile>
                <img
                  src="https://as1.ftcdn.net/v2/jpg/05/03/91/42/1000_F_503914260_YzwWd7xCT0EEvoLI5FXYwlbJn0l4A6Ll.jpg"
                  alt="프로필사진"
                />
              </Profile>
              <span onClick={CloseModal} class="material-symbols-outlined">
                close
              </span>
            </Header>
            <ChatBox className="chatbox">
              {chatHistory.map((chat, index) => (
                <div
                  className={
                    chat.type === "user" ? "speech-bubble" : "chatbot-bubble"
                  }
                  key={index}
                >
                  {chat.message}
                </div>
              ))}
            </ChatBox>
            <InputBox>
              <input
                type="text"
                placeholder="채팅을 입력해주세요."
                value={chatData}
                onChange={(e) => setChatData(e.target.value)}
                required
                onKeyUp={onKeyUp}
              />
              <button onClick={ChatbotData}>전송</button>
            </InputBox>
          </ModalContent>
          <ModalBottom />
        </>
      )}
    </>
  );
};

export default ChatbotIcon;
