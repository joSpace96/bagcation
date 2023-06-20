import { Repository } from 'typeorm';
import { Plan, Travel_Nation, Plan_Schedule } from '../domain/plan.entity';
import { CreatePlanDto } from './dto/create-plan.dto';
export declare class PlanService {
    private readonly planRepository;
    private readonly travelNationRepository;
    private readonly planScheduleRepository;
    constructor(planRepository: Repository<Plan>, travelNationRepository: Repository<Travel_Nation>, planScheduleRepository: Repository<Plan_Schedule>);
    createPlan(createPlanDto: CreatePlanDto): Promise<Plan>;
    findById(idx: number): Promise<Plan>;
    findAll(): Promise<Plan[]>;
}
