import { Repository } from "typeorm";
import { CreatePaymentDto } from "./dto/createPayment.dto";
import { PaymentEntity } from "./payment.entity";
import { DonorService } from "../donor/donor.service";
export declare class PaymentService {
    private readonly paymentRepository;
    private readonly donorService;
    constructor(paymentRepository: Repository<PaymentEntity>, donorService: DonorService);
    createNewPayment(createPaymentDto: CreatePaymentDto): Promise<PaymentEntity>;
}
