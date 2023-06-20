import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlanController } from './plan.controller';
import { PlanService } from './plan.service';
import { Plan , Travel_Nation , Plan_Schedule } from '../domain/plan.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Plan,Travel_Nation,Plan_Schedule])],
  controllers: [PlanController],
  providers: [PlanService],
})
export class PlanModule {}
