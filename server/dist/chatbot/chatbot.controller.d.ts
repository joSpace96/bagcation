import { ChatbotService } from "./chatbot.service";
export declare class ChatbotController {
    private readonly chatbotService;
    constructor(chatbotService: ChatbotService);
    getChatBot(queryParam: string): Promise<any>;
}
