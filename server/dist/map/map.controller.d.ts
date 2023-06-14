import { MapService, MapService2 } from './map.service';
import { City, Nation } from 'src/domain/map.entity';
export declare class MapController {
    private readonly mapService;
    private readonly mapService2;
    constructor(mapService: MapService, mapService2: MapService2);
    getNationData(): Promise<Nation[]>;
    getCityData(): Promise<City[]>;
}
