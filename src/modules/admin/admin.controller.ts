import { Body, Controller, Get, Post, Req, UseGuards, UsePipes, ValidationPipe, Inject } from "@nestjs/common";
import { AuthGuard } from "src/guards/auth.guard";
import { NotAuthGuard } from "src/guards/notAuth.guard";
import { AdminInterface } from "src/types/admin.interface";
import { AdminEntity } from "./admin.entity";
import { AdminService } from "./admin.service";
import { LoginAdminDto } from "./dto/loginAdmin.dto";
import { CreateAdminDto } from "./dto/createAdmin.dto";
import { ExpressRequest } from "src/types/ExpressRequest.interface";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { Logger } from 'winston'

@Controller()
export class AdminController {
  constructor(private readonly adminService: AdminService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger) { }

  @Post('api/login')
  @UsePipes(new ValidationPipe())
  @UseGuards(NotAuthGuard)
  async login(@Req() req: ExpressRequest, @Body() loginAdminDto: LoginAdminDto): Promise<AdminInterface> {
    this.logger.info({ message: "Login Requested", requestedBy: req.admin })
    return await this.adminService.login(loginAdminDto)
  }

  @Post('api/admin')
  @UsePipes(new ValidationPipe())
  @UseGuards(AuthGuard)
  async createNewAdmin(@Body() createAdminDto: CreateAdminDto, @Req() req: ExpressRequest) {
    // console.log(createAdminDto)
    this.logger.info("login requested")
    return await this.adminService.createNewAdmin(createAdminDto, req)
  }
}