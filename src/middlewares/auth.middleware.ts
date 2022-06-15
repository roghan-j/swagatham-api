import { Injectable, NestMiddleware } from "@nestjs/common";
import { Response, NextFunction } from "express";
import { ExpressRequest } from "src/types/ExpressRequest.interface";
import { verify } from 'jsonwebtoken'
import { AdminService } from "src/modules/admin/admin.service";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly adminService: AdminService, private readonly configService: ConfigService) { }

  async use(req: ExpressRequest, _: Response, next: NextFunction) {
    if (!req.headers.authorization) {
      req.admin = null
      next()
      return
    }
    const token = req.headers.authorization as string
    const admin = await verify(token, this.configService.get('JWT_SECRET'))
    req.admin = await this.adminService.getUserById(admin.id)
    next()
  }
}