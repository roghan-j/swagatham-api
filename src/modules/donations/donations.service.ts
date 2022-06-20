import { HttpException, HttpStatus, Injectable, UsePipes, ValidationPipe } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DonationInterface } from "src/types/donation.interface";
import { Repository } from "typeorm";
import { DonorService } from "../donor/donor.service";
import { DonationEntity } from "./donations.entity";
import { CreateDonationDto } from "./dto/createDonation.dto";
import axios from 'axios';
import { v4 as uuidv4 } from "uuid"
import { PaymentInterface } from "src/types/payment.interface";

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

  async createNewDonation(createDonationDto: CreateDonationDto): Promise<PaymentInterface> {
    try {
      const res = await axios.post('https://api.razorpay.com/v1/orders', {
        "amount": createDonationDto.amount * 100,
        "currency": "INR",
        "receipt": uuidv4(),
        "partial_payment": true,
        "first_payment_min_amount": 230
      }, {
        auth: {
          username: process.env.RAZORPAY_KEY,
          password: process.env.RAZORPAY_SECRET
        }
      })
      const donation = new DonationEntity()

      donation.amount = createDonationDto.amount
      donation.order_id = res.data.id
      donation.receipt = res.data.receipt
      donation.desc = createDonationDto.desc
      donation.completed = false

      const donor = await this.donorService.findUserByMobile(createDonationDto.mobile)

      if (donor) {
        donation.donor = donor
      } else {
        throw new HttpException("No Existing User", HttpStatus.NOT_ACCEPTABLE)
      }

      // await this.donationRepository.save(donation)

      return this.buildPaymentInterface(donation)
    } catch (e) {
      console.log(e)
      throw e
    }
  }

  buildDonationInterface(donation: DonationEntity): DonationInterface {
    return {
      id: donation.order_id,
      name: donation.donor.name,
      amount: donation.amount,
    }
  }

  buildPaymentInterface(donation: DonationEntity): any {
    return {
      amount: donation.amount,
      name: donation.donor.name,
      mobile: donation.donor.mobile,
      order_id: donation.order_id,
      email: donation.donor.kyc.email
    }
  }
}
