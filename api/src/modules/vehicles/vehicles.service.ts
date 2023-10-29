import { HttpException, Injectable } from '@nestjs/common';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class VehiclesService {
  private prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(data: CreateVehicleDto) {
    const user = await this.prisma.user.findFirst({
      where: {
        id: data.userId,
      },
    });
    if (!user) {
      throw new HttpException('User not found', 404);
    }
    const priceAsInt = parseInt(data.price, 10);

    const vehicle = await this.prisma.vehicle.create({
      data: {
        ...data,
        price: priceAsInt,
      },
    });
    return vehicle;
  }

  async findAll() {
    const vehicles = await this.prisma.vehicle.findMany();

    return vehicles;
  }

  async findAllPagination(page = 1, limit = 5) {
    const skip = (page - 1) * limit;
    const vehicles = await this.prisma.vehicle.findMany({
      skip,
      take: limit,
    });

    const totalItems = await this.prisma.vehicle.count();

    return {
      vehicles: vehicles,
      totalItems,
      currentPage: page,
      limit,
    };
  }

  findOne(id: string) {
    const vehicle = this.prisma.vehicle.findFirst({
      where: {
        id: id,
      },
    });

    if (!vehicle) {
      throw new HttpException('Vehicle not found', 404);
    }

    return vehicle;
  }

  async update(id: string, updateVehicleDto: UpdateVehicleDto) {
    const existingVehicle = await this.prisma.vehicle.findUnique({
      where: { id },
    });

    if (!existingVehicle) {
      throw new HttpException('Vehicle not found', 404);
    }

    const priceAsInt = updateVehicleDto.price
      ? parseInt(updateVehicleDto.price, 10)
      : undefined;

    const updatedVehicle = await this.prisma.vehicle.update({
      where: { id },
      data: { ...existingVehicle, ...updateVehicleDto, price: priceAsInt },
    });

    return updatedVehicle;
  }

  async remove(id: string) {
    const vehicle = await this.prisma.vehicle.findFirst({
      where: {
        id: id,
      },
    });

    if (!vehicle) {
      throw new HttpException('Vehicle not found', 404);
    }

    await this.prisma.vehicle.delete({
      where: {
        id: id,
      },
    });
  }
}
