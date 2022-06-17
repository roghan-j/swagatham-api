import { HttpException, HttpStatus, Injectable, UsePipes, ValidationPipe } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DonationInterface } from "src/types/donation.interface";
import { Repository } from "typeorm";
import { DonorService } from "../donor/donor.service";
import { DonationEntity } from "./donations.entity";
import { CreateDonationDto } from "./dto/createDonation.dto";

@Injectable()
export class DonationsService {
  constructor(@InjectRepository(DonationEntity) private readonly donationRepository: Repository<DonationEntity>, private readonly donorService: DonorService) { }

  async getTopDonations(): Promise<DonationInterface[]> {
    try {
      const donations = await this.donationRepository.find({
        order: {
          amount: "DESC",
        }, relations: {
          donor: true
        }
      })
      let donationInterface = []
      donations.map(donation => {
        donationInterface.push(this.buildDonationInterface(donation))
      })
      return donationInterface
    } catch (e) {
      console.log(e)
    }
  }

  async getRecentDonations(): Promise<DonationInterface[]> {
    try {
      const donations = await this.donationRepository.find({
        order: {
          donatedAt: "DESC",
        }, relations: {
          donor: true
        }, select: [
          "id",
          "amount",
          "donor"
        ]
      })
      let donationInterface = []
      donations.map(donation => {
        donationInterface.push(this.buildDonationInterface(donation))
      })
      return donationInterface
    } catch (e) {
      console.log(e)
    }
  }

  async createNewDonations(createDonationDto: CreateDonationDto): Promise<DonationEntity> {
    try {
      const donation = new DonationEntity()
      Object.assign(donation, createDonationDto)
      const donor = await this.donorService.findUserByMobile(createDonationDto.mobile)
      if (donor) {
        donation.donor = donor
      } else {
        throw new HttpException("No Existing User", HttpStatus.NOT_ACCEPTABLE)
      }
      return await this.donationRepository.save(donation)
    } catch (e) {
      console.log(e)
      throw e
    }
  }

  buildDonationInterface(donation: DonationEntity): DonationInterface {
    return {
      id: donation.id,
      name: donation.donor.name,
      amount: donation.amount,
    }
  }
}