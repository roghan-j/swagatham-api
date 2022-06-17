import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { create } from "domain";
import { Repository } from "typeorm";
import { DonationEntity } from "../donations/donations.entity";
import { DonorEntity } from "./donor.entity";
import { CreateDonorDto } from "./dto/createDonor.dto";
import { CreateKycDto } from "./dto/createKyc.dto";
import { KycEntity } from "./kyc.entity";
import appDataSource from "src/datasource";

@Injectable()
export class DonorService {
  constructor(@InjectRepository(DonorEntity) private readonly donorRepository: Repository<DonorEntity>, @InjectRepository(KycEntity) private readonly kycRepository: Repository<KycEntity>) { }

  async getAllDonors(): Promise<DonorEntity[]> {
    const donors = await this.donorRepository.find()
    return donors
  }

  async createNewKyc(createKycDto: CreateKycDto): Promise<KycEntity> {
    try {
      const isKycExist = await this.kycRepository.findOne({
        where: {
          mobile: createKycDto.mobile
        }
      })
      if (isKycExist)
        throw new HttpException("KYC Already exists!", HttpStatus.FOUND)
      const kyc = new KycEntity()
      Object.assign(kyc, createKycDto)
      const savedKyc = await this.kycRepository.save(kyc)
      const donor = await this.createNewDonor({
        name: createKycDto.name,
        mobile: createKycDto.mobile,
        dob: createKycDto.dob,
        kyc: kyc
      })
      return savedKyc
    } catch (e) {
      throw e
    }
  }

  async createNewDonor(createDonorDto: CreateDonorDto): Promise<DonorEntity> {
    try {
      const donor = new DonorEntity()
      Object.assign(donor, createDonorDto)
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

  async filterDonors(): Promise<DonorEntity[]> {
    try {
      const today = new Date();
      let date = today.getDate().toString()
      let month = (today.getMonth() + 1).toString()
      if (month.length === 1) {
        month = "0" + month
      }
      if (date.length === 1) {
        date = "0" + date
      }
      const allDonors = await appDataSource.createQueryBuilder().select("donor").from(DonorEntity, "donor").where("dob like :dob", { dob: `%-${month}-${date}`.trim() }).getMany()
      return allDonors
    } catch (e) {
      throw e
    }
  }
}