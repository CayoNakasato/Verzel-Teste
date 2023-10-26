import { Injectable, HttpException } from '@nestjs/common';
import { LoginDTO } from './dto/create-login.dto';
import { PrismaClient } from '@prisma/client';
import { compare } from 'bcrypt';
import * as jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

@Injectable()
export class LoginService {
  async login(data: LoginDTO) {
    const { email, password } = data;

    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      throw new HttpException('Credentials incorrect', 401);
    }

    const verifyPassword = await compare(password, user.password);

    if (!verifyPassword) {
      throw new HttpException('Credentials incorrect', 401);
    }

    const token = jwt.sign(
      {
        admin: user.admin,
        id: user.id,
      },
      process.env.SECRET_KEY as string,
      {
        expiresIn: '24h',
      },
    );

    return { token: token };
  }
}
