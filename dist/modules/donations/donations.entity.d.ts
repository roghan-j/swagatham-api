import { DonorEntity } from "../donor/donor.entity";
export declare class DonationEntity {
    id: number;
    desc: string;
    amount: number;
    order_id: string;
    receipt: string;
    donatedAt: Date;
    completed: boolean;
    donor: DonorEntity;
}
