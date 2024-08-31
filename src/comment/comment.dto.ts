import { IsNotEmpty, IsString } from 'class-validator';

export class validateCommentDto {
  @IsNotEmpty()
  @IsString()
  content: string;
}
