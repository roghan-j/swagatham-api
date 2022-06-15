import { Body, Controller, Get, Post, Req, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { AuthGuard } from "src/guards/auth.guard";
import { NotAuthGuard } from "src/guards/notAuth.guard";
import { AdminInterface } from "src/types/admin.interface";
import { AdminEntity } from "./admin.entity";
import { AdminService } from "./admin.service";
import { LoginAdminDto } from "./dto/loginAdmin.dto";
import { CreateAdminDto } from "./dto/createAdmin.dto";
import { ExpressRequest } from "src/types/ExpressRequest.interface";

@Controller()
export class AdminController {
  constructor(private readonly adminService: AdminService) { }

  @Post('api/login')
  @UsePipes(new ValidationPipe())
  @UseGuards(NotAuthGuard)
  async login(@Body() loginAdminDto: LoginAdminDto): Promise<AdminInterface> {
    return await this.adminService.login(loginAdminDto)
  }

  @Post('api/admin')
  @UsePipes(new ValidationPipe())
  @UseGuards(AuthGuard)
  async createNewAdmin(@Body() createAdminDto: CreateAdminDto, @Req() req: ExpressRequest) {
    // console.log(createAdminDto)
    return await this.adminService.createNewAdmin(createAdminDto, req)
  }
}