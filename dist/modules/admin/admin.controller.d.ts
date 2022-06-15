import { AdminInterface } from "src/types/admin.interface";
import { AdminEntity } from "./admin.entity";
import { AdminService } from "./admin.service";
import { LoginAdminDto } from "./dto/loginAdmin.dto";
import { CreateAdminDto } from "./dto/createAdmin.dto";
import { ExpressRequest } from "src/types/ExpressRequest.interface";
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    login(loginAdminDto: LoginAdminDto): Promise<AdminInterface>;
    createNewAdmin(createAdminDto: CreateAdminDto, req: ExpressRequest): Promise<AdminEntity>;
}
