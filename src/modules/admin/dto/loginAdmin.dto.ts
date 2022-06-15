import { IsMobilePhone, IsNotEmpty } from "class-validator";

export class LoginAdminDto {
  @IsNotEmpty()
  @IsMobilePhone()
  readonly phone: string

  @IsNotEmpty()
  readonly password: string
}