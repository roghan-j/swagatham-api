/// <reference types="multer" />
import { ExpressRequest } from "src/types/ExpressRequest.interface";
import { BlogEntity } from "./blog.entity";
import { BlogService } from "./blog.service";
export declare class BlogController {
    private readonly blogService;
    constructor(blogService: BlogService);
    getSlugs(): Promise<BlogEntity[]>;
    getBlog(query: any): Promise<BlogEntity>;
    createBlog(req: ExpressRequest, file: Express.Multer.File, createBlogDto: any): Promise<BlogEntity>;
}
