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
exports.PaymentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const payment_entity_1 = require("./payment.entity");
const axios_1 = __importDefault(require("axios"));
const uuid_1 = require("uuid");
const donor_service_1 = require("../donor/donor.service");
let PaymentService = class PaymentService {
    constructor(paymentRepository, donorService) {
        this.paymentRepository = paymentRepository;
        this.donorService = donorService;
    }
    async createNewPayment(createPaymentDto) {
        const res = await axios_1.default.post('https://api.razorpay.com/v1/orders', {
            "amount": createPaymentDto.amount * 100,
            "currency": "INR",
            "receipt": (0, uuid_1.v4)(),
            "partial_payment": true,
            "first_payment_min_amount": 230
        }, {
            auth: {
                username: 'rzp_test_RuHq6OCQW0ZUHY',
                password: '5gk7YvrstMnAyrRvgFL9rIhY'
            }
        });
        const donor = await this.donorService.findUserByMobile(createPaymentDto.mobile.toString());
        const payment = new payment_entity_1.PaymentEntity();
        Object.assign(payment, res.data);
        payment.name = donor.name;
        return await payment;
    }
};
PaymentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(payment_entity_1.PaymentEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository, donor_service_1.DonorService])
], PaymentService);
exports.PaymentService = PaymentService;
//# sourceMappingURL=payment.service.js.map