import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from "src/guards/auth.guard";
import { DonationInterface } from "src/types/donation.interface";
import { DonationEntity } from "./donations.entity";
import { DonationsService } from "./donations.service";
import { CreateDonationDto } from "./dto/createDonation.dto";

@Controller()
export class DonationsController {
  constructor(private readonly donationService: DonationsService) { }

  @Get('api/topDonations')
  @UseGuards(AuthGuard)
  async getTopDonations(): Promise<DonationInterface[]> {
    return await this.donationService.getTopDonations()
  }

  @Get('api/recentDonations')
  @UseGuards(AuthGuard)
  async getRecentDonations(): Promise<DonationInterface[]> {
    return await this.donationService.getRecentDonations()
  }

  @Post('api/donation')
  async createNewDonation(@Body() createDonationDto: CreateDonationDto): Promise<DonationEntity> {
    return await this.donationService.createNewDonations(createDonationDto)
  }
}