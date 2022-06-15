import { KycEntity } from "../kyc.entity"

export class CreateDonorDto {
  readonly name: string

  readonly mobile: string

  readonly dob: Date

  readonly kyc: KycEntity
}