import { Body, Controller, Get, Post, Query, Req, UploadedFile, UseGuards, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { AuthGuard } from "src/guards/auth.guard";
import { ExpressRequest } from "src/types/ExpressRequest.interface";
import { BlogEntity } from "./blog.entity";
import { BlogService } from "./blog.service";

@Controller()
export class BlogController {
  constructor(private readonly blogService: BlogService) { }

  @Get('api/getslugs')
  async getSlugs(): Promise<BlogEntity[]> {
    return await this.blogService.getSlugs()
  }

  @Get('api/getBlog')
  async getBlog(@Query() query): Promise<BlogEntity> {
    return await this.blogService.getBlog(query)
  }

  @Post('api/createblog')
  @UseGuards(AuthGuard)
  @UseInterceptors(FileInterceptor('file'))
  async createBlog(@Req() req: ExpressRequest, @UploadedFile() file: Express.Multer.File, @Body() createBlogDto): Promise<BlogEntity> {
    return await this.blogService.createBlog(req, file, createBlogDto.title)
  }
}