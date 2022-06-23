import { AdminInterface } from "src/types/admin.interface";
import { AdminEntity } from "./admin.entity";
import { AdminService } from "./admin.service";
import { LoginAdminDto } from "./dto/loginAdmin.dto";
import { CreateAdminDto } from "./dto/createAdmin.dto";
import { ExpressRequest } from "src/types/ExpressRequest.interface";
import { Logger } from 'winston';
export declare class AdminController {
    private readonly adminService;
    private readonly logger;
    constructor(adminService: AdminService, logger: Logger);
    login(req: ExpressRequest, loginAdminDto: LoginAdminDto): Promise<AdminInterface>;
    createNewAdmin(createAdminDto: CreateAdminDto, req: ExpressRequest): Promise<AdminEntity>;
}
