import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { IsString, IsEmail, IsBoolean, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly id?: string;

  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @ApiProperty()
  @IsNotEmpty()
  email: string;

  @IsString()
  @Exclude({ toPlainOnly: true })
  @ApiProperty()
  @IsNotEmpty()
  password: string;

  @IsBoolean()
  @ApiProperty()
  @IsNotEmpty()
  admin: boolean;
}
