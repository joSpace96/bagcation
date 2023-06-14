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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapController = void 0;
const common_1 = require("@nestjs/common");
const map_service_1 = require("./map.service");
const swagger_1 = require("@nestjs/swagger");
let MapController = exports.MapController = class MapController {
    constructor(mapService, mapService2) {
        this.mapService = mapService;
        this.mapService2 = mapService2;
    }
    async getNationData() {
        const nationData = await this.mapService.getNationData();
        return nationData;
    }
    async getCityData() {
        const cityData = await this.mapService2.getCityData();
        return cityData;
    }
};
__decorate([
    (0, common_1.Get)('getNation'),
    (0, swagger_1.ApiTags)('Map'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MapController.prototype, "getNationData", null);
__decorate([
    (0, common_1.Get)('getCity'),
    (0, swagger_1.ApiTags)('Map'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MapController.prototype, "getCityData", null);
exports.MapController = MapController = __decorate([
    (0, common_1.Controller)('map'),
    __metadata("design:paramtypes", [map_service_1.MapService,
        map_service_1.MapService2])
], MapController);
//# sourceMappingURL=map.controller.js.map