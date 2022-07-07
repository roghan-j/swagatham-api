import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { DonorEntity } from "./donor.entity";

@Entity({ name: "family" })
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

  @ManyToOne(() => DonorEntity, donor => donor.family)
  donor: DonorEntity
}