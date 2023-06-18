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
exports.Local = exports.Location = exports.Days = exports.Plan = void 0;
const typeorm_1 = require("typeorm");
let Plan = exports.Plan = class Plan {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Plan.prototype, "idx", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Plan.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Plan.prototype, "period", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Plan.prototype, "theme", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Plan.prototype, "startdate", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Days, day => day.plan),
    __metadata("design:type", Array)
], Plan.prototype, "days", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Plan.prototype, "views", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Plan.prototype, "likecount", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Plan.prototype, "save", void 0);
exports.Plan = Plan = __decorate([
    (0, typeorm_1.Entity)()
], Plan);
let Days = exports.Days = class Days {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Days.prototype, "idx", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Plan, plan => plan.days),
    (0, typeorm_1.JoinColumn)({ name: 'plan_idx' }),
    __metadata("design:type", Plan)
], Days.prototype, "plan", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Location, location => location.day),
    __metadata("design:type", Array)
], Days.prototype, "locations", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Days.prototype, "day", void 0);
exports.Days = Days = __decorate([
    (0, typeorm_1.Entity)()
], Days);
let Location = exports.Location = class Location {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Location.prototype, "idx", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Days, day => day.locations),
    (0, typeorm_1.JoinColumn)({ name: 'days_idx' }),
    __metadata("design:type", Days)
], Location.prototype, "day", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Local, local => local.location),
    __metadata("design:type", Array)
], Location.prototype, "locals", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Location.prototype, "location", void 0);
exports.Location = Location = __decorate([
    (0, typeorm_1.Entity)()
], Location);
let Local = exports.Local = class Local {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Local.prototype, "idx", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Location, location => location.locals),
    (0, typeorm_1.JoinColumn)({ name: 'location_idx' }),
    __metadata("design:type", Location)
], Local.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Local.prototype, "day", void 0);
__decorate([
    (0, typeorm_1.Column)('double'),
    __metadata("design:type", Number)
], Local.prototype, "lat", void 0);
__decorate([
    (0, typeorm_1.Column)('double'),
    __metadata("design:type", Number)
], Local.prototype, "lng", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Local.prototype, "localname", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Local.prototype, "sequence", void 0);
exports.Local = Local = __decorate([
    (0, typeorm_1.Entity)()
], Local);
//# sourceMappingURL=plan.entity.js.map