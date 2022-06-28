import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BlogController } from "./blog.controller";
import { BlogEntity } from "./blog.entity";
import { BlogService } from "./blog.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([BlogEntity])
  ],
  controllers: [BlogController],
  providers: [BlogService]
})
export class BlogModule { }