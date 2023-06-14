import { Controller, Get } from '@nestjs/common';
import { MapService, MapService2 } from './map.service';
import { ApiTags } from '@nestjs/swagger';
import { City, Nation } from 'src/domain/map.entity';

@Controller('map')
export class MapController {
  constructor(
    private readonly mapService: MapService,
    private readonly mapService2: MapService2,
  ) {}

  @Get('getNation')
  @ApiTags('Map')
  async getNationData(): Promise<Nation[]> {
    const nationData = await this.mapService.getNationData();
    return nationData;
  }
  @Get('getCity')
  @ApiTags('Map')
  async getCityData(): Promise<City[]> {
    const cityData = await this.mapService2.getCityData();
    return cityData;
  }
}
