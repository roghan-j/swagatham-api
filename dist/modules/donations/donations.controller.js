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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DonationsController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../../guards/auth.guard");
const donations_service_1 = require("./donations.service");
const createDonation_dto_1 = require("./dto/createDonation.dto");
const nest_winston_1 = require("nest-winston");
const winston_1 = require("winston");
let DonationsController = class DonationsController {
    constructor(donationService, logger) {
        this.donationService = donationService;
        this.logger = logger;
    }
    async getTopDonations() {
        return await this.donationService.getTopDonations();
    }
    async getRecentDonations() {
        return await this.donationService.getRecentDonations();
    }
    async createNewDonation(createDonationDto) {
        return await this.donationService.createNewDonation(createDonationDto);
    }
};
__decorate([
    (0, common_1.Get)('api/topDonations'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DonationsController.prototype, "getTopDonations", null);
__decorate([
    (0, common_1.Get)('api/recentDonations'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DonationsController.prototype, "getRecentDonations", null);
__decorate([
    (0, common_1.Post)('api/payment'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createDonation_dto_1.CreateDonationDto]),
    __metadata("design:returntype", Promise)
], DonationsController.prototype, "createNewDonation", null);
DonationsController = __decorate([
    (0, common_1.Controller)(),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [donations_service_1.DonationsService, typeof (_a = typeof winston_1.Logger !== "undefined" && winston_1.Logger) === "function" ? _a : Object])
], DonationsController);
exports.DonationsController = DonationsController;
//# sourceMappingURL=donations.controller.js.map