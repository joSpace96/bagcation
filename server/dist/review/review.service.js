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
exports.ReviewService = void 0;
const common_1 = require("@nestjs/common");
const review_entity_1 = require("../domain/review.entity");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../domain/user.entity");
const typeorm_2 = require("typeorm");
const like_entity_1 = require("../domain/like.entity");
let ReviewService = exports.ReviewService = class ReviewService {
    constructor(userRepository, reviewRepository, reviewLikeRepository, reviewCommentRepository) {
        this.userRepository = userRepository;
        this.reviewRepository = reviewRepository;
        this.reviewLikeRepository = reviewLikeRepository;
        this.reviewCommentRepository = reviewCommentRepository;
    }
    async getReviewByIdx(id) {
        return this.reviewRepository.findOne({ where: { id } });
    }
    async incrementLikeCount(review) {
        review.likecount++;
        await this.reviewRepository.save(review);
    }
    async decrementLikeCount(review) {
        review.likecount--;
        await this.reviewRepository.save(review);
    }
    async saveReviewLike(like) {
        await this.reviewLikeRepository.save(like);
    }
    async removeReviewLike(like) {
        await this.reviewLikeRepository.remove(like);
    }
    async getMyReviewLike(userIdx) {
        try {
            const myReviewLikes = await this.reviewRepository
                .createQueryBuilder("review")
                .leftJoinAndSelect("review.likes", "likes")
                .where("likes.user.idx = :userIdx", { userIdx })
                .getMany();
            return myReviewLikes;
        }
        catch (error) {
            console.log("Error occurred while fetching plan likes:", error);
            return undefined;
        }
    }
    async getReviewLike(user_id, review_id) {
        return this.reviewLikeRepository.findOne({ where: { user: { idx: user_id }, review: { id: review_id } } });
    }
    async create(createCommentDto) {
        return await this.reviewCommentRepository.save(createCommentDto);
    }
    async createComment(comments) {
        const { user_id, review_id, comment } = comments;
        try {
            const user = await this.userRepository.findOne({ where: { idx: user_id } });
            const review = await this.getReviewByIdx(review_id);
            const commentInstance = new review_entity_1.Review_comment();
            commentInstance.user = user;
            commentInstance.review = review;
            commentInstance.comment = comment;
            const savedComment = await this.reviewCommentRepository.save(commentInstance);
            return savedComment;
        }
        catch (error) {
            throw new Error('Failed to add review comment');
        }
    }
    async getCommentsByReviewId(reviewId) {
        const comments = await this.reviewCommentRepository
            .createQueryBuilder('comment')
            .leftJoinAndSelect('comment.user', 'user')
            .where('comment.review.id = :reviewId', { reviewId })
            .getMany();
        return comments;
    }
    async deleteComment(idx) {
        try {
            const comment = await this.reviewCommentRepository.findOne({ where: { idx } });
            if (!comment) {
                throw new Error('Comment not found');
            }
            await this.reviewCommentRepository.remove(comment);
        }
        catch (error) {
            throw new Error('Failed to delete comment');
        }
    }
    async findById(id) {
        return this.reviewRepository.findOne({ where: { id } });
    }
};
exports.ReviewService = ReviewService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(1, (0, typeorm_1.InjectRepository)(review_entity_1.Review)),
    __param(2, (0, typeorm_1.InjectRepository)(like_entity_1.Review_like)),
    __param(3, (0, typeorm_1.InjectRepository)(review_entity_1.Review_comment)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], ReviewService);
//# sourceMappingURL=review.service.js.map