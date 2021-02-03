import { Test, TestingModule } from '@nestjs/testing';
import { MovielistController } from '../src/movielist/movielist.controller';

describe('MovielistController', () => {
  let controller: MovielistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MovielistController],
    }).compile();

    controller = module.get<MovielistController>(MovielistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
