import { PartialType } from '@nestjs/mapped-types';
import { LoginDTO } from './create-login.dto';

export class UpdateLoginDto extends PartialType(LoginDTO) {}
