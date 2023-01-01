import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class GameDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @IsNotEmpty()
  rating: number;

  images: Array<any>;
  comments: Array<any>;
  categories: Array<string>;
}

export class UpdateGameDto {
  @IsString()
  @IsOptional()
  title: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsNumber()
  @IsOptional()
  rating: number;

  @IsOptional()
  images: Array<any>;

  @IsOptional()
  comments: Array<any>;

  @IsOptional()
  categories: Array<string>;
}

export class AllGameEntries {
  @IsOptional()
  title: string;

  @IsOptional()
  description: string;

  @IsOptional()
  rating: number;

  @IsOptional()
  images: Array<any>;

  @IsOptional()
  comments: Array<any>;

  @IsOptional()
  categories: Array<string>;
}
