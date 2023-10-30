import { HttpException, Injectable } from '@nestjs/common';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { Prisma, PrismaClient } from '@prisma/client';

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

    const prismaCreateData: Prisma.VehicleCreateInput = {
      name: data.name,
      brand: data.brand,
      model: data.model,
      frontImg: data.frontImg,
      user: {
        connect: { id: user.id }, // Assuming there is a relation between Vehicle and User models
      },
      price: data.price,
    };

    const vehicle = await this.prisma.vehicle.create({
      data: prismaCreateData,
    });
    return vehicle;
  }

  async findAll(orderBy: string) {
    const vehicles = await this.prisma.vehicle.findMany({
      orderBy: {
        price: orderBy.toLowerCase() === 'desc' ? 'desc' : 'asc',
      },
    });

    return vehicles;
  }

  async findAllPagination(page = 1, limit = 5, orderBy: 'desc' | 'asc') {
    const skip = (page - 1) * limit;
    const vehicles = await this.prisma.vehicle.findMany({
      skip,
      take: limit,
      orderBy: {
        price:
          orderBy.toLowerCase() === 'desc'
            ? Prisma.SortOrder.desc
            : Prisma.SortOrder.asc,
      },
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

    const updatedVehicle = await this.prisma.vehicle.update({
      where: { id },
      data: { ...existingVehicle, ...updateVehicleDto },
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
