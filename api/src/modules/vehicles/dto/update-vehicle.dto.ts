import { ApiProperty } from '@nestjs/swagger';
import { IsNumberString, IsOptional, IsString } from 'class-validator';

export class UpdateVehicleDto {
  @IsOptional()
  @IsString()
  @ApiProperty()
  name?: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  brand?: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  model?: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  frontImg?: string;

  @IsOptional()
  @ApiProperty()
  @IsNumberString({}, { message: 'Price must be a number string' })
  price?: string;
}
