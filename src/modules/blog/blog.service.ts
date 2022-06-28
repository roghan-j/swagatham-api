import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { query } from "express";
import { ExpressRequest } from "src/types/ExpressRequest.interface";
import { Repository } from "typeorm";
import { BlogEntity } from "./blog.entity";
import { UpdateBlogDto } from "./dto/updateBlog.dto";

@Injectable()
export class BlogService {
  constructor(@InjectRepository(BlogEntity) private readonly blogRepository: Repository<BlogEntity>) { }

  async createBlog(req: ExpressRequest, file: Express.Multer.File, title: string): Promise<BlogEntity> {
    const newBlog = new BlogEntity()
    newBlog.image = file.buffer
    newBlog.title = title
    newBlog.content = ""
    newBlog.author = req.admin
    try {
      return await this.blogRepository.save(newBlog)
    } catch (e) {
      console.log(e)
    }
  }

  async getSlugs(): Promise<BlogEntity[]> {
    try {
      return await this.blogRepository.find({
        where: {
          draft: true
        },
        select: ["slug"]
      })
    } catch (e) {
      console.log(e)
    }
  }

  async getBlog(query): Promise<BlogEntity> {
    try {
      const res = await this.blogRepository.findOne({
        where: {
          slug: query.slug
        },
        select: [
          "id",
          "content",
          "title",
          "image",
          "slug"
        ],
        relations: {
          author: true
        }
      })
      console.log(res)
      return res
    } catch (e) {
      console.log(e)
    }
  }

  async getDrafts(): Promise<BlogEntity[]> {
    try {
      return await this.blogRepository.find({
        where: {
          draft: true
        },
        relations: {
          author: true
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  async updateBlog(updateBlogDto: UpdateBlogDto): Promise<BlogEntity> {
    try {
      const blog = await this.blogRepository.findOne({
        where: {
          slug: updateBlogDto.slug
        }
      })
      blog.content = updateBlogDto.content
      blog.draft = updateBlogDto.draft
      // console.log(blog)
      return await this.blogRepository.save(blog)
    } catch (e) {
      console.log(e)
    }
  }
}