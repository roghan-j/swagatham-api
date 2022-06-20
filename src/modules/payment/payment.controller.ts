import { Body, Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreatePaymentDto } from "./dto/createPayment.dto";
import { PaymentEntity } from "./payment.entity";
import { PaymentService } from "./payment.service";

@Controller()
export class PaymentController{
    constructor(private readonly paymentService: PaymentService) {}

    @Post('api/payment')
    @UsePipes(new ValidationPipe())
    async createNewPayment(@Body() createPaymentDto: CreatePaymentDto): Promise<PaymentEntity> {
        return await this.paymentService.createNewPayment(createPaymentDto)
    }
}