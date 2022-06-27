import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'blogs' })
export class BlogEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  author: string

  @Column()
  title: string

  @Column({
    length: 1500
  })
  content: string

  @Column()
  image: string
} 