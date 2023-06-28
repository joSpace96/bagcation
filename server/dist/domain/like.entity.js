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
exports.Review_like = exports.Plan_like = void 0;
const typeorm_1 = require("typeorm");
const plan_entity_1 = require("./plan.entity");
const user_entity_1 = require("./user.entity");
const review_entity_1 = require("./review.entity");
let Plan_like = exports.Plan_like = class Plan_like {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Plan_like.prototype, "idx", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, user => user.likes),
    __metadata("design:type", user_entity_1.User)
], Plan_like.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => plan_entity_1.Plan, plan => plan.likes),
    __metadata("design:type", plan_entity_1.Plan)
], Plan_like.prototype, "plan", void 0);
exports.Plan_like = Plan_like = __decorate([
    (0, typeorm_1.Entity)()
], Plan_like);
let Review_like = exports.Review_like = class Review_like {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Review_like.prototype, "idx", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, user => user.likes),
    __metadata("design:type", user_entity_1.User)
], Review_like.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => review_entity_1.Review, review => review.likes),
    __metadata("design:type", review_entity_1.Review)
], Review_like.prototype, "review", void 0);
exports.Review_like = Review_like = __decorate([
    (0, typeorm_1.Entity)()
], Review_like);
//# sourceMappingURL=like.entity.js.map