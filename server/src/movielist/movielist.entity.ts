import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

@Entity()
@Unique(['movieName'])
export class MovieList {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  @IsNotEmpty({ message: 'Movie Name must not be empty' })
  movieName: string;
}
