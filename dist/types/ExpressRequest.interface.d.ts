import { Request } from "express";
import { AdminEntity } from "src/modules/admin/admin.entity";
export interface ExpressRequest extends Request {
    admin: AdminEntity;
}
