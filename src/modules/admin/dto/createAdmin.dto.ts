import { IsAlpha, IsMobilePhone, IsNotEmpty } from "class-validator";

export class CreateAdminDto {
  @IsNotEmpty()
  @IsAlpha()
  username: string

  @IsNotEmpty()
  @IsMobilePhone()
  phone: string

  @IsNotEmpty()
  password: string
}