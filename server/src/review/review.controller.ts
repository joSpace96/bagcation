import { Controller, Post, UploadedFiles, UseInterceptors, Body } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import * as fs from 'fs-extra';
import * as path from 'path';
import * as multer from 'multer';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Review } from 'src/domain/review.entity';
import { CreateReviewDto } from './dto/create-review.dto';

@Controller('review')
export class ReviewController {
  constructor(
    @InjectRepository(Review)
    private readonly reviewRepository: Repository<Review>,
  ) {}

  @Post('create')
  @UseInterceptors(FilesInterceptor('images'))
  async createReview(@UploadedFiles() files: multer.File[], @Body() createReviewDto: CreateReviewDto) {
    const review = new Review();
    review.title = createReviewDto.title;
    review.content = createReviewDto.content;

    if (files && files.length > 0) {
      const uploadPath = path.join(__dirname, '..', 'upload', 'images');
      await fs.ensureDir(uploadPath);

      const imagePaths = [];
      for (const file of files) {
        const imagePath = path.join(uploadPath, file.originalname);
        await fs.move(file.path, imagePath);
        imagePaths.push(imagePath);
      }

      review.images = imagePaths.join(',');
    }

    await this.reviewRepository.save(review);

    return { message: 'Review created successfully', review };
  }
}
