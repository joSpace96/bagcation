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
exports.PlanController = void 0;
const common_1 = require("@nestjs/common");
const plan_service_1 = require("./plan.service");
const swagger_1 = require("@nestjs/swagger");
const create_plan_dto_1 = require("./dto/create-plan.dto");
let PlanController = exports.PlanController = class PlanController {
    constructor(planService) {
        this.planService = planService;
    }
    async createPlan(createPlanDto) {
        const createdPlan = await this.planService.createPlan(createPlanDto);
        return createdPlan.idx;
    }
    async getPlan(idx) {
        const post = await this.planService.findById(idx);
        if (!post) {
            return { message: "게시글을 찾을 수 없습니다." };
        }
        else {
            return { message: "게시글 불러오기 성공", post };
        }
    }
    async getMyPlan(user_idx) {
        const post = await this.planService.findByuserId(user_idx);
        if (!post) {
            return { message: "게시글을 찾을 수 없습니다." };
        }
        else {
            return { message: "게시글 불러오기 성공", post };
        }
    }
    async getAllPlan() {
        const All_post = await this.planService.findAll();
        if (!All_post) {
            return { message: "게시글을 찾을 수 없습니다." };
        }
        else {
            return { message: "게시글 불러오기 성공", All_post };
        }
    }
};
__decorate([
    (0, common_1.Post)('add_plan'),
    (0, swagger_1.ApiTags)('Plan'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_plan_dto_1.CreatePlanDto]),
    __metadata("design:returntype", Promise)
], PlanController.prototype, "createPlan", null);
__decorate([
    (0, common_1.Get)('get_plan'),
    (0, swagger_1.ApiTags)('Plan'),
    __param(0, (0, common_1.Query)('idx')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PlanController.prototype, "getPlan", null);
__decorate([
    (0, common_1.Get)('get_my_plan'),
    (0, swagger_1.ApiTags)('Plan'),
    __param(0, (0, common_1.Query)('user_idx')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PlanController.prototype, "getMyPlan", null);
__decorate([
    (0, common_1.Get)('get_all_plan'),
    (0, swagger_1.ApiTags)('Plan'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PlanController.prototype, "getAllPlan", null);
exports.PlanController = PlanController = __decorate([
    (0, common_1.Controller)('plans'),
    __metadata("design:paramtypes", [plan_service_1.PlanService])
], PlanController);
//# sourceMappingURL=plan.controller.js.map