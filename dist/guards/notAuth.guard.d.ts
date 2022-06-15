import { CanActivate, ExecutionContext } from "@nestjs/common";
export declare class NotAuthGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean;
}
