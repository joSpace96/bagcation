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
exports.ReviewController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const path = require("path");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const review_entity_1 = require("../domain/review.entity");
const create_review_dto_1 = require("./dto/create-review.dto");
const swagger_1 = require("@nestjs/swagger");
const path_1 = require("path");
const multer_1 = require("multer");
const fs = require("fs");
const user_service_1 = require("../user/user.service");
const review_service_1 = require("./review.service");
const like_entity_1 = require("../domain/like.entity");
let ReviewController = exports.ReviewController = class ReviewController {
    constructor(reviewRepository, userService, reviewService) {
        this.reviewRepository = reviewRepository;
        this.userService = userService;
        this.reviewService = reviewService;
    }
    async createReview(files, createReviewDto) {
        const review = new review_entity_1.Review();
        review.user_idx = createReviewDto.user_idx;
        review.title = createReviewDto.title;
        review.content = createReviewDto.content;
        review.user_nick = createReviewDto.user_nick;
        review.likecount = createReviewDto.likecount;
        console.log("파일", files);
        if (files && files.length > 0) {
            const imagePaths = [];
            for (const file of files) {
                const imagePath = file.path;
                imagePaths.push(imagePath);
            }
            review.images = imagePaths.join(',');
        }
        await this.reviewRepository.save(review);
        return { message: 'Review created successfully', review };
    }
    async getAllReviews() {
        const reviews = await this.reviewRepository.find();
        const reviewsWithImageUrl = reviews.map((review) => {
            const imagePaths = review.images.split(',');
            const imageUrls = imagePaths.map((imagePath) => {
                const imageName = path.basename(imagePath);
                const imageUrl = `http://192.168.35.29:4000/upload/images/${imageName}`;
                return imageUrl;
            });
            return Object.assign(Object.assign({}, review), { imageUrl: imageUrls });
        });
        return { message: '리뷰를 성공적으로 불러왔습니다', reviews: reviewsWithImageUrl };
    }
    async getReviewById(id) {
        const review = await this.reviewRepository.findOne({ where: { id } });
        if (!review) {
            throw new common_1.NotFoundException('Review not found');
        }
        const imagePaths = review.images.split(',');
        const imageUrls = imagePaths.map((imagePath) => {
            const imageName = path.basename(imagePath);
            const imageUrl = `http://192.168.35.29:4000/upload/images/${imageName}`;
            return imageUrl;
        });
        const reviewWithImageUrl = Object.assign(Object.assign({}, review), { imageUrl: imageUrls });
        return { message: '리뷰를 성공적으로 불러왔습니다', review: reviewWithImageUrl };
    }
    async getReviewByuserId(user_idx) {
        const reviews = await this.reviewRepository.find({ where: { user_idx } });
        if (!reviews) {
            throw new common_1.NotFoundException('Review not found');
        }
        const reviewsWithImageUrl = reviews.map((review) => {
            const imagePaths = review.images.split(',');
            const imageUrls = imagePaths.map((imagePath) => {
                const imageName = path.basename(imagePath);
                const imageUrl = `http://192.168.35.29:4000/upload/images/${imageName}`;
                return imageUrl;
            });
            return Object.assign(Object.assign({}, review), { imageUrl: imageUrls });
        });
        return { message: '나의 리뷰를 성공적으로 불러왔습니다', reviews: reviewsWithImageUrl };
    }
    async likeReview(likeData) {
        const { user_id, review_id } = likeData;
        const user = await this.userService.getUserByIdx(user_id);
        const review = await this.reviewService.getReviewByIdx(review_id);
        const existingLike = await this.reviewService.getReviewLike(user_id, review_id);
        if (existingLike) {
            await this.reviewService.removeReviewLike(existingLike);
            await this.reviewService.decrementLikeCount(review);
            return { message: 'Review like removed successfully' };
        }
        const like = new like_entity_1.Review_like();
        like.user = user;
        like.review = review;
        await this.reviewService.saveReviewLike(like);
        await this.reviewService.incrementLikeCount(review);
        return { message: 'Review liked successfully', like };
    }
    async createReviewComment(comments) {
        try {
            const savedComment = await this.reviewService.createComment(comments);
            return { message: 'Review comment added successfully', comment: savedComment };
        }
        catch (error) {
            return { error: error.message };
        }
    }
    async getComment(reviewId) {
        const Comment = await this.reviewService.getCommentsByReviewId(reviewId);
        if (!Comment) {
            return { message: "댓글 정보를 찾을 수 없습니다" };
        }
        else {
            return { message: "댓글 불러오기 성공", Comment };
        }
    }
    async DeleteComment(id) {
        const Comment = await this.reviewService.deleteComment(id);
        return { message: "댓글삭제 성공", Comment };
    }
    async getMyLiked(user_id) {
        const reviews = await this.reviewService.getMyReviewLike(user_id);
        const reviewsWithImageUrl = reviews.map((review) => {
            const imagePaths = review.images.split(',');
            const imageUrls = imagePaths.map((imagePath) => {
                const imageName = path.basename(imagePath);
                const imageUrl = `http://192.168.35.29:4000/upload/images/${imageName}`;
                return imageUrl;
            });
            return Object.assign(Object.assign({}, review), { imageUrl: imageUrls });
        });
        if (!reviews) {
            return { message: "게시글을 찾을 수 없습니다." };
        }
        else {
            return { message: "게시글 불러오기 성공", reviewsWithImageUrl };
        }
    }
};
__decorate([
    (0, common_1.Post)('create'),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('images[]', null, {
        storage: (0, multer_1.diskStorage)({
            destination: (req, file, cb) => {
                const uploadFolder = `./upload/images/`;
                fs.mkdirSync(uploadFolder, { recursive: true });
                cb(null, uploadFolder);
            },
            filename: (req, file, cb) => {
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                const extension = (0, path_1.extname)(file.originalname);
                cb(null, `${uniqueSuffix}${extension}`);
            },
        }),
    })),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, create_review_dto_1.CreateReviewDto]),
    __metadata("design:returntype", Promise)
], ReviewController.prototype, "createReview", null);
__decorate([
    (0, common_1.Get)('/get_all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ReviewController.prototype, "getAllReviews", null);
__decorate([
    (0, common_1.Get)('/get_review'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ReviewController.prototype, "getReviewById", null);
__decorate([
    (0, common_1.Get)('/get_my_review'),
    __param(0, (0, common_1.Query)('user_idx')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ReviewController.prototype, "getReviewByuserId", null);
__decorate([
    (0, common_1.Post)('review_like'),
    (0, swagger_1.ApiTags)('Review/Like'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_review_dto_1.LikeDataDto]),
    __metadata("design:returntype", Promise)
], ReviewController.prototype, "likeReview", null);
__decorate([
    (0, common_1.Post)('review_comment'),
    (0, swagger_1.ApiTags)('Review/Comment'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_review_dto_1.CommentDataDto]),
    __metadata("design:returntype", Promise)
], ReviewController.prototype, "createReviewComment", null);
__decorate([
    (0, common_1.Get)('get_review_comment'),
    (0, swagger_1.ApiTags)('Review/Comment'),
    __param(0, (0, common_1.Query)('reviewID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ReviewController.prototype, "getComment", null);
__decorate([
    (0, common_1.Delete)('delete_comment'),
    (0, swagger_1.ApiTags)('Review/Comment'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ReviewController.prototype, "DeleteComment", null);
__decorate([
    (0, common_1.Get)('get_my_liked'),
    (0, swagger_1.ApiTags)('Review'),
    __param(0, (0, common_1.Query)('userIdx')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ReviewController.prototype, "getMyLiked", null);
exports.ReviewController = ReviewController = __decorate([
    (0, common_1.Controller)('review'),
    __param(0, (0, typeorm_1.InjectRepository)(review_entity_1.Review)),
    __metadata("design:paramtypes", [typeorm_2.Repository, user_service_1.UserService, review_service_1.ReviewService])
], ReviewController);
//# sourceMappingURL=review.controller.js.map