"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapModule = void 0;
const common_1 = require("@nestjs/common");
const map_service_1 = require("./map.service");
const map_controller_1 = require("./map.controller");
const typeorm_1 = require("@nestjs/typeorm");
const map_entity_1 = require("../domain/map.entity");
const typeorm_2 = require("typeorm");
let MapModule = exports.MapModule = class MapModule {
};
exports.MapModule = MapModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([map_entity_1.Nation, map_entity_1.City])],
        controllers: [map_controller_1.MapController],
        providers: [map_service_1.MapService, typeorm_2.Repository, map_service_1.MapService2],
    })
], MapModule);
//# sourceMappingURL=map.module.js.map