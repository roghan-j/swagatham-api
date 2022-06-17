import { Controller, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DonorModule } from "../donor/donor.module";
import { PaymentController } from "./payment.controller";
import { PaymentEntity } from "./payment.entity";
import { PaymentService } from "./payment.service";

@Module({
    imports: [TypeOrmModule.forFeature([PaymentEntity]), DonorModule],
    controllers: [PaymentController],
    providers: [PaymentService]
})

export class PaymentModule {}
