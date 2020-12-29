import { DynamicModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import * as ormconfig from '../ormconfig';

import { MovielistModule } from './movielist/movielist.module';

export function DatabaseOrmModule(): DynamicModule {
  // we could load the configuration from dotEnv here,
  // but typeORM cli would not be able to find the configuration file.

  return TypeOrmModule.forRoot(ormconfig);
}

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig), MovielistModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
