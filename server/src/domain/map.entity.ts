import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Nation {
  @PrimaryGeneratedColumn()
  idx: bigint;

  @Column()
  continent: string;

  @Column()
  nation: string;

  @Column('double')
  lat: number;

  @Column('double')
  lng: number;
}

@Entity()
export class City {
  @PrimaryGeneratedColumn()
  idx: bigint;

  @Column()
  nation: string;

  @Column()
  city: string;

  @Column('double')
  lat: number;

  @Column('double')
  lng: number;
}
