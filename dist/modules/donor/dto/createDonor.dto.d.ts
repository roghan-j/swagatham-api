import { KycEntity } from "../kyc.entity";
export declare class CreateDonorDto {
    readonly name: string;
    readonly mobile: string;
    readonly dob: Date;
    readonly kyc: KycEntity;
}
