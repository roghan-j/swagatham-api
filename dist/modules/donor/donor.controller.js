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
exports.DonorController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../../guards/auth.guard");
const donor_service_1 = require("./donor.service");
const createDonor_dto_1 = require("./dto/createDonor.dto");
const createKyc_dto_1 = require("./dto/createKyc.dto");
let DonorController = class DonorController {
    constructor(donorService) {
        this.donorService = donorService;
    }
    async getAllDonors() {
        return await this.donorService.getAllDonors();
    }
    async sendMessage() {
        await this.donorService.sendMessage();
    }
    async createKyc(createKycDto) {
        return await this.donorService.createNewKyc(createKycDto);
    }
    async createDonor(createDonorDto) {
        return await this.donorService.createNewDonor(createDonorDto);
    }
    async filterDonor() {
        return await this.donorService.filterDonors();
    }
};
__decorate([
    (0, common_1.Get)('api/donors'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DonorController.prototype, "getAllDonors", null);
__decorate([
    (0, common_1.Get)('api/sendMessage'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DonorController.prototype, "sendMessage", null);
__decorate([
    (0, common_1.Post)('api/kyc'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createKyc_dto_1.CreateKycDto]),
    __metadata("design:returntype", Promise)
], DonorController.prototype, "createKyc", null);
__decorate([
    (0, common_1.Post)('api/donor'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createDonor_dto_1.CreateDonorDto]),
    __metadata("design:returntype", Promise)
], DonorController.prototype, "createDonor", null);
__decorate([
    (0, common_1.Get)('api/getDonorsByDob'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DonorController.prototype, "filterDonor", null);
DonorController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [donor_service_1.DonorService])
], DonorController);
exports.DonorController = DonorController;
//# sourceMappingURL=donor.controller.js.map