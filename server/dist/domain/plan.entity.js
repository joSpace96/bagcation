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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plan_Schedule = exports.Travel_Nation = exports.Plan = void 0;
const typeorm_1 = require("typeorm");
const like_entity_1 = require("./like.entity");
let Plan = exports.Plan = class Plan {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Plan.prototype, "idx", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Plan.prototype, "user_idx", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Plan.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Plan.prototype, "theme", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Plan.prototype, "period", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Plan.prototype, "startdate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Plan.prototype, "views", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Plan.prototype, "likecount", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Plan.prototype, "save", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Travel_Nation, travelNation => travelNation.plan),
    __metadata("design:type", Array)
], Plan.prototype, "travelNations", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Plan_Schedule, planSchedule => planSchedule.plan),
    __metadata("design:type", Array)
], Plan.prototype, "planSchedules", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => like_entity_1.Plan_like, planLike => planLike.plan),
    __metadata("design:type", Array)
], Plan.prototype, "likes", void 0);
exports.Plan = Plan = __decorate([
    (0, typeorm_1.Entity)()
], Plan);
let Travel_Nation = exports.Travel_Nation = class Travel_Nation {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Travel_Nation.prototype, "idx", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Plan, plan => plan.travelNations),
    (0, typeorm_1.JoinColumn)({ name: 'plan_idx' }),
    __metadata("design:type", Plan)
], Travel_Nation.prototype, "plan", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Travel_Nation.prototype, "nation", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Travel_Nation.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)('double'),
    __metadata("design:type", Number)
], Travel_Nation.prototype, "lat", void 0);
__decorate([
    (0, typeorm_1.Column)('double'),
    __metadata("design:type", Number)
], Travel_Nation.prototype, "lng", void 0);
exports.Travel_Nation = Travel_Nation = __decorate([
    (0, typeorm_1.Entity)()
], Travel_Nation);
let Plan_Schedule = exports.Plan_Schedule = class Plan_Schedule {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Plan_Schedule.prototype, "idx", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Plan, plan => plan.planSchedules),
    (0, typeorm_1.JoinColumn)({ name: 'plan_idx' }),
    __metadata("design:type", Plan)
], Plan_Schedule.prototype, "plan", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Plan_Schedule.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Plan_Schedule.prototype, "datetime", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Plan_Schedule.prototype, "time", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Plan_Schedule.prototype, "content", void 0);
exports.Plan_Schedule = Plan_Schedule = __decorate([
    (0, typeorm_1.Entity)()
], Plan_Schedule);
//# sourceMappingURL=plan.entity.js.map