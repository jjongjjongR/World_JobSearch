// src/post/entities/ppost.entity.ts

import { IsString, IsNotEmpty } from 'class-validator';

export class Post {
  id: number;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsString()
  @IsNotEmpty()
  author: string;

  //createdAt: Date;

  constructor(partial: Partial<Post>) {
    Object.assign(this, partial);
    //this.createdAt = new Date();
  }
}
