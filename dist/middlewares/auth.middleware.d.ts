import { NestMiddleware } from "@nestjs/common";
import { Response, NextFunction } from "express";
import { ExpressRequest } from "src/types/ExpressRequest.interface";
import { AdminService } from "src/modules/admin/admin.service";
import { ConfigService } from "@nestjs/config";
export declare class AuthMiddleware implements NestMiddleware {
    private readonly adminService;
    private readonly configService;
    constructor(adminService: AdminService, configService: ConfigService);
    use(req: ExpressRequest, _: Response, next: NextFunction): Promise<void>;
}
