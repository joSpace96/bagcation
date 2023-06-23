import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
