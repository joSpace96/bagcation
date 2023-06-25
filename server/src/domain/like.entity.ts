import { Entity, ManyToMany, JoinTable, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Plan } from './plan.entity';
import { User } from './user.entity';
import { Review } from './review.entity';

@Entity()
export class Plan_like {
  @PrimaryGeneratedColumn()
  idx: number;

  @ManyToOne(() => User, user => user.likes)
  user: User;

  @ManyToOne(() => Plan, plan => plan.likes)
  plan: Plan;
}

@Entity()
export class Review_like {
  @PrimaryGeneratedColumn()
  idx: number;

  @ManyToOne(() => User, user => user.likes)
  user: User;

  @ManyToOne(() => Review, review => review.likes)
  review: Review;
}
