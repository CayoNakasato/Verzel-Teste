import { IsInt, IsString } from 'class-validator';

export class CreateVehicleDto {
  @IsString()
  readonly id?: string;

  @IsString()
  name: string;

  @IsString()
  brand: string;

  @IsString()
  model: string;

  @IsString()
  frontImg: string;

  @IsString()
  userId: string;

  @IsInt()
  price: string;
}
