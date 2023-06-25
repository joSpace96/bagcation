import { CommentDataDto } from './dto/create-review.dto';
import { Review, Review_comment } from 'src/domain/review.entity';
import { User } from 'src/domain/user.entity';
import { Repository } from 'typeorm';
import { Review_like } from 'src/domain/like.entity';
export declare class ReviewService {
    private readonly userRepository;
    private readonly reviewRepository;
    private readonly reviewLikeRepository;
    private readonly reviewCommentRepository;
    constructor(userRepository: Repository<User>, reviewRepository: Repository<Review>, reviewLikeRepository: Repository<Review_like>, reviewCommentRepository: Repository<Review_comment>);
    getReviewByIdx(id: number): Promise<Review>;
    incrementLikeCount(review: Review): Promise<void>;
    decrementLikeCount(review: Review): Promise<void>;
    saveReviewLike(like: Review_like): Promise<void>;
    removeReviewLike(like: Review_like): Promise<void>;
    getMyReviewLike(userIdx: number): Promise<Review[] | undefined>;
    getReviewLike(user_id: number, review_id: number): Promise<Review_like | undefined>;
    create(createCommentDto: CommentDataDto): Promise<CommentDataDto & Review_comment>;
    createComment(comments: CommentDataDto): Promise<Review_comment>;
    getCommentsByReviewId(reviewId: number): Promise<Review_comment[]>;
    deleteComment(idx: number): Promise<void>;
    findById(id: number): Promise<Review>;
}
