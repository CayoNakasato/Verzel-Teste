import { IsNumberString, IsOptional, IsString } from 'class-validator';

export class UpdateVehicleDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  brand?: string;

  @IsOptional()
  @IsString()
  model?: string;

  @IsOptional()
  @IsString()
  frontImg?: string;

  @IsOptional()
  @IsNumberString({}, { message: 'Price must be a number string' })
  price?: string;
}
