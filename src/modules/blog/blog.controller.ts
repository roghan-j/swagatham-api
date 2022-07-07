import { Body, Controller, Get, Post, Query, Req, UploadedFile, UseGuards, UseInterceptors, UsePipes, ValidationPipe } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { AuthGuard } from "src/guards/auth.guard";
import { ExpressRequest } from "src/types/ExpressRequest.interface";
import { DeleteResult } from "typeorm";
import { BlogEntity } from "./blog.entity";
import { BlogService } from "./blog.service";
import { UpdateBlogDto } from "./dto/updateBlog.dto";

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

  @Get('api/getdrafts')
  async getDrafts(): Promise<BlogEntity[]> {
    return await this.blogService.getDrafts()
  }

  @Get('api/getpublished')
  async getPublished(): Promise<BlogEntity[]> {
    return await this.blogService.getPublished()
  }

  @Get('api/deleteblog')
  @UseGuards(AuthGuard)
  async deleteblog(@Query() query): Promise<DeleteResult> {
    console.log(query)
    return await this.blogService.deleteBlog(query.slug)
  }

  @Post('api/createblog')
  @UseGuards(AuthGuard)
  @UseInterceptors(FileInterceptor('file'))
  async createBlog(@Req() req: ExpressRequest, @UploadedFile() file: Express.Multer.File, @Body() createBlogDto): Promise<BlogEntity> {
    return await this.blogService.createBlog(req, file, createBlogDto.title)
  }

  @Post('api/updateblog')
  @UseGuards(AuthGuard)
  @UsePipes(new ValidationPipe())
  async updateBlog(@Body() updateBlogDto: UpdateBlogDto): Promise<BlogEntity> {
    return await this.blogService.updateBlog(updateBlogDto)
  }
}