import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carService.findAll();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    console.log({ id });
    return this.carService.findOneById(id);
  }

  @Post()
  createCar(@Body() body: any) {
    return {
      status: 'New car created',
      body,
    };
  }

  @Patch(':id')
  updateCar(@Param('id', ParseIntPipe) id: number, @Body() body: any) {
    return {
      status: `Car with id '${id}' updated`,
      body,
    };
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseIntPipe) id: number) {
    return {
      status: `Car with id '${id}' deleted`,
    };
  }
}
