import { Repository } from "typeorm";
import { BlogEntity } from "./blog.entity";
export declare class BlogService {
    private readonly blogRepository;
    constructor(blogRepository: Repository<BlogEntity>);
}
