import { Repository } from 'typeorm';
import { Plan, Travel_Nation, Plan_Schedule } from '../domain/plan.entity';
import { CreatePlanDto } from './dto/create-plan.dto';
import { User } from 'src/domain/user.entity';
import { Plan_like } from 'src/domain/like.entity';
export declare class PlanService {
    private readonly planRepository;
    private readonly travelNationRepository;
    private readonly planScheduleRepository;
    private readonly planLikeRepository;
    private readonly userRepository;
    constructor(planRepository: Repository<Plan>, travelNationRepository: Repository<Travel_Nation>, planScheduleRepository: Repository<Plan_Schedule>, planLikeRepository: Repository<Plan_like>, userRepository: Repository<User>);
    createPlan(createPlanDto: CreatePlanDto): Promise<Plan>;
    findById(idx: number): Promise<Plan>;
    findByuserId(user_idx: number): Promise<Plan[]>;
    findAll(): Promise<Plan[]>;
    getPlanByIdx(idx: number): Promise<Plan>;
    incrementLikeCount(plan: Plan): Promise<void>;
    decrementLikeCount(plan: Plan): Promise<void>;
    savePlanLike(like: Plan_like): Promise<void>;
    removePlanLike(like: Plan_like): Promise<void>;
    getPlanLike(userIdx: number, planIdx: number): Promise<Plan_like | undefined>;
    getMyPlanLike(userIdx: number): Promise<Plan[] | undefined>;
}
