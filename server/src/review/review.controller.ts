import { Controller, Post, UploadedFiles, UseInterceptors, Body, Get, Param, NotFoundException, Query } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import * as path from 'path';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Review } from 'src/domain/review.entity';
import { CreateReviewDto } from './dto/create-review.dto';
import * as multer from 'multer';
import { ApiConsumes, ApiBody } from '@nestjs/swagger';
import { extname } from 'path';
import * as moment from 'moment';
import { diskStorage } from 'multer';
import * as fs from 'fs';


@Controller('review')
export class ReviewController {
  constructor(
    @InjectRepository(Review)
    private readonly reviewRepository: Repository<Review>,
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
        const imageUrl = `http://192.168.0.42:4000/upload/images/${imageName}`;
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
    const review = await this.reviewRepository.findOne({where:{id}});

    if (!review) {
      throw new NotFoundException('Review not found');
    }

    const imagePaths = review.images.split(',');
    const imageUrls = imagePaths.map((imagePath) => {
      const imageName = path.basename(imagePath);
      const imageUrl = `http://192.168.0.42:4000/upload/images/${imageName}`;
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
        const imageUrl = `http://192.168.0.42:4000/upload/images/${imageName}`;
        return imageUrl;
      });
  
      return {
        ...review,
        imageUrl: imageUrls,
      };
    });
  
    return { message: '나의 리뷰를 성공적으로 불러왔습니다', reviews: reviewsWithImageUrl };
  }
  
}
