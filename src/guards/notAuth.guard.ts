import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import { ExpressRequest } from "src/types/ExpressRequest.interface";

@Injectable()
export class NotAuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest<ExpressRequest>()
    if (req.headers.authorizationToken)
      throw new HttpException("User Already Authenticated", HttpStatus.UNAUTHORIZED)
    else
      return true
  }
}