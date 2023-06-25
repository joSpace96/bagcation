export declare class CreateReviewDto {
    user_idx: number;
    title: string;
    user_nick: string;
    content: string;
    images: string;
    likecount: number;
}
export declare class LikeDataDto {
    user_id: number;
    review_id: number;
}
export declare class CommentDataDto {
    user_id: number;
    review_id: number;
    comment: string;
}
