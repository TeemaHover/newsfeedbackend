import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
export class TestDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  name: string;

  @ApiProperty({ default: 0, description: 'number' })
  @IsNotEmpty()
  @IsNumber()
  num1: number;

  @ApiProperty({ default: 0 })
  @IsNotEmpty()
  @IsNumber()
  num2: number;
}
