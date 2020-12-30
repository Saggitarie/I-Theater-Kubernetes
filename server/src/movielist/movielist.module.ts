import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovielistController } from './movielist.controller';
import { MovieList } from './movielist.entity';
import { MovielistService } from './movielist.service';
import { MovielistSubscriber } from './movielist.subscriber';

@Module({
  imports: [TypeOrmModule.forFeature([MovieList])],
  controllers: [MovielistController],
  providers: [MovielistService, MovielistSubscriber],
})
export class MovielistModule {}
