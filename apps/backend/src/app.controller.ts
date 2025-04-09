//src/app.controller.ts

import { Controller, Get, Post, Body } from '@nestjs/common';
import { PostService } from './post/post.service';
import { CreatePostDto } from './post/dto/create-post.dto';
import { Post as PostEntity } from './post/entities/post.entity';

@Controller('posts')
export class AppController {
  constructor(private readonly postService: PostService) {}

  @Post()
  create(@Body() createPostDto: CreatePostDto): PostEntity {
    return this.postService.create(createPostDto);
  }

  @Get()
  findAll(): PostEntity[] {
    return this.postService.findAll();
  }
}
