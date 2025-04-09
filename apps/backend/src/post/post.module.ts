import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';

@Module({
  controllers: [PostController],
  providers: [PostService],
  exports: [PostService], // 다른 모듈에서 사용하려면 exports 필요
})
export class PostModule {}
