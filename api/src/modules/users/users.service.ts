import { Injectable, HttpException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { hashSync } from 'bcrypt';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(data: CreateUserDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: data.email },
    });

    if (user) {
      throw new HttpException('User already Exists!', 401);
    }
    const hashedPassword = hashSync(data.password, 10);

    const newUser = await this.prisma.user.create({
      data: {
        ...data,
        password: hashedPassword,
      },
      select: {
        id: true,
        name: true,
        email: true,
        admin: true,
      },
    });
    return newUser;
  }

  findAll() {
    const users = this.prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        admin: true,
      },
    });

    return users;
  }

  async findOne(id: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    if (!user) {
      throw new HttpException('User not found', 404);
    }

    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const { name, email, password, admin } = updateUserDto;

    const existingUser = await this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    if (!existingUser) {
      throw new HttpException('User not found', 404);
    }

    return this.prisma.user.update({
      where: {
        id: id,
      },
      data: {
        name: name || existingUser.name,
        email: email || existingUser.email,
        password: password || existingUser.password,
        admin: admin !== undefined ? admin : existingUser.admin,
      },
    });
  }

  async remove(id: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    if (!user) {
      throw new HttpException('user not found', 404);
    }

    await this.prisma.user.delete({
      where: {
        id: id,
      },
    });
  }
}
