// src/app.controller.spec.ts

import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { PostService } from './post/post.service';

describe('AppController', () => {
  let appController: AppController;
  let postService: PostService;

  beforeEach(async () => {
    postService = new PostService(); // 가짜 서비스 객체 생성

    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [{ provide: PostService, useValue: postService }],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('findAll', () => {
    it('should return an array of posts', () => {
      jest.spyOn(postService, 'findAll').mockReturnValue([]);

      expect(appController.findAll()).toEqual([]);
    });
  });
});
