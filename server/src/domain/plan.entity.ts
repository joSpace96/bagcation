import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';
@Entity()
export class Plan {
  @PrimaryGeneratedColumn()
  idx: number;

  @Column()
  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_idx' }) // 외래 키 컬럼명
  user_idx: number;

  @Column()
  title: string;

  @Column()
  OD: boolean;

  @Column()
  period: string;

  @Column()
  theme: string;

  @Column()
  season: string;
  @Column()
  startdate: Date;
  @Column() // Updated to string column type
  views: string;
  @Column()
  likecount: number;
  @Column()
  save: boolean;
}

@Entity()
export class Days {
  @PrimaryGeneratedColumn()
  idx: number;

  @Column()
  plan_idx: number;

  @Column()
  day: number;
}
@Entity()
export class Location {
  @PrimaryGeneratedColumn()
  idx: number;

  @Column()
  days_idx: number;

  @Column()
  location: string;
}
@Entity()
export class local {
  @PrimaryGeneratedColumn()
  idx: number;

  @Column()
  location_idx: number;

  @Column()
  day: number;
  @Column('double')
  lat: number;

  @Column('double')
  lng: number;
  @Column()
  localname: string;
  @Column()
  sequence: number;
}