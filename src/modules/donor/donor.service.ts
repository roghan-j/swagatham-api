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
import messageSender from "./components/messageSender"
import { FamilyEntity } from "./family.entity";
import { FamilyOccasionInterface } from "src/types/FamilyOccassion.interface";

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
        }, relations: {
          "kyc": true
        }
      })
    } catch (e) {
      console.log(e)
    }
  }

  async fetchUserIds(): Promise<DonorEntity[]> {
    try {
      const ids = await this.donorRepository.find({
        select: [
          "id"
        ]
      })
      console.log(ids)
      return ids
    } catch (e) {
      console.log(e)
    }
  }

  async getKyc(id: number): Promise<KycEntity> {
    try {
      return await this.kycRepository.findOne({
        where: {
          id
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
      const allDonors = await appDataSource.createQueryBuilder().select("donor").from(DonorEntity, "donor").where("dob like :dob", { dob: `%-${"12"}-${"26"}`.trim() }).getMany()
      return allDonors
    } catch (e) {
      throw e
    }
  }

  async sendMessage() {
    try {
      const donors = await this.filterDonors()
      await messageSender(donors)
      return true
    } catch (e) {
      console.log(e)
    }
  }

  async checkDonor(mobile: string): Promise<boolean> {
    try {
      const donor = await this.donorRepository.findOne({
        where: {
          mobile
        }
      })

      console.log(donor)
      
      if (donor) {
        return true
      }
      else{
        return false
      }
    } catch (e) {
      console.log(e)
      throw e
    }
  }

  async getFamilyData(): Promise<FamilyOccasionInterface[]> {
    try {
      const today = new Date()
      const tomorrow = new Date(today)
      tomorrow.setDate(tomorrow.getDate() + 1)

      const familyDOB = await appDataSource.createQueryBuilder().select("family").from(FamilyEntity, "family").where("dob >= :today and dob < :tomorrow", { today, tomorrow }).getMany()

      const familyAnniversary = await appDataSource.createQueryBuilder().select("family").from(FamilyEntity, "family").where("anniversary >= :today and anniversary < :tomorrow", { today, tomorrow }).getMany()

      const familyOccasion = []

      familyDOB.map(member => {
        familyOccasion.push({
          donor: member.donor.name,
          relation: member.relation,
          family_member: member.name,
          mobile: member.mobile,
          donorMobile: member.donor.mobile,
          dob: member.dob,
          anniversary: member.anniversary,
          occasion: "Birthday"
        })
      })

      familyAnniversary.map(member => {
        familyOccasion.push({
          donor: member.donor.name,
          relation: member.relation,
          family_member: member.name,
          mobile: member.mobile,
          donorMobile: member.donor.mobile,
          dob: member.dob,
          anniversary: member.anniversary,
          occasion: "Anniversary"
        })
      })

      familyOccasion.sort((a, b) => {
        if (a.donor < b.donor)
          return -1
        if (a.donor > b.donor)
          return 1
        if (a.donor == b.donor) {
          if (a.family_member < b.family_member)
            return -1
          else
            return 1
        }
        return 0
      })

      return familyOccasion
    } catch (e) {
      console.log(e)
    }
  }
}