import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { IsString, IsEmail, IsBoolean, IsOptional } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @ApiProperty()
  @IsOptional()
  name?: string;

  @IsEmail()
  @ApiProperty()
  @IsOptional()
  email?: string;

  @IsString()
  @Exclude({ toPlainOnly: true })
  @ApiProperty()
  @IsOptional()
  password?: string;

  @IsBoolean()
  @ApiProperty()
  @IsOptional()
  admin?: boolean;
}
