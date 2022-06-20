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
exports.DonationsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const donor_service_1 = require("../donor/donor.service");
const donations_entity_1 = require("./donations.entity");
const axios = require('axios');
let DonationsService = class DonationsService {
    constructor(donationRepository, donorService) {
        this.donationRepository = donationRepository;
        this.donorService = donorService;
    }
    async getTopDonations() {
        try {
            const donations = await this.donationRepository.find({
                order: {
                    amount: "DESC",
                }, relations: {
                    donor: true
                }
            });
            let donationInterface = [];
            donations.map(donation => {
                donationInterface.push(this.buildDonationInterface(donation));
            });
            return donationInterface;
        }
        catch (e) {
            console.log(e);
        }
    }
    async getRecentDonations() {
        try {
            const donations = await this.donationRepository.find({
                order: {
                    donatedAt: "DESC",
                }, relations: {
                    donor: true
                }, select: [
                    "id",
                    "amount",
                    "donor"
                ]
            });
            let donationInterface = [];
            donations.map(donation => {
                donationInterface.push(this.buildDonationInterface(donation));
            });
            return donationInterface;
        }
        catch (e) {
            console.log(e);
        }
    }
    async createNewDonations(createDonationDto) {
        try {
            const donation = new donations_entity_1.DonationEntity();
            Object.assign(donation, createDonationDto);
            const donor = await this.donorService.findUserByMobile(createDonationDto.mobile);
            if (donor) {
                donation.donor = donor;
            }
            else {
                throw new common_1.HttpException("No Existing User", common_1.HttpStatus.NOT_ACCEPTABLE);
            }
            return await this.donationRepository.save(donation);
        }
        catch (e) {
            console.log(e);
            throw e;
        }
    }
    buildDonationInterface(donation) {
        return {
            id: donation.id,
            name: donation.donor.name,
            amount: donation.amount,
        };
    }
    async createNewPayment(createPaymentDto) {
        const res = await axios.post('https://api.razorpay.com/v1/orders', {
            "amount": createPaymentDto.amount * 100,
            "currency": "INR",
            "receipt": uuidv4(),
            "partial_payment": true,
            "first_payment_min_amount": 230
        }, {
            auth: {
                username: process.env.RAZORPAY_KEY,
                password: process.env.RAZORPAY_SECRET
            }
        });
        const donor = await this.donorService.findUserByMobile(createPaymentDto.mobile.toString());
        const payment = new PaymentEntity();
        payment.name = donor.name;
        payment.mobile = createPaymentDto.mobile;
        payment.amount = createPaymentDto.amount;
        payment.order_id = res.data.id;
        payment.receipt = res.data.receipt;
        return await this.paymentRepository.save(payment);
    }
};
DonationsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(donations_entity_1.DonationEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository, donor_service_1.DonorService])
], DonationsService);
exports.DonationsService = DonationsService;
//# sourceMappingURL=donations.service.js.map