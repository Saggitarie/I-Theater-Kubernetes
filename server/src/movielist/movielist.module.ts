import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovielistController } from './movielist.controller';
import { MovieList } from './movielist.entity';
import { MovielistService } from './movielist.service';

@Module({
  imports: [TypeOrmModule.forFeature([MovieList])],
  controllers: [MovielistController],
  providers: [MovielistService],
})
export class MovielistModule {}
