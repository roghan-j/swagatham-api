/// <reference types="multer" />
import { ExpressRequest } from "src/types/ExpressRequest.interface";
import { DeleteResult } from "typeorm";
import { BlogEntity } from "./blog.entity";
import { BlogService } from "./blog.service";
import { UpdateBlogDto } from "./dto/updateBlog.dto";
export declare class BlogController {
    private readonly blogService;
    constructor(blogService: BlogService);
    getSlugs(): Promise<BlogEntity[]>;
    getBlog(query: any): Promise<BlogEntity>;
    getDrafts(): Promise<BlogEntity[]>;
    getPublished(): Promise<BlogEntity[]>;
    deleteblog(query: any): Promise<DeleteResult>;
    createBlog(req: ExpressRequest, file: Express.Multer.File, createBlogDto: any): Promise<BlogEntity>;
    updateBlog(updateBlogDto: UpdateBlogDto): Promise<BlogEntity>;
}
