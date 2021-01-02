import { Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MovieList } from './movielist.entity';

@Injectable()
export class MovielistService {
  constructor(
    @InjectRepository(MovieList)
    private movieListRepository: Repository<MovieList>,
  ) {}

  async fetchAll(): Promise<MovieList[]> {
    return await this.movieListRepository.find();
  }

  async insertOne(@Param() movieName): Promise<void> {
    await this.movieListRepository.insert({
      movieName: movieName,
    });

    // return await this.movieListRepository.find();
  }
}
