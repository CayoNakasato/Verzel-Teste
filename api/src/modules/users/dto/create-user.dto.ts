import { Exclude, Type } from 'class-transformer';
import {
  IsString,
  IsEmail,
  IsBoolean,
  IsOptional,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { CreateVehicleDto } from 'src/modules/vehicles/dto/create-vehicle.dto';

export class CreateUserDto {
  @IsString()
  readonly id?: string;

  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @Exclude({ toPlainOnly: true })
  password: string;

  @IsBoolean()
  admin: boolean;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateVehicleDto)
  vehicles?: CreateVehicleDto[];
}
