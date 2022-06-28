/// <reference types="multer" />
import { ExpressRequest } from "src/types/ExpressRequest.interface";
import { Repository } from "typeorm";
import { BlogEntity } from "./blog.entity";
import { UpdateBlogDto } from "./dto/updateBlog.dto";
export declare class BlogService {
    private readonly blogRepository;
    constructor(blogRepository: Repository<BlogEntity>);
    createBlog(req: ExpressRequest, file: Express.Multer.File, title: string): Promise<BlogEntity>;
    getSlugs(): Promise<BlogEntity[]>;
    getBlog(query: any): Promise<BlogEntity>;
    getDrafts(): Promise<BlogEntity[]>;
    updateBlog(updateBlogDto: UpdateBlogDto): Promise<BlogEntity>;
}
