"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapService2 = exports.MapService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const map_entity_1 = require("../domain/map.entity");
const typeorm_2 = require("@nestjs/typeorm");
let MapService = exports.MapService = class MapService {
    constructor(mapRepository) {
        this.mapRepository = mapRepository;
    }
    async getNationData() {
        return await this.mapRepository.find();
    }
};
exports.MapService = MapService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(map_entity_1.Nation)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], MapService);
let MapService2 = exports.MapService2 = class MapService2 {
    constructor(mapRepository) {
        this.mapRepository = mapRepository;
    }
    async getCityData() {
        return await this.mapRepository.find();
    }
};
exports.MapService2 = MapService2 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(map_entity_1.City)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], MapService2);
//# sourceMappingURL=map.service.js.map