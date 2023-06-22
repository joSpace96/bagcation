import { PlanService } from './plan.service';
import { CreatePlanDto, LikeDataDto } from './dto/create-plan.dto';
import { UserService } from 'src/user/user.service';
import { Plan_like } from 'src/domain/like.entity';
export declare class PlanController {
    private readonly planService;
    private readonly userService;
    constructor(planService: PlanService, userService: UserService);
    createPlan(createPlanDto: CreatePlanDto): Promise<number>;
    getPlan(idx: number): Promise<{
        message: string;
        post?: undefined;
    } | {
        message: string;
        post: import("../domain/plan.entity").Plan;
    }>;
    getMyPlan(user_idx: number): Promise<{
        message: string;
        post?: undefined;
    } | {
        message: string;
        post: import("../domain/plan.entity").Plan[];
    }>;
    getMyLiked(userIdx: number): Promise<{
        message: string;
        post?: undefined;
    } | {
        message: string;
        post: import("../domain/plan.entity").Plan[];
    }>;
    getMyLikedPlan(idx: number): Promise<{
        message: string;
        post?: undefined;
    } | {
        message: string;
        post: import("../domain/plan.entity").Plan;
    }>;
    getAllPlan(): Promise<{
        message: string;
        All_post?: undefined;
    } | {
        message: string;
        All_post: import("../domain/plan.entity").Plan[];
    }>;
    likePlan(likeData: LikeDataDto): Promise<{
        message: string;
        like?: undefined;
    } | {
        message: string;
        like: Plan_like;
    }>;
}
