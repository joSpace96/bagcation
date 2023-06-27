import { Injectable } from "@nestjs/common";
import axios, { AxiosResponse } from "axios";

@Injectable()
export class ChatbotService {
  async getChatBot(queryParam: string): Promise<any> {
    try {
      const response: AxiosResponse = await axios.get(
        "http://192.168.0.42:8001/chatbot",
        {
          params: {
            query: queryParam,
          },
        }
      );
      const data = response.data;
      console.log(data);
      return data; // 반환할 데이터가 있다면 해당 데이터를 반환합니다.
    } catch (error) {
      console.error(error);
      throw error; // 에러가 발생하면 에러를 다시 던집니다
    }
  }
}
