import { Module } from '@nestjs/common';
import { LoginController, UserController } from './user.controller';
import { KakaoAuthService, UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/domain/user.entity';
import { ConfigService } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [TypeOrmModule.forFeature([User]), HttpModule], // HttpModule을 추가
  controllers: [UserController, LoginController],
  providers: [UserService, KakaoAuthService, ConfigService],
})
export class UserModule {}
