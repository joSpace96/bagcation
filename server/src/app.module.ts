import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from './orm.config';
import { MapModule } from './map/map.module';
import { PlanModule } from './plan/plan.module';
import { ReviewModule } from './review/review.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ChatbotModule } from './chatbot/chatbot.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({ useFactory: ormConfig }),
    UserModule,
    MapModule,
    PlanModule,
    ReviewModule,
    ChatbotModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'upload', 'images'), // 정적 파일의 루트 경로를 지정합니다
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
