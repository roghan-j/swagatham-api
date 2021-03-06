import { DonationInterface } from "src/types/donation.interface";
import { Repository } from "typeorm";
import { DonorService } from "../donor/donor.service";
import { DonationEntity } from "./donations.entity";
import { CreateDonationDto } from "./dto/createDonation.dto";
import { PaymentInterface } from "src/types/payment.interface";
export declare class DonationsService {
    private readonly donationRepository;
    private readonly donorService;
    constructor(donationRepository: Repository<DonationEntity>, donorService: DonorService);
    getTopDonations(): Promise<DonationInterface[]>;
    getRecentDonations(): Promise<DonationInterface[]>;
    createNewDonation(createDonationDto: CreateDonationDto): Promise<PaymentInterface>;
    buildDonationInterface(donation: DonationEntity): DonationInterface;
    buildPaymentInterface(donation: DonationEntity): any;
}
