import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { Post as PostEntity } from './entities/post.entity';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  create(@Body() createPostDto: CreatePostDto): PostEntity {
    return this.postService.create(createPostDto);
  }

  @Get()
  findAll(): PostEntity[] {
    return this.postService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): PostEntity {
    return this.postService.findOne(Number(id));
  }

  @Delete(':id')
  remove(@Param('id') id: string): string {
    this.postService.remove(Number(id));
    return `Post with ID ${id} deleted successfully`;
  }
}
