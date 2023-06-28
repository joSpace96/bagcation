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
exports.Review_comment = exports.Review = void 0;
const typeorm_1 = require("typeorm");
const like_entity_1 = require("./like.entity");
const user_entity_1 = require("./user.entity");
let Review = exports.Review = class Review {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Review.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Review.prototype, "user_idx", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Review.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Review.prototype, "user_nick", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Review.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { array: true, nullable: true }),
    __metadata("design:type", String)
], Review.prototype, "images", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Review.prototype, "likecount", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => like_entity_1.Review_like, reviewLike => reviewLike.review),
    __metadata("design:type", Array)
], Review.prototype, "likes", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Review_comment, reviewComment => reviewComment.comment),
    __metadata("design:type", Array)
], Review.prototype, "comments", void 0);
exports.Review = Review = __decorate([
    (0, typeorm_1.Entity)()
], Review);
let Review_comment = exports.Review_comment = class Review_comment {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Review_comment.prototype, "idx", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, user => user.comments),
    __metadata("design:type", user_entity_1.User)
], Review_comment.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Review, review => review.comments),
    __metadata("design:type", Review)
], Review_comment.prototype, "review", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Review_comment.prototype, "comment", void 0);
exports.Review_comment = Review_comment = __decorate([
    (0, typeorm_1.Entity)()
], Review_comment);
//# sourceMappingURL=review.entity.js.map