import { Plan } from './plan.entity';
import { User } from './user.entity';
import { Review } from './review.entity';
export declare class Plan_like {
    idx: number;
    user: User;
    plan: Plan;
}
export declare class Review_like {
    idx: number;
    user: User;
    review: Review;
}
