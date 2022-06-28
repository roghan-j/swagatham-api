/// <reference types="node" />
import { AdminEntity } from "../admin/admin.entity";
export declare class BlogEntity {
    id: number;
    title: string;
    content: string;
    image: Buffer;
    draft: boolean;
    slug: string;
    author: AdminEntity;
    slugify(): void;
}
