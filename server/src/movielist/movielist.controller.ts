import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { MovielistService } from './movielist.service';

import { Request } from 'express';
import { MovielistSubscriber } from './movielist.subscriber';
import { Movielist } from './movielist.interface';

@Controller('movielist')
export class MovielistController {
  constructor(
    private movieListService: MovielistService,
    private movieListSubscriber: MovielistSubscriber,
  ) {}

  @Get()
  fetchAll(): Promise<Movielist[]> {
    return this.movieListService.fetchAll();
  }

  @Post()
  insertOne(@Req() request: Request): void {
    // console.log(request.body);
    this.movieListService.insertOne(request.body.movieName);
  }
}
