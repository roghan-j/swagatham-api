import { DonorEntity } from "./donor.entity";
export declare class FamilyEntity {
    id: number;
    name: string;
    mobile: string;
    relation: string;
    dob: Date;
    anniversary: Date;
    donor: DonorEntity;
}
