import { Body, Controller, Get, Post, Res, Query } from "@nestjs/common";
import { ChatbotService } from "./chatbot.service";
import { ApiTags } from "@nestjs/swagger";

@Controller("chatbot")
export class ChatbotController {
  constructor(private readonly chatbotService: ChatbotService) {}

  @Get()
  @ApiTags("chatbot")
  async getChatBot(@Query("query") queryParam: string): Promise<any> {
    try {
      const data = await this.chatbotService.getChatBot(queryParam);
      const answer = data.답변;
      const result = data.검색결과;
      const link = data.답변링크;


      const ChatData = {
        answer: answer,
        result: result,
        link: link,
      };
      console.log(ChatData);
      return ChatData;
    } catch (error) {
      throw error;
    }
  }
}
