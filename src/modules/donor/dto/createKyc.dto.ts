import { IsAlpha, IsAlphanumeric, IsDate, IsEmail, IsMobilePhone, IsNotEmpty, IsNumber, IsNumberString } from "class-validator"

export class CreateKycDto {
  @IsAlpha()
  @IsNotEmpty()
  name: string

  @IsAlpha()
  @IsNotEmpty()
  fs_name: string

  @IsNotEmpty()
  gender: string

  @IsAlpha()
  @IsNotEmpty()
  m_status: string

  @IsNotEmpty()
  dob: Date

  @IsNotEmpty()
  status: string

  @IsAlphanumeric()
  @IsNotEmpty()
  pan: number

  @IsNumberString()
  @IsNotEmpty()
  aadhar: number

  @IsNotEmpty()
  id_proof: string

  @IsAlphanumeric()
  @IsNotEmpty()
  address: string

  @IsAlpha()
  @IsNotEmpty()
  ctv: string

  @IsNumberString()
  @IsNotEmpty()
  pincode: number

  @IsAlpha()
  @IsNotEmpty()
  state: string

  @IsAlpha()
  @IsNotEmpty()
  country: string

  @IsMobilePhone()
  @IsNotEmpty()
  mobile: string

  @IsEmail()
  @IsNotEmpty()
  email: string

  @IsNotEmpty()
  address_proof: string
}