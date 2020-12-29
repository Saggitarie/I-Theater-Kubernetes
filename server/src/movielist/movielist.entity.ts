import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MovieList {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  movieName: string;
}
