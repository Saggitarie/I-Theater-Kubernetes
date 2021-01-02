import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { MovielistService } from './movielist.service';

import { Request } from 'express';
import { MovielistSubscriber } from './movielist.subscriber';

@Controller('movielist')
export class MovielistController {
  constructor(
    private movieListService: MovielistService,
    private movieListSubscriber: MovielistSubscriber,
  ) {}

  @Get()
  fetchAll(): any {
    return this.movieListService.fetchAll();
  }

  @Post()
  insertOne(@Req() request: Request): void {
    // console.log(request.body);
    this.movieListService.insertOne(request.body.movieName);
  }
}
