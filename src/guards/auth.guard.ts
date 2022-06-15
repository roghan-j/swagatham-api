import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { ExpressRequest } from "src/types/ExpressRequest.interface";

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(ctx: ExecutionContext): boolean {
    const request = ctx.switchToHttp().getRequest<ExpressRequest>()
    if (request.admin)
      return true
    else
      throw new HttpException("User Not Authorized", HttpStatus.UNAUTHORIZED)
  }
}