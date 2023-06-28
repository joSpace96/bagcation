import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlanController } from './plan.controller';
import { PlanService } from './plan.service';
import { Plan , Travel_Nation , Plan_Schedule } from '../domain/plan.entity';
import { Plan_like } from 'src/domain/like.entity';
import { User } from 'src/domain/user.entity';
import { UserService } from 'src/user/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([Plan,Travel_Nation,Plan_Schedule,Plan_like,User])],
  controllers: [PlanController],
  providers: [PlanService,UserService],
})
export class PlanModule {}
