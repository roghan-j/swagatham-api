import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DonorController } from "./donor.controller";
import { DonorEntity } from "./donor.entity";
import { DonorService } from "./donor.service";
import { KycEntity } from "./kyc.entity";

@Module({
  imports: [TypeOrmModule.forFeature([DonorEntity, KycEntity])],
  controllers: [DonorController],
  providers: [DonorService],
  exports: [DonorService]
})
export class DonorModule { }