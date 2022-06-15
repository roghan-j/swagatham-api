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
exports.CreateKycDto = void 0;
const class_validator_1 = require("class-validator");
class CreateKycDto {
}
__decorate([
    (0, class_validator_1.IsAlpha)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateKycDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsAlpha)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateKycDto.prototype, "fs_name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateKycDto.prototype, "gender", void 0);
__decorate([
    (0, class_validator_1.IsAlpha)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateKycDto.prototype, "m_status", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], CreateKycDto.prototype, "dob", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateKycDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsAlphanumeric)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateKycDto.prototype, "pan", void 0);
__decorate([
    (0, class_validator_1.IsNumberString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateKycDto.prototype, "aadhar", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateKycDto.prototype, "id_proof", void 0);
__decorate([
    (0, class_validator_1.IsAlphanumeric)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateKycDto.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsAlpha)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateKycDto.prototype, "ctv", void 0);
__decorate([
    (0, class_validator_1.IsNumberString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateKycDto.prototype, "pincode", void 0);
__decorate([
    (0, class_validator_1.IsAlpha)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateKycDto.prototype, "state", void 0);
__decorate([
    (0, class_validator_1.IsAlpha)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateKycDto.prototype, "country", void 0);
__decorate([
    (0, class_validator_1.IsMobilePhone)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateKycDto.prototype, "mobile", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateKycDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateKycDto.prototype, "address_proof", void 0);
exports.CreateKycDto = CreateKycDto;
//# sourceMappingURL=createKyc.dto.js.map