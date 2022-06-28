import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { hash } from "bcrypt"
import { BlogEntity } from "../blog/blog.entity";

@Entity({ name: "admins" })
export class AdminEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  username: string

  @Column()
  phone: string

  @Column({ select: false })
  password: string

  @Column()
  createdBy: string

  @OneToMany(() => BlogEntity, blog => blog.author)
  blogs: BlogEntity[]

  @BeforeInsert()
  async hashPassword() {
    this.password = await hash(this.password, 10)
  }
}