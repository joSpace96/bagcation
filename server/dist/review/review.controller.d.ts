import { Repository } from 'typeorm';
import { Review } from 'src/domain/review.entity';
import { CreateReviewDto } from './dto/create-review.dto';
import * as multer from 'multer';
export declare class ReviewController {
    private readonly reviewRepository;
    constructor(reviewRepository: Repository<Review>);
    createReview(files: multer.File[], createReviewDto: CreateReviewDto): Promise<{
        message: string;
        review: Review;
    }>;
    getAllReviews(): Promise<{
        message: string;
        reviews: {
            imageUrl: string[];
            id: number;
            user_idx: number;
            title: string;
            user_nick: string;
            content: string;
            images: string;
        }[];
    }>;
    getReviewById(id: number): Promise<{
        message: string;
        review: {
            imageUrl: string[];
            id: number;
            user_idx: number;
            title: string;
            user_nick: string;
            content: string;
            images: string;
        };
    }>;
    getReviewByuserId(user_idx: number): Promise<{
        message: string;
        reviews: {
            imageUrl: string[];
            id: number;
            user_idx: number;
            title: string;
            user_nick: string;
            content: string;
            images: string;
        }[];
    }>;
}
