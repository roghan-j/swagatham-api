import { IsAlphanumeric, IsMobilePhone, IsNotEmpty, IsNumberString, IsString } from "class-validator"

export class CreateDonationDto {
  @IsNotEmpty()
  @IsMobilePhone()
  readonly mobile: string

  @IsNotEmpty()
  readonly desc: string

  @IsNotEmpty()
  @IsNumberString()
  readonly amount: number
}