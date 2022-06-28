import { BlogEntity } from "../blog/blog.entity";
export declare class AdminEntity {
    id: number;
    username: string;
    phone: string;
    password: string;
    createdBy: string;
    blogs: BlogEntity[];
    hashPassword(): Promise<void>;
}
