import { Module } from '@nestjs/common';
import { LoginController, UserController } from './user.controller';
import { KakaoAuthService, UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/domain/user.entity';
import { ConfigService } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { Plan_like } from 'src/domain/like.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User]), HttpModule,Plan_like], // HttpModule을 추가
  controllers: [UserController, LoginController],
  providers: [UserService, KakaoAuthService, ConfigService],
})
export class UserModule {}
