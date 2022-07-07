import { DonationEntity } from "../donations/donations.entity";
import { FamilyEntity } from "./family.entity";
import { KycEntity } from "./kyc.entity";
export declare class DonorEntity {
    id: number;
    name: string;
    mobile: string;
    dob: Date;
    kyc: KycEntity;
    donations: DonationEntity[];
    family: FamilyEntity[];
}
