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

  @Column()
  order_id: string

  @Column()
  receipt: string

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  donatedAt: Date

  @Column()
  completed: boolean

  @ManyToOne(() => DonorEntity, donor => donor.mobile)
  donor: DonorEntity
} 