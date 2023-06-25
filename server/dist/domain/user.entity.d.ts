import { Plan_like } from './like.entity';
import { Review_comment } from './review.entity';
export declare class User {
    idx: number;
    email: string;
    password: string;
    nick: string;
    profile: string;
    kakaoUserId: string;
    nickname: string;
    profileImage: string;
    likes: Plan_like[];
    comments: Review_comment[];
}
