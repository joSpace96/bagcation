import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from './orm.config';
import { MapModule } from './map/map.module';
import { PlanModule } from './plan/plan.module';
import { ReviewModule } from './review/review.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({ useFactory: ormConfig }),
    UserModule,
    MapModule,
    PlanModule,
    ReviewModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
