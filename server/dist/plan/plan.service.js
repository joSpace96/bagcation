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
exports.PlanService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const plan_entity_1 = require("../domain/plan.entity");
let PlanService = exports.PlanService = class PlanService {
    constructor(planRepository, travelNationRepository, planScheduleRepository) {
        this.planRepository = planRepository;
        this.travelNationRepository = travelNationRepository;
        this.planScheduleRepository = planScheduleRepository;
    }
    async createPlan(createPlanDto) {
        const plan = new plan_entity_1.Plan();
        plan.user_idx = createPlanDto.user_idx;
        plan.title = createPlanDto.title;
        plan.theme = createPlanDto.theme;
        plan.period = createPlanDto.period;
        plan.startdate = createPlanDto.startdate;
        plan.views = createPlanDto.views;
        plan.likecount = createPlanDto.likecount;
        plan.save = createPlanDto.save;
        const travelNations = createPlanDto.travelNations.map(nationData => {
            const travelNation = new plan_entity_1.Travel_Nation();
            travelNation.nation = nationData.nation;
            travelNation.city = nationData.city;
            travelNation.lat = nationData.lat;
            travelNation.lng = nationData.lng;
            travelNation.plan = plan;
            return travelNation;
        });
        const planSchedules = createPlanDto.planSchedules.map(scheduleData => {
            const planSchedule = new plan_entity_1.Plan_Schedule();
            planSchedule.city = scheduleData.city;
            planSchedule.datetime = scheduleData.datetime;
            planSchedule.time = scheduleData.time;
            planSchedule.content = scheduleData.content;
            planSchedule.plan = plan;
            return planSchedule;
        });
        return await this.planRepository.manager.transaction(async (entityManager) => {
            await entityManager.save(plan);
            await entityManager.save(travelNations);
            await entityManager.save(planSchedules);
            return plan;
        });
    }
    async findById(idx) {
        return this.planRepository.findOne({ where: { idx }, relations: ['travelNations', 'planSchedules'], });
    }
    async findAll() {
        return this.planRepository.find({
            relations: ['travelNations', 'planSchedules'],
        });
    }
};
exports.PlanService = PlanService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(plan_entity_1.Plan)),
    __param(1, (0, typeorm_1.InjectRepository)(plan_entity_1.Travel_Nation)),
    __param(2, (0, typeorm_1.InjectRepository)(plan_entity_1.Plan_Schedule)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], PlanService);
//# sourceMappingURL=plan.service.js.map