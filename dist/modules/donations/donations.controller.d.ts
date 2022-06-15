import { DonationInterface } from "src/types/donation.interface";
import { DonationEntity } from "./donations.entity";
import { DonationsService } from "./donations.service";
import { CreateDonationDto } from "./dto/createDonation.dto";
export declare class DonationsController {
    private readonly donationService;
    constructor(donationService: DonationsService);
    getTopDonations(): Promise<DonationInterface[]>;
    getRecentDonations(): Promise<DonationInterface[]>;
    createNewDonation(createDonationDto: CreateDonationDto): Promise<DonationEntity>;
}
