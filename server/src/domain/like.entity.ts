import { Entity, ManyToMany, JoinTable, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Plan } from './plan.entity';
import { User } from './user.entity';

@Entity()
export class Plan_like {
  @PrimaryGeneratedColumn()
  idx: number;

  @ManyToOne(() => User, user => user.likes)
  user: User;

  @ManyToOne(() => Plan, plan => plan.likes)
  plan: Plan;
}

