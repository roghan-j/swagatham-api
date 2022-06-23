import { DonationInterface } from "src/types/donation.interface";
import { PaymentInterface } from "src/types/payment.interface";
import { DonationsService } from "./donations.service";
import { CreateDonationDto } from "./dto/createDonation.dto";
import { Logger } from 'winston';
export declare class DonationsController {
    private readonly donationService;
    private readonly logger;
    constructor(donationService: DonationsService, logger: Logger);
    getTopDonations(): Promise<DonationInterface[]>;
    getRecentDonations(): Promise<DonationInterface[]>;
    createNewDonation(createDonationDto: CreateDonationDto): Promise<PaymentInterface>;
}
