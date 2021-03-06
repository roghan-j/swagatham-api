import { DonorEntity } from "./donor.entity";
import { DonorService } from "./donor.service";
import { CreateDonorDto } from "./dto/createDonor.dto";
import { CreateKycDto } from "./dto/createKyc.dto";
import { KycEntity } from "./kyc.entity";
export declare class DonorController {
    private readonly donorService;
    constructor(donorService: DonorService);
    getAllDonors(): Promise<DonorEntity[]>;
    sendMessage(): Promise<boolean>;
    fetchUserIds(): Promise<DonorEntity[]>;
    getKyc(query: any): Promise<KycEntity>;
    createKyc(createKycDto: CreateKycDto): Promise<KycEntity>;
    createDonor(createDonorDto: CreateDonorDto): Promise<DonorEntity>;
    filterDonor(): Promise<DonorEntity[]>;
    checkDonor(checkDonorDto: any): Promise<boolean>;
}
