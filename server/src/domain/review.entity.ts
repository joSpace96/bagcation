import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Review_like } from './like.entity';
import { User } from './user.entity';

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_idx: number;

  @Column()
  title: string;

  @Column()
  user_nick: string;

  @Column()
  content: string;

  @Column('text', { array: true, nullable: true })
  images: string;

  @Column()
  likecount: number;

  @OneToMany(() => Review_like, reviewLike => reviewLike.review)
  likes: Review_like[];

  @OneToMany(() => Review_comment, reviewComment => reviewComment.comment)
  comments: Review_comment[];
}
@Entity()
export class Review_comment{
  @PrimaryGeneratedColumn()
  idx: number;

  @ManyToOne(() => User, user => user.comments)
  user: User;

  @ManyToOne(() => Review, review => review.comments)
  review: Review;

  @Column()
  comment: string;
}

