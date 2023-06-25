import { Injectable } from '@nestjs/common';
import { CommentDataDto, CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { Review, Review_comment } from 'src/domain/review.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/domain/user.entity';
import { Repository, getRepository } from 'typeorm';
import { Review_like } from 'src/domain/like.entity';

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Review)
    private readonly reviewRepository: Repository<Review>,
    @InjectRepository(Review_like)
    private readonly reviewLikeRepository: Repository<Review_like>,
    @InjectRepository(Review_comment)
    private readonly reviewCommentRepository: Repository<Review_comment>,
  ) {}
  async getReviewByIdx(id: number): Promise<Review> {
    return this.reviewRepository.findOne({where:{id}});
  }
  async incrementLikeCount(review: Review): Promise<void> {
    review.likecount++; // 좋아요 수 증가
    await this.reviewRepository.save(review);
  }
  async decrementLikeCount(review: Review): Promise<void> {
    review.likecount--; // 좋아요 수 감소
    await this.reviewRepository.save(review);
  }
  async saveReviewLike(like: Review_like): Promise<void> {
    await this.reviewLikeRepository.save(like);
  }
  async removeReviewLike(like: Review_like): Promise<void> {
    await this.reviewLikeRepository.remove(like);
  }
  async getMyReviewLike(userIdx: number): Promise<Review[] | undefined> {
    try {
      const myReviewLikes = await this.reviewRepository
      .createQueryBuilder("review")
      .leftJoinAndSelect("review.likes", "likes")
      .where("likes.user.idx = :userIdx", { userIdx })
      .getMany();

      

      return myReviewLikes;
    } catch (error) {
      console.log("Error occurred while fetching plan likes:", error);
      return undefined;
    }
  }
  async getReviewLike(user_id: number, review_id: number): Promise<Review_like | undefined> {
    return this.reviewLikeRepository.findOne({ where: { user: { idx: user_id }, review: { id: review_id } } });
  }

  async create(createCommentDto: CommentDataDto) {
    return await this.reviewCommentRepository.save(createCommentDto);
  }

  async createComment(comments: CommentDataDto): Promise<Review_comment> {
    const { user_id, review_id, comment } = comments;

    try {
      // 댓글을 달 사용자와 리뷰 정보 가져오기
      const user = await this.userRepository.findOne({where:{idx:user_id}});
      const review = await this.getReviewByIdx(review_id);

      // Review_comment 엔티티 인스턴스 생성 및 관계 설정
      const commentInstance = new Review_comment();
      commentInstance.user = user;
      commentInstance.review = review;
      commentInstance.comment = comment;

      // 댓글 저장
      const savedComment = await this.reviewCommentRepository.save(commentInstance);

      // 필요한 로직 수행

      return savedComment;
    } catch (error) {
      // 예외 처리
      throw new Error('Failed to add review comment');
    }

    
  }

  async getCommentsByReviewId(reviewId: number): Promise<Review_comment[]> {
    const comments = await this.reviewCommentRepository
      .createQueryBuilder('comment')
      .leftJoinAndSelect('comment.user', 'user')
      .where('comment.review.id = :reviewId', { reviewId })
      .getMany();
  
    return comments;
  }

  async deleteComment(idx: number): Promise<void> {
    try {
      // 댓글 조회
      const comment = await this.reviewCommentRepository.findOne({where:{idx}});
  
      if (!comment) {
        throw new Error('Comment not found');
      }
  
      // 댓글 삭제
      await this.reviewCommentRepository.remove(comment);
  
      // 필요한 로직 수행 (예: 댓글 삭제 후 다른 동작 수행)
  
    } catch (error) {
      // 예외 처리
      throw new Error('Failed to delete comment');
    }
  }
  async findById(id: number): Promise<Review> {
    return this.reviewRepository.findOne({ where: { id } });

  }

  

}
