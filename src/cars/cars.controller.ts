import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCartDto } from './dto/create-car.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carService.findAll();
  }

  @Get(':id')
  getById(@Param('id', ParseUUIDPipe) id: string) {
    console.log({ id });
    return this.carService.findOneById(id);
  }

  @Post()
  createCar(@Body() createCartDto: CreateCartDto) {
    console.log(ValidationPipe);
    return {
      status: 'New car created',
      createCartDto,
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
