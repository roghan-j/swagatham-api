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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DonorService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const donor_entity_1 = require("./donor.entity");
const kyc_entity_1 = require("./kyc.entity");
const datasource_1 = __importDefault(require("../../datasource"));
const messageSender_1 = __importDefault(require("./components/messageSender"));
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
                }, relations: {
                    "kyc": true
                }
            });
        }
        catch (e) {
            console.log(e);
        }
    }
    async fetchUserIds() {
        try {
            const ids = await this.donorRepository.find({
                select: [
                    "id"
                ]
            });
            console.log(ids);
            return ids;
        }
        catch (e) {
            console.log(e);
        }
    }
    async getKyc(id) {
        try {
            return await this.kycRepository.findOne({
                where: {
                    id
                }
            });
        }
        catch (e) {
            console.log(e);
        }
    }
    async filterDonors() {
        try {
            const today = new Date();
            let date = today.getDate().toString();
            let month = (today.getMonth() + 1).toString();
            if (month.length === 1) {
                month = "0" + month;
            }
            if (date.length === 1) {
                date = "0" + date;
            }
            const allDonors = await datasource_1.default.createQueryBuilder().select("donor").from(donor_entity_1.DonorEntity, "donor").where("dob like :dob", { dob: `%-${"12"}-${"26"}`.trim() }).getMany();
            return allDonors;
        }
        catch (e) {
            throw e;
        }
    }
    async sendMessage() {
        try {
            const donors = await this.filterDonors();
            await (0, messageSender_1.default)(donors);
            return true;
        }
        catch (e) {
            console.log(e);
        }
    }
    async checkDonor(mobile) {
        try {
            const donor = await this.donorRepository.findOne({
                where: {
                    mobile
                }
            });
            if (donor) {
                return true;
            }
        }
        catch (e) {
            console.log(e);
            throw e;
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