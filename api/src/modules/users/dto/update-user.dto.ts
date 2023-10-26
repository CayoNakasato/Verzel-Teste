import { Exclude } from 'class-transformer';
import { IsString, IsEmail, IsBoolean } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  name?: string;

  @IsEmail()
  email?: string;

  @IsString()
  @Exclude({ toPlainOnly: true })
  password?: string;

  @IsBoolean()
  admin?: boolean;
}
