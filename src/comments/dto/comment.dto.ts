import { IsNumber, IsOptional, IsString } from 'class-validator';
import { User } from 'src/users/interfaces/user';

export class CommentDto {
  @IsString()
  description: string;

  @IsNumber()
  rating: number;

  @IsString()
  @IsOptional()
  user: User;
}

export class AllCommentEntires {
  @IsOptional()
  description: string;

  @IsOptional()
  rating: number;

  @IsOptional()
  user: User;
}
