import { CreatePaymentDto } from "../donations/dto/createPayment.dto";
import { PaymentEntity } from "./payment.entity";
import { PaymentService } from "./payment.service";
export declare class PaymentController {
    private readonly paymentService;
    constructor(paymentService: PaymentService);
    createNewPayment(createPaymentDto: CreatePaymentDto): Promise<PaymentEntity>;
}
