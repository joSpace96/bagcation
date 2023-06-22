import * as multer from 'multer';
import { Repository } from 'typeorm';
import { Review } from 'src/domain/review.entity';
import { CreateReviewDto } from './dto/create-review.dto';
export declare class ReviewController {
    private readonly reviewRepository;
    constructor(reviewRepository: Repository<Review>);
    createReview(files: multer.File[], createReviewDto: CreateReviewDto): Promise<{
        message: string;
        review: Review;
    }>;
}
