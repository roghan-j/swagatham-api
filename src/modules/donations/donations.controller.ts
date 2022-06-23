import { Body, Controller, Get, Inject, Post, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { AuthGuard } from "src/guards/auth.guard";
import { DonationInterface } from "src/types/donation.interface";
import { PaymentInterface } from "src/types/payment.interface";
import { DonationEntity } from "./donations.entity";
import { DonationsService } from "./donations.service";
import { CreateDonationDto } from "./dto/createDonation.dto";
import { WINSTON_MODULE_PROVIDER } from "nest-winston"
import { Logger } from 'winston'

@Controller()
export class DonationsController {
  constructor(private readonly donationService: DonationsService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger) { }

  @Get('api/topDonations')
  @UseGuards(AuthGuard)
  async getTopDonations(): Promise<DonationInterface[]> {
    // this.logger.info("Test Log")
    return await this.donationService.getTopDonations()
  }

  @Get('api/recentDonations')
  @UseGuards(AuthGuard)
  async getRecentDonations(): Promise<DonationInterface[]> {
    return await this.donationService.getRecentDonations()
  }

  @Post('api/payment')
  @UsePipes(new ValidationPipe())
  async createNewDonation(@Body() createDonationDto: CreateDonationDto): Promise<PaymentInterface> {
    return await this.donationService.createNewDonation(createDonationDto)
  }
}