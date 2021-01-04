import { Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MovieList } from './movielist.entity';
import { Movielist } from './movielist.interface';

@Injectable()
export class MovielistService {
  constructor(
    @InjectRepository(MovieList)
    private movieListRepository: Repository<MovieList>,
  ) {}

  async fetchAll(): Promise<Movielist[]> {
    return await this.movieListRepository.find();
  }

  async insertOne(@Param() movieName): Promise<void> {
    await this.movieListRepository.insert({
      movieName: movieName,
    });
  }
}
