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
exports.FamilyEntity = void 0;
const typeorm_1 = require("typeorm");
const donor_entity_1 = require("./donor.entity");
let FamilyEntity = class FamilyEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], FamilyEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FamilyEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FamilyEntity.prototype, "mobile", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FamilyEntity.prototype, "relation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "date" }),
    __metadata("design:type", Date)
], FamilyEntity.prototype, "dob", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "date" }),
    __metadata("design:type", Date)
], FamilyEntity.prototype, "anniversary", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => donor_entity_1.DonorEntity, donor => donor.family),
    __metadata("design:type", donor_entity_1.DonorEntity)
], FamilyEntity.prototype, "donor", void 0);
FamilyEntity = __decorate([
    (0, typeorm_1.Entity)({ name: "family" })
], FamilyEntity);
exports.FamilyEntity = FamilyEntity;
//# sourceMappingURL=family.entity.js.map