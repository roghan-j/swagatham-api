import { ConfigService } from "@nestjs/config";
import { Repository } from "typeorm";
import { AdminEntity } from "./admin.entity";
import { LoginAdminDto } from "./dto/loginAdmin.dto";
import { AdminInterface } from "src/types/admin.interface";
import { CreateAdminDto } from "./dto/createAdmin.dto";
import { ExpressRequest } from "src/types/ExpressRequest.interface";
export declare class AdminService {
    private readonly adminRepository;
    private readonly configService;
    constructor(adminRepository: Repository<AdminEntity>, configService: ConfigService);
    login(loginAdminDto: LoginAdminDto): Promise<AdminInterface>;
    getUserById(id: number): Promise<AdminEntity>;
    createNewAdmin(createAdminDto: CreateAdminDto, req: ExpressRequest): Promise<any>;
}
