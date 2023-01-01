import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CommentDto {
  @IsString()
  description: string;

  @IsNumber()
  rating: number;

  @IsString()
  user: string;
}

export class UpdateCommentDto {
  @IsOptional()
  description: string;

  @IsOptional()
  rating: number;

  @IsOptional()
  user: string;
}
