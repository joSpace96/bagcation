import { Controller, Post, UploadedFiles, UseInterceptors, Body, Get, Param, NotFoundException, Query, Delete } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import * as path from 'path';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Review } from 'src/domain/review.entity';
import { CommentDataDto, CreateReviewDto, LikeDataDto } from './dto/create-review.dto';
import * as multer from 'multer';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';
import { extname } from 'path';
import { diskStorage } from 'multer';
import * as fs from 'fs';
import { UserService } from 'src/user/user.service';
import { ReviewService } from './review.service';
import { Review_like } from 'src/domain/like.entity';
import apiServer from 'src/api/api';



@Controller('review')
export class ReviewController {
  constructor(
    @InjectRepository(Review)
    private readonly reviewRepository: Repository<Review>,private readonly userService: UserService,private readonly reviewService: ReviewService,
  ) {}

  @Post('create')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(
    FilesInterceptor('images[]', null, {
      storage: diskStorage({
        destination: (req, file, cb) => {
          const uploadFolder = `./upload/images/`;
          fs.mkdirSync(uploadFolder, { recursive: true });
          cb(null, uploadFolder);
        },
        filename: (req, file, cb) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          const extension = extname(file.originalname);
          cb(null, `${uniqueSuffix}${extension}`);
        },
      }),
    })
  )
  async createReview(
    @UploadedFiles() files: multer.File[],
    @Body() createReviewDto: CreateReviewDto,
  ) {
    const review = new Review();
    review.user_idx = createReviewDto.user_idx;
    review.title = createReviewDto.title;
    review.content = createReviewDto.content;
    review.user_nick = createReviewDto.user_nick;
    review.likecount = createReviewDto.likecount;

    console.log("파일", files);


    if (files && files.length > 0) {
      const imagePaths = [];
      for (const file of files) {
        const imagePath = file.path;
        imagePaths.push(imagePath);
      }

      review.images = imagePaths.join(','); // 이미지 파일 경로들을 쉼표로 구분하여 문자열로 저장
    }

    await this.reviewRepository.save(review);

    return { message: 'Review created successfully', review };
  }
  @Get('/get_all')
  async getAllReviews() {
    const reviews = await this.reviewRepository.find();

    const reviewsWithImageUrl = reviews.map((review) => {
      const imagePaths = review.images.split(',');

      const imageUrls = imagePaths.map((imagePath) => {
        const imageName = path.basename(imagePath);
        const imageUrl = `${apiServer}/upload/images/${imageName}`;
        return imageUrl;
      });

      return {
        ...review,
        imageUrl: imageUrls,
      };
    });

    return { message: '리뷰를 성공적으로 불러왔습니다', reviews: reviewsWithImageUrl };
  }
  @Get('/get_review')
  async getReviewById(@Query('id') id: number) {
    const review = await this.reviewRepository.findOne({where:{id}} );


    if (!review) {
      throw new NotFoundException('Review not found');
    }

    const imagePaths = review.images.split(',');
    const imageUrls = imagePaths.map((imagePath) => {
      const imageName = path.basename(imagePath);
      // const imageUrl = `http://192.168.0.42:4000/upload/images/${imageName}`;
      const imageUrl = `${apiServer}/upload/images/${imageName}`;
      return imageUrl;
    });

    const reviewWithImageUrl = {
      ...review,
      imageUrl: imageUrls,
    };

    return { message: '리뷰를 성공적으로 불러왔습니다', review: reviewWithImageUrl };
  }
  @Get('/get_my_review')
  async getReviewByuserId(@Query('user_idx') user_idx: number) {
    const reviews = await this.reviewRepository.find({ where: { user_idx } });
  
    if (!reviews) {
      throw new NotFoundException('Review not found');
    }
  
    const reviewsWithImageUrl = reviews.map((review) => {
      const imagePaths = review.images.split(',');
  
      const imageUrls = imagePaths.map((imagePath) => {
        const imageName = path.basename(imagePath);
        const imageUrl = `${apiServer}/upload/images/${imageName}`;
        return imageUrl;
      });
  
      return {
        ...review,
        imageUrl: imageUrls,
      };
    });
  
    return { message: '나의 리뷰를 성공적으로 불러왔습니다', reviews: reviewsWithImageUrl };
  }
  @Post('review_like')
  @ApiTags('Review/Like')
  async likeReview(@Body() likeData: LikeDataDto) {
    const { user_id, review_id } = likeData;
  
    // 좋아요를 누를 사용자와 계획 정보 가져오기
    const user = await this.userService.getUserByIdx(user_id);
    const review = await this.reviewService.getReviewByIdx(review_id);
  
    // 이미 좋아요를 눌렀는지 확인
    const existingLike = await this.reviewService.getReviewLike(user_id, review_id);
  
    if (existingLike) {
      // 이미 좋아요가 있는 경우, 좋아요를 해제하고 좋아요 수 감소
      await this.reviewService.removeReviewLike(existingLike);
      await this.reviewService.decrementLikeCount(review);
      return { message: 'Review like removed successfully' };
    }
  
    // Plan_like 엔티티 인스턴스 생성 및 관계 설정
    const like = new Review_like();
    like.user = user;
    like.review = review;
  
    // 좋아요 저장 및 업데이트
    await this.reviewService.saveReviewLike(like);
    await this.reviewService.incrementLikeCount(review);
  
    return { message: 'Review liked successfully',like };
  }
  @Post('review_comment')
  @ApiTags('Review/Comment')
  async createReviewComment(@Body() comments: CommentDataDto) {
    try {
      const savedComment = await this.reviewService.createComment(comments);
      return { message: 'Review comment added successfully', comment: savedComment };
    } catch (error) {
      return { error: error.message };
    }
  }
  @Get('get_review_comment')
  @ApiTags('Review/Comment')
  async getComment(@Query('reviewID') reviewId:number ){
    const Comment = await this.reviewService.getCommentsByReviewId(reviewId)
    if(!Comment){
      return {message : "댓글 정보를 찾을 수 없습니다"}
    }else{
      return {message : "댓글 불러오기 성공",Comment}
    }
  }

  @Delete('delete_comment')
  @ApiTags('Review/Comment')
  async DeleteComment(@Query('id') id:number){
    const Comment = await this.reviewService.deleteComment(id)  
      return{message:"댓글삭제 성공", Comment}    
  }

  @Get('get_my_liked')
  @ApiTags('Review')
  async getMyLiked(@Query('userIdx') user_id:number){
    const reviews = await this.reviewService.getMyReviewLike(user_id);

    const reviewsWithImageUrl = reviews.map((review) => {
      const imagePaths = review.images.split(',');
  
      const imageUrls = imagePaths.map((imagePath) => {
        const imageName = path.basename(imagePath);
        const imageUrl = `${apiServer}/upload/images/${imageName}`;
        return imageUrl;
      });
  
      return {
        ...review,
        imageUrl: imageUrls,
      };
    });
    
    if(!reviews){
        return {message : "게시글을 찾을 수 없습니다."}
    }else{
        return {message:"게시글 불러오기 성공", reviewsWithImageUrl}
    }
  }
}
