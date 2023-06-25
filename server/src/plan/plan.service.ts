import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository } from 'typeorm';
import { Plan, Travel_Nation, Plan_Schedule } from '../domain/plan.entity';
import { CreatePlanDto} from './dto/create-plan.dto';
import { User } from 'src/domain/user.entity';
import { Plan_like } from 'src/domain/like.entity';

@Injectable()
export class PlanService {
  constructor(
    @InjectRepository(Plan)
    private readonly planRepository: Repository<Plan>,
    @InjectRepository(Travel_Nation)
    private readonly travelNationRepository: Repository<Travel_Nation>,
    @InjectRepository(Plan_Schedule)
    private readonly planScheduleRepository: Repository<Plan_Schedule>,
    @InjectRepository(Plan_like)
    private readonly planLikeRepository: Repository<Plan_like>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createPlan(createPlanDto: CreatePlanDto): Promise<Plan> {
    const plan = new Plan();
    plan.user_idx = createPlanDto.user_idx;
    plan.title = createPlanDto.title;
    plan.theme = createPlanDto.theme;
    plan.period = createPlanDto.period;
    plan.startdate = createPlanDto.startdate;
    plan.views = createPlanDto.views;
    plan.likecount = createPlanDto.likecount;
    plan.save = createPlanDto.save;

    const travelNations = createPlanDto.travelNations.map(nationData => {
      const travelNation = new Travel_Nation();
      travelNation.nation = nationData.nation;
      travelNation.city = nationData.city;
      travelNation.lat = nationData.lat;
      travelNation.lng = nationData.lng;
      travelNation.plan = plan;
      return travelNation;
    });
  

    const planSchedules = createPlanDto.planSchedules.map(scheduleData => {
      const planSchedule = new Plan_Schedule();
      planSchedule.city = scheduleData.city;
      planSchedule.datetime = scheduleData.datetime;
      planSchedule.time = scheduleData.time;
      planSchedule.content = scheduleData.content;
      planSchedule.plan = plan;
      return planSchedule;
    });
  
    // Save plan, travelNations, and planSchedules in a transaction
    return await this.planRepository.manager.transaction(async entityManager => {
      await entityManager.save(plan);
      await entityManager.save(travelNations);
      await entityManager.save(planSchedules);
      return plan;
    });
  }

  async findById(idx: number): Promise<Plan> {
    return this.planRepository.findOne({ where: { idx },relations: ['travelNations', 'planSchedules'], });

  }



  async findByuserId(user_idx: number): Promise<Plan[]> {
    const myplans = await this.planRepository.find({ where: { user_idx }, relations: ['travelNations', 'planSchedules'] });
    return myplans;
  }

  async findAll(): Promise<Plan[]> {
    return this.planRepository.find({
      relations: ['travelNations', 'planSchedules'],
    });
  }
  async getPlanByIdx(idx: number): Promise<Plan> {
    return this.planRepository.findOne({where:{idx}});
  }
  async incrementLikeCount(plan: Plan): Promise<void> {
    plan.likecount++; // 좋아요 수 증가
    await this.planRepository.save(plan);
  }
  async decrementLikeCount(plan: Plan): Promise<void> {
    plan.likecount--; // 좋아요 수 감소
    await this.planRepository.save(plan);
  }
  async savePlanLike(like: Plan_like): Promise<void> {
    await this.planLikeRepository.save(like);
  }
  async removePlanLike(like: Plan_like): Promise<void> {
    await this.planLikeRepository.remove(like);
  }
  async getPlanLike(userIdx: number, planIdx: number): Promise<Plan_like | undefined> {
    return this.planLikeRepository.findOne({ where: { user: { idx: userIdx }, plan: { idx: planIdx } } });
  }


  async getMyPlanLike(userIdx: number): Promise<Plan[] | undefined> {
    try {
      const myPlanLikes = await this.planRepository
      .createQueryBuilder("plan")
      .leftJoinAndSelect("plan.likes", "likes")
      .leftJoinAndSelect("plan.travelNations", "travelNations")
      .leftJoinAndSelect("plan.planSchedules", "planSchedules")
      .where("likes.user.idx = :userIdx", { userIdx })
      .getMany();

      return myPlanLikes;
    } catch (error) {
      console.log("Error occurred while fetching plan likes:", error);
      return undefined;
    }
  }
}
