import { Controller, Get, Post, Req } from '@nestjs/common';
import { MovielistService } from './movielist.service';

import { Request } from 'express';

@Controller('movielist')
export class MovielistController {
  constructor(private movieListService: MovielistService) {}

  @Get()
  fetchAll(@Req() request: Request): any {
    return this.movieListService.fetchAll();
  }

  @Post()
  insertOne(@Req() request: Request): void {
    this.movieListService.insertOne(request.body.movieName);
  }
}
