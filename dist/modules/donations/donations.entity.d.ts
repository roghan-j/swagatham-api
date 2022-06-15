import { DonorEntity } from "../donor/donor.entity";
export declare class DonationEntity {
    id: number;
    desc: string;
    amount: number;
    donatedAt: Date;
    donor: DonorEntity;
}
