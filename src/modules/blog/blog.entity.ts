import { Admin, BeforeInsert, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { AdminEntity } from "../admin/admin.entity";
import slugify from "slugify";

@Entity({ name: 'blogs' })
export class BlogEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column({
    length: 1500
  })
  content: string

  @Column({ type: 'longblob' })
  image: Buffer

  @Column({ default: true })
  draft: boolean

  @Column()
  slug: string

  @ManyToOne(() => AdminEntity, admin => admin.blogs)
  author: AdminEntity

  @BeforeInsert()
  slugify() {
    this.slug = slugify(this.title)
  }
} 