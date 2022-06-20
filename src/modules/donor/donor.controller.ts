import { Body, Controller, Get, Post, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { AuthGuard } from "src/guards/auth.guard";
import { DonorEntity } from "./donor.entity";
import { DonorService } from "./donor.service";
import { CreateDonorDto } from "./dto/createDonor.dto";
import { CreateKycDto } from "./dto/createKyc.dto";
import { KycEntity } from "./kyc.entity";

@Controller()
export class DonorController {
  constructor(private readonly donorService: DonorService) { }

  @Get('api/donors')
  @UseGuards(AuthGuard)
  async getAllDonors() {
    return await this.donorService.getAllDonors()
  }

  @Get('api/sendMessage')
  @UseGuards(AuthGuard)
  async sendMessage() {
    await this.donorService.sendMessage()
  }

  @Post('api/kyc')
  @UsePipes(new ValidationPipe())
  async createKyc(@Body() createKycDto: CreateKycDto): Promise<KycEntity> {
    return await this.donorService.createNewKyc(createKycDto)
  }

  @Post('api/donor')
  async createDonor(@Body() createDonorDto: CreateDonorDto): Promise<DonorEntity> {
    return await this.donorService.createNewDonor(createDonorDto)
  }

  @Get('api/getDonorsByDob')
  async filterDonor() {
    return await this.donorService.filterDonors()
  }
}