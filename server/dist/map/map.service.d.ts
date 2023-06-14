import { Repository } from 'typeorm';
import { City, Nation } from 'src/domain/map.entity';
export declare class MapService {
    private readonly mapRepository;
    constructor(mapRepository: Repository<Nation>);
    getNationData(): Promise<Nation[]>;
}
export declare class MapService2 {
    private readonly mapRepository;
    constructor(mapRepository: Repository<City>);
    getCityData(): Promise<City[]>;
}
