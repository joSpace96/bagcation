import { Module } from '@nestjs/common';
import { MapService, MapService2 } from './map.service';
import { MapController } from './map.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { City, Nation } from 'src/domain/map.entity';
import { Repository } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Nation, City])],
  controllers: [MapController],
  providers: [MapService, Repository, MapService2],
})
export class MapModule {}
