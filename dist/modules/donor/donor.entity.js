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
exports.DonorEntity = void 0;
const typeorm_1 = require("typeorm");
const donations_entity_1 = require("../donations/donations.entity");
const kyc_entity_1 = require("./kyc.entity");
let DonorEntity = class DonorEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], DonorEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DonorEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DonorEntity.prototype, "mobile", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "date" }),
    __metadata("design:type", Date)
], DonorEntity.prototype, "dob", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => kyc_entity_1.KycEntity),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", kyc_entity_1.KycEntity)
], DonorEntity.prototype, "kyc", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => donations_entity_1.DonationEntity, donation => donation.donor),
    __metadata("design:type", Array)
], DonorEntity.prototype, "donations", void 0);
DonorEntity = __decorate([
    (0, typeorm_1.Entity)({ name: "donors" })
], DonorEntity);
exports.DonorEntity = DonorEntity;
//# sourceMappingURL=donor.entity.js.map