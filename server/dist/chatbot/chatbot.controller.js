"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatbotController = void 0;
const common_1 = require("@nestjs/common");
const chatbot_service_1 = require("./chatbot.service");
const swagger_1 = require("@nestjs/swagger");
let ChatbotController = exports.ChatbotController = class ChatbotController {
    constructor(chatbotService) {
        this.chatbotService = chatbotService;
    }
    async getChatBot(queryParam) {
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
        }
        catch (error) {
            throw error;
        }
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiTags)("chatbot"),
    __param(0, (0, common_1.Query)("query")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ChatbotController.prototype, "getChatBot", null);
exports.ChatbotController = ChatbotController = __decorate([
    (0, common_1.Controller)("chatbot"),
    __metadata("design:paramtypes", [chatbot_service_1.ChatbotService])
], ChatbotController);
//# sourceMappingURL=chatbot.controller.js.map