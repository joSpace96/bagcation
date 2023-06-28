import { Module } from '@nestjs/common';
import { ReviewService } from './review.service';
import { ReviewController } from './review.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Review, Review_comment } from 'src/domain/review.entity';
import { Review_like } from 'src/domain/like.entity';
import { User } from 'src/domain/user.entity';
import { UserService } from 'src/user/user.service';

@Module({
  imports:[TypeOrmModule.forFeature([Review,Review_like,User,Review_comment])],
  controllers: [ReviewController],
  providers: [ReviewService,UserService]
})
export class ReviewModule {}
