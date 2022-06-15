import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DonorModule } from "../donor/donor.module";
import { DonationsController } from "./donations.controller";
import { DonationEntity } from "./donations.entity";
import { DonationsService } from "./donations.service";

@Module({
  imports: [TypeOrmModule.forFeature([DonationEntity]), DonorModule],
  controllers: [DonationsController],
  providers: [DonationsService]
})
export class DonationsModule { }