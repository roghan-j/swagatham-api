import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { DonationEntity } from "../donations/donations.entity";
import { KycEntity } from "./kyc.entity";

@Entity({ name: "donors" })
export class DonorEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  mobile: string

  @Column({ type: "date" })
  dob: Date

  @OneToOne(() => KycEntity)
  @JoinColumn()
  kyc: KycEntity

  @OneToMany(() => DonationEntity, donation => donation.donor)
  donations: DonationEntity[]
}