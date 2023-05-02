import { Injectable } from '@nestjs/common';
import { BrandsService } from 'src/brands/brands.service';
import { CarsService } from 'src/cars/cars.service';

import { BRANDS_SEED } from './data/brands.seed';
import { CARS_SEED } from './data/car.seed';

@Injectable()
export class SeedService {
  constructor(
    private readonly carService: CarsService,
    private readonly brandService: BrandsService,
  ) {}

  populateDB() {
    this.carService.fillCarsWithSeedDate(CARS_SEED);
    this.brandService.fillBrandsWithSeedDate(BRANDS_SEED);

    return 'SEED executed';
  }
}
