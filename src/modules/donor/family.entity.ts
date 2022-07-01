import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class FamilyEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  mobile: string

  @Column()
  relation: string

  @Column({ type: "date" })
  dob: Date

  @Column({ type: "date" })
  anniversary: Date
}