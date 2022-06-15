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
exports.DonorService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const donor_entity_1 = require("./donor.entity");
const kyc_entity_1 = require("./kyc.entity");
let DonorService = class DonorService {
    constructor(donorRepository, kycRepository) {
        this.donorRepository = donorRepository;
        this.kycRepository = kycRepository;
    }
    async getAllDonors() {
        const donors = await this.donorRepository.find();
        return donors;
    }
    async createNewKyc(createKycDto) {
        try {
            const isKycExist = await this.kycRepository.findOne({
                where: {
                    mobile: createKycDto.mobile
                }
            });
            if (isKycExist)
                throw new common_1.HttpException("KYC Already exists!", common_1.HttpStatus.FOUND);
            const kyc = new kyc_entity_1.KycEntity();
            Object.assign(kyc, createKycDto);
            const savedKyc = await this.kycRepository.save(kyc);
            const donor = await this.createNewDonor({
                name: createKycDto.name,
                mobile: createKycDto.mobile,
                dob: createKycDto.dob,
                kyc: kyc
            });
            return savedKyc;
        }
        catch (e) {
            throw e;
        }
    }
    async createNewDonor(createDonorDto) {
        try {
            const donor = new donor_entity_1.DonorEntity();
            Object.assign(donor, createDonorDto);
            await this.donorRepository.save(donor);
            return donor;
        }
        catch (e) {
            console.log(e);
        }
    }
    async findUserByMobile(mobile) {
        try {
            return await this.donorRepository.findOne({
                where: {
                    mobile
                }
            });
        }
        catch (e) {
            console.log(e);
        }
    }
};
DonorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(donor_entity_1.DonorEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(kyc_entity_1.KycEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository, typeorm_2.Repository])
], DonorService);
exports.DonorService = DonorService;
//# sourceMappingURL=donor.service.js.map