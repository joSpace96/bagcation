import { Controller, Post, Body , Get, Query } from '@nestjs/common';
import { PlanService } from './plan.service';
import { ApiTags } from '@nestjs/swagger';
import { CreatePlanDto } from './dto/create-plan.dto';

@Controller('plans')
export class PlanController {
  constructor(private readonly planService: PlanService) {}

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
}
