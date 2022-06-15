import { AdminInterface } from "src/types/admin.interface";
import { AdminService } from "./admin.service";
import { LoginAdminDto } from "./dto/loginAdmin.dto";
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    login(loginAdminDto: LoginAdminDto): Promise<AdminInterface>;
}
