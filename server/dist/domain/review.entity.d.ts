import { Review_like } from './like.entity';
import { User } from './user.entity';
export declare class Review {
    id: number;
    user_idx: number;
    title: string;
    user_nick: string;
    content: string;
    images: string;
    likecount: number;
    likes: Review_like[];
    comments: Review_comment[];
}
export declare class Review_comment {
    idx: number;
    user: User;
    review: Review;
    comment: string;
}
