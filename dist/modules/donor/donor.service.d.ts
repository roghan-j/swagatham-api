import { Repository } from "typeorm";
import { DonorEntity } from "./donor.entity";
import { CreateDonorDto } from "./dto/createDonor.dto";
import { CreateKycDto } from "./dto/createKyc.dto";
import { KycEntity } from "./kyc.entity";
import { FamilyOccasionInterface } from "src/types/FamilyOccassion.interface";
export declare class DonorService {
    private readonly donorRepository;
    private readonly kycRepository;
    constructor(donorRepository: Repository<DonorEntity>, kycRepository: Repository<KycEntity>);
    getAllDonors(): Promise<DonorEntity[]>;
    createNewKyc(createKycDto: CreateKycDto): Promise<KycEntity>;
    createNewDonor(createDonorDto: CreateDonorDto): Promise<DonorEntity>;
    findUserByMobile(mobile: string): Promise<DonorEntity>;
    fetchUserIds(): Promise<DonorEntity[]>;
    getKyc(id: number): Promise<KycEntity>;
    filterDonors(): Promise<DonorEntity[]>;
    sendMessage(): Promise<boolean>;
    checkDonor(mobile: string): Promise<boolean>;
    getFamilyData(): Promise<FamilyOccasionInterface[]>;
}
