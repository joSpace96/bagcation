import { PlanService } from './plan.service';
import { CreatePlanDto } from './dto/create-plan.dto';
export declare class PlanController {
    private readonly planService;
    constructor(planService: PlanService);
    createPlan(createPlanDto: CreatePlanDto): Promise<number>;
    getPlan(idx: number): Promise<{
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
}
