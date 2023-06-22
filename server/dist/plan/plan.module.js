"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const plan_controller_1 = require("./plan.controller");
const plan_service_1 = require("./plan.service");
const plan_entity_1 = require("../domain/plan.entity");
const like_entity_1 = require("../domain/like.entity");
const user_entity_1 = require("../domain/user.entity");
const user_service_1 = require("../user/user.service");
let PlanModule = exports.PlanModule = class PlanModule {
};
exports.PlanModule = PlanModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([plan_entity_1.Plan, plan_entity_1.Travel_Nation, plan_entity_1.Plan_Schedule, like_entity_1.Plan_like, user_entity_1.User])],
        controllers: [plan_controller_1.PlanController],
        providers: [plan_service_1.PlanService, user_service_1.UserService],
    })
], PlanModule);
//# sourceMappingURL=plan.module.js.map