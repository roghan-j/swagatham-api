import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { DonorEntity } from "../donor/donor.entity";

@Entity({ name: 'donations' })
export class DonationEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  desc: string

  @Column()
  amount: number

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  donatedAt: Date

  @ManyToOne(() => DonorEntity, donor => donor.mobile)
  donor: DonorEntity
} 