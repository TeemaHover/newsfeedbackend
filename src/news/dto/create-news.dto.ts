import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateNewsDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  title: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  text: string;
}
