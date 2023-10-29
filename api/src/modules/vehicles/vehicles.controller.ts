import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  Query,
} from '@nestjs/common';
import { VehiclesService } from './vehicles.service';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';

@Controller('vehicles')
export class VehiclesController {
  constructor(private readonly vehiclesService: VehiclesService) {}

  @Post()
  create(@Body() createVehicleDto: CreateVehicleDto) {
    return this.vehiclesService.create(createVehicleDto);
  }

  @Get()
  async findAll(@Query('orderBy') orderBy: string = 'desc') {
    const result = await this.vehiclesService.findAll(orderBy);
    return result;
  }

  @Get('/pagination')
  async findAllPagination(
    @Query('page') page = 1,
    @Query('limit') limit = 5,
    @Query('orderBy') orderBy: 'asc' | 'desc' = 'desc',
  ) {
    const result = await this.vehiclesService.findAllPagination(
      page,
      limit,
      orderBy,
    );
    return result;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vehiclesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVehicleDto: UpdateVehicleDto) {
    return this.vehiclesService.update(id, updateVehicleDto);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string) {
    return this.vehiclesService.remove(id);
  }
}
