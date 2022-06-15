import { IsAlphanumeric, IsMobilePhone, IsNotEmpty, IsNumberString } from "class-validator"

export class CreateDonationDto {
  @IsNotEmpty()
  @IsMobilePhone()
  readonly mobile: string

  @IsNotEmpty()
  @IsAlphanumeric()
  readonly desc: string

  @IsNotEmpty()
  @IsNumberString()
  readonly amount: number
}