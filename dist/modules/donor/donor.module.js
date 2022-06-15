"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DonorModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const donor_controller_1 = require("./donor.controller");
const donor_entity_1 = require("./donor.entity");
const donor_service_1 = require("./donor.service");
const kyc_entity_1 = require("./kyc.entity");
let DonorModule = class DonorModule {
};
DonorModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([donor_entity_1.DonorEntity, kyc_entity_1.KycEntity])],
        controllers: [donor_controller_1.DonorController],
        providers: [donor_service_1.DonorService],
        exports: [donor_service_1.DonorService]
    })
], DonorModule);
exports.DonorModule = DonorModule;
//# sourceMappingURL=donor.module.js.map