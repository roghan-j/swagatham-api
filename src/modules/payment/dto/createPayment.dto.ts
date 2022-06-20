import { IsMobilePhone, IsNotEmpty, IsNumber, IsNumberString } from "class-validator"

export class CreatePaymentDto{
    @IsNotEmpty()
    @IsMobilePhone()
    readonly mobile: number

    @IsNotEmpty()
    readonly amount: number
}