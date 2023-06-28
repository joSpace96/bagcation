import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { Plan_like } from './like.entity';


@Entity()
export class Plan {
  @PrimaryGeneratedColumn()
  idx: number;

  @Column()
  user_idx: number;

  @Column()
  title: string;

  @Column()
  theme: string;

  @Column()
  period: string;

  @Column()
  startdate: Date;

  @Column()
  views: number;

  @Column()
  likecount: number;

  @Column()
  save: boolean;

  @OneToMany(() => Travel_Nation, travelNation => travelNation.plan)
  travelNations: Travel_Nation[];

  @OneToMany(() => Plan_Schedule, planSchedule => planSchedule.plan)
  planSchedules: Plan_Schedule[];

  @OneToMany(() => Plan_like, planLike => planLike.plan)
  likes: Plan_like[];

}

@Entity()
export class Travel_Nation {
  @PrimaryGeneratedColumn()
  idx: number;

  @ManyToOne(() => Plan, plan => plan.travelNations)
  @JoinColumn({ name: 'plan_idx' })
  plan: Plan;

  @Column()
  nation: string;

  @Column()
  city: string;

  @Column('double')
  lat: number;

  @Column('double')
  lng: number;
}

@Entity()
export class Plan_Schedule {
  @PrimaryGeneratedColumn()
  idx: number;

  @ManyToOne(() => Plan, plan => plan.planSchedules)
  @JoinColumn({ name: 'plan_idx' })
  plan: Plan;

  @Column()
  city: string;

  @Column()
  datetime: string;

  @Column()
  time: string;

  @Column()
  content: string;
}
