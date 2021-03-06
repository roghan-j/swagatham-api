import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { InjectRepository } from "@nestjs/typeorm";
import { Admin, Repository } from "typeorm";
import { AdminEntity } from "./admin.entity";
import { LoginAdminDto } from "./dto/loginAdmin.dto";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import { AdminInterface } from "src/types/admin.interface";
import { CreateAdminDto } from "./dto/createAdmin.dto";
import { ExpressRequest } from "src/types/ExpressRequest.interface";

@Injectable()
export class AdminService {
  constructor(@InjectRepository(AdminEntity) private readonly adminRepository: Repository<AdminEntity>, private readonly configService: ConfigService) { }

  async login(loginAdminDto: LoginAdminDto): Promise<AdminInterface> {
    try {
      // console.log(loginAdminDto)
      const admin = await this.adminRepository.findOne({
        where: {
          phone: loginAdminDto.phone
        }, select: [
          "id",
          "username",
          "phone",
          "password"
        ]
      })
      // console.log(admin)
      if (!admin)
        throw new HttpException("Invalid Credentials", HttpStatus.BAD_REQUEST)
      const isMatch = await bcrypt.compare(loginAdminDto.password.trim(), admin.password.trim())
      delete admin.password
      // console.log(isMatch)
      if (isMatch) {
        const token = jwt.sign({
          id: admin.id,
          mobile: admin.phone,
          username: admin.username
        }, this.configService.get<string>('JWT_SECRET'))
        return {
          ...admin,
          token
        }
      } else {
        throw new HttpException("Invalid Credentials", HttpStatus.BAD_REQUEST)
      }
    } catch (e) {
      throw e
    }
  }

  async getUserById(id: number): Promise<AdminEntity> {
    try {
      return await this.adminRepository.findOne({
        where: {
          id
        }
      })
    } catch (e) {
      throw e
    }
  }

  async createNewAdmin(createAdminDto: CreateAdminDto, req: ExpressRequest): Promise<AdminEntity> {
    try {
      const admin = new AdminEntity()
      const isMobileExists = await this.adminRepository.findOne({
        where: {
          phone: createAdminDto.phone
        }
      })
      if (isMobileExists)
        throw new HttpException("User Already Exists", HttpStatus.BAD_REQUEST)
      Object.assign(admin, createAdminDto)
      admin.createdBy = req.admin.username
      return await this.adminRepository.save(admin)
    } catch (e) {
      throw e
    }
  }
}