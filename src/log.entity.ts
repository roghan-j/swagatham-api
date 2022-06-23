import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "logs" })
export class LogEntity {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  "msg-level": string

  @Column()
  log: string

  @Column()
  metadata: string

  @Column()
  timestamp: Date

}