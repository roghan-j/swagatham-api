import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreatePaymentDto } from "./dto/createPayment.dto";
import { PaymentEntity } from "./payment.entity";
import axios from 'axios';
import { PaymentInterface } from "src/types/payment.interface";
import { v4 as uuidv4 } from 'uuid';
import { DonorService } from "../donor/donor.service";

@Injectable()
export class PaymentService{
    constructor(@InjectRepository(PaymentEntity) private readonly paymentRepository: Repository<PaymentEntity>, private readonly donorService: DonorService) {}

    async createNewPayment(createPaymentDto: CreatePaymentDto): Promise<PaymentEntity> {
        
        const res= await axios.post('https://api.razorpay.com/v1/orders', {
            "amount": createPaymentDto.amount * 100,
            "currency": "INR",
            "receipt": uuidv4(),
            "partial_payment": true,
            "first_payment_min_amount": 230
        },{
            auth: {
              username: process.env.RAZORPAY_KEY,
              password: process.env.RAZORPAY_SECRET
            }
        })

        const donor = await this.donorService.findUserByMobile(createPaymentDto.mobile.toString())

        const payment= new PaymentEntity()
        // Object.assign(payment, res.data)

        // payment.mobile= res.data.mobile
        // payment

        payment.name= donor.name
        payment.mobile= createPaymentDto.mobile
        payment.amount= createPaymentDto.amount
        payment.order_id= res.data.id
        payment.receipt= res.data.receipt
        // console.log(res.data)
        // console.log(payment)

        return await this.paymentRepository.save(payment) 
    }
}