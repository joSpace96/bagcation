import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { City, Nation } from 'src/domain/map.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MapService {
  constructor(
    @InjectRepository(Nation)
    private readonly mapRepository: Repository<Nation>,
  ) {}

  async getNationData(): Promise<Nation[]> {
    return await this.mapRepository.find();
  }
}
@Injectable()
export class MapService2 {
  constructor(
    @InjectRepository(City)
    private readonly mapRepository: Repository<City>,
  ) {}

  async getCityData(): Promise<City[]> {
    return await this.mapRepository.find();
  }
}
