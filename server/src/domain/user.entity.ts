import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column()
  profile: string;

  @Column({ nullable: true }) // 카카오 유저 아이디는 필수가 아닐 수 있으므로 nullable: true로 설정
  kakaoUserId: string;

  @Column({ nullable: true }) // 닉네임은 필수가 아닐 수 있으므로 nullable: true로 설정
  nickname: string;

  @Column({ nullable: true }) // 프로필 이미지는 필수가 아닐 수 있으므로 nullable: true로 설정
  profileImage: string;
}
