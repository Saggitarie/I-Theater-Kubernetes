import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import * as ormconfig from '../ormconfig';

import { MovielistModule } from './movielist/movielist.module';

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig), MovielistModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
