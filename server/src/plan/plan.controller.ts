import { Controller, Post, Body , Get, Query, Param } from '@nestjs/common';
import { PlanService } from './plan.service';
import { ApiTags } from '@nestjs/swagger';
import { CreatePlanDto, LikeDataDto } from './dto/create-plan.dto';
import { UserService } from 'src/user/user.service';
import { Plan_like } from 'src/domain/like.entity';

@Controller('plans')
export class PlanController {
  constructor(private readonly planService: PlanService,private readonly userService: UserService,) {}

  @Post('add_plan')
  @ApiTags('Plan')
  async createPlan(@Body() createPlanDto: CreatePlanDto) {
    const createdPlan = await this.planService.createPlan(createPlanDto);
    return createdPlan.idx; 
  }

  @Get('get_plan')
  @ApiTags('Plan')
  async getPlan(@Query('idx') idx:number){
    const post = await this.planService.findById(idx);
    if(!post){
        return {message : "게시글을 찾을 수 없습니다."}
    }else{
        return {message:"게시글 불러오기 성공", post}
    }
  }

  @Get('get_my_plan')
  @ApiTags('Plan')
  async getMyPlan(@Query('user_idx') user_idx:number){
    const post = await this.planService.findByuserId(user_idx);
    if(!post){
        return {message : "게시글을 찾을 수 없습니다."}
    }else{
        return {message:"게시글 불러오기 성공", post}
    }
  }

  @Get('get_my_liked')
  @ApiTags('Plan')
  async getMyLiked(@Query('userIdx') userIdx:number){
    const post = await this.planService.getMyPlanLike(userIdx);
    if(!post){
        return {message : "게시글을 찾을 수 없습니다."}
    }else{
        return {message:"게시글 불러오기 성공", post}
    }
  }

  @Get('get_my_likeplan')
  @ApiTags('Plan')
  async getMyLikedPlan(@Query('idx') idx:number){
    const post = await this.planService.findById(idx);
    if(!post){
        return {message : "게시글을 찾을 수 없습니다."}
    }else{
        return {message:"게시글 불러오기 성공", post}
    }
  }

  @Get('get_all_plan')
  @ApiTags('Plan')
  async getAllPlan(){
    const All_post = await this.planService.findAll();
    if(!All_post){
      return{message:"게시글을 찾을 수 없습니다."}
    }else{
      return{message:"게시글 불러오기 성공",All_post}
    }
  }

  @Post('plan_like')
  @ApiTags('Plan/Like')
  async likePlan(@Body() likeData: LikeDataDto) {
    const { userIdx, planIdx } = likeData;
  
    // 좋아요를 누를 사용자와 계획 정보 가져오기
    const user = await this.userService.getUserByIdx(userIdx);
    const plan = await this.planService.getPlanByIdx(planIdx);
  
    // 이미 좋아요를 눌렀는지 확인
    const existingLike = await this.planService.getPlanLike(userIdx, planIdx);
  
    if (existingLike) {
      // 이미 좋아요가 있는 경우, 좋아요를 해제하고 좋아요 수 감소
      await this.planService.removePlanLike(existingLike);
      await this.planService.decrementLikeCount(plan);
      return { message: 'Plan like removed successfully' };
    }
  
    // Plan_like 엔티티 인스턴스 생성 및 관계 설정
    const like = new Plan_like();
    like.user = user;
    like.plan = plan;
  
    // 좋아요 저장 및 업데이트
    await this.planService.savePlanLike(like);
    await this.planService.incrementLikeCount(plan);
  
    return { message: 'Plan liked successfully',like };
  }
}
