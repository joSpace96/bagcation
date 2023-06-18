import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';

@Entity()
export class Plan {
  @PrimaryGeneratedColumn()
  idx: number;

  @Column()
  title: string;

  @Column()
  period: string;

  @Column()
  theme: string;

  @Column()
  startdate: Date;

  @OneToMany(() => Days, day => day.plan)
  days: Days[];

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

  @ManyToOne(() => Plan, plan => plan.days)
  @JoinColumn({ name: 'plan_idx' }) // 외래 키 컬럼명
  plan: Plan;

  @OneToMany(() => Location, location => location.day)
  locations: Location[];

  @Column()
  day: number;
}

@Entity()
export class Location {
  @PrimaryGeneratedColumn()
  idx: number;

  @ManyToOne(() => Days, day => day.locations)
  @JoinColumn({ name: 'days_idx' }) // 외래 키 컬럼명
  day: Days;

  @OneToMany(() => Local, local => local.location)
  locals: Local[];

  @Column()
  location: string;
}

@Entity()
export class Local {
  @PrimaryGeneratedColumn()
  idx: number;

  @ManyToOne(() => Location, location => location.locals)
  @JoinColumn({ name: 'location_idx' }) // 외래 키 컬럼명
  location: Location;

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
