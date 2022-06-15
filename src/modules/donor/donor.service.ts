import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { create } from "domain";
import { Repository } from "typeorm";
import { DonationEntity } from "../donations/donations.entity";
import { DonorEntity } from "./donor.entity";
import { CreateDonorDto } from "./dto/createDonor.dto";
import { CreateKycDto } from "./dto/createKyc.dto";
import { KycEntity } from "./kyc.entity";

@Injectable()
export class DonorService {
  constructor(@InjectRepository(DonorEntity) private readonly donorRepository: Repository<DonorEntity>, @InjectRepository(KycEntity) private readonly kycRepository: Repository<KycEntity>) { }

  async getAllDonors(): Promise<DonorEntity[]> {
    const donors = await this.donorRepository.find()
    return donors
  }

  async createNewKyc(createKycDto: CreateKycDto): Promise<KycEntity> {
    try {
      const kyc = new KycEntity()
      Object.assign(kyc, createKycDto)
      const kycc = this.kycRepository.save(kyc)
      const donor = await this.createNewDonor({
        name: createKycDto.name,
        mobile: createKycDto.mobile,
        dob: createKycDto.dob
      })
      return kycc
    } catch (e) {
      console.log(e)
    }
  }

  async createNewDonor(createDonorDto: CreateDonorDto): Promise<DonorEntity> {
    try {
      const donor = new DonorEntity()
      const kyc = await this.kycRepository.findOne({
        where: {
          mobile: createDonorDto.mobile
        }
      })
      Object.assign(donor, createDonorDto)
      donor.kyc = kyc
      await this.donorRepository.save(donor)
      return donor
    } catch (e) {
      console.log(e)
    }
  }

  async findUserByMobile(mobile: string): Promise<DonorEntity> {
    try {
      return await this.donorRepository.findOne({
        where: {
          mobile
        }
      })
    } catch (e) {
      console.log(e)
    }
  }
}