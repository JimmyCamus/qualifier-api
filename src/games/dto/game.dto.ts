import { IsNotEmpty, IsString } from 'class-validator';

export class GameDto {
  @IsString()
  @IsNotEmpty()
  title: string;
}
