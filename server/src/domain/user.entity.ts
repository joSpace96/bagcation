import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { Plan_like } from './like.entity';
import { Review_comment } from './review.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  idx: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  nick: string;

  @Column({ nullable: true })
  profile: string;

  @Column({ nullable: true }) // 카카오 유저 아이디는 필수가 아닐 수 있으므로 nullable: true로 설정
  kakaoUserId: string;

  @Column({ nullable: true }) // 닉네임은 필수가 아닐 수 있으므로 nullable: true로 설정
  nickname: string;

  @Column({ nullable: true }) // 프로필 이미지는 필수가 아닐 수 있으므로 nullable: true로 설정
  profileImage: string;
  @OneToMany(() => Plan_like, planLike => planLike.user)
  likes: Plan_like[];

  @OneToMany(() => Review_comment, reviewComment => reviewComment.comment)
  comments: Review_comment[];
}
