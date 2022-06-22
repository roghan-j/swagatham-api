import { isEmail } from "class-validator";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "kyc" })
export class KycEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  fs_name: string

  @Column()
  gender: string

  @Column()
  m_status: string

  @Column({ type: 'date' })
  dob: Date

  @Column()
  status: string

  @Column()
  pan: number

  @Column()
  aaddhar: number

  @Column()
  id_proof: string

  @Column()
  address: string

  @Column()
  ctv: string

  @Column()
  pincode: number

  @Column()
  state: string

  @Column()
  country: string

  @Column()
  mobile: string

  @Column()
  email: string

  @Column()
  address_proof: string
}