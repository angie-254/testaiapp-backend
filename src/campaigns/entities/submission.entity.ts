import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Campaign } from './campaign.entity';

@Entity('submissions')
export class Submission {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'user_id' })
  userId: number;

  @Column({ name: 'campaign_id' })
  campaignId: number;

  @Column({ name: 'content_url' })
  contentUrl: string;

  @Column({
    type: 'enum',
    enum: ['SUBMITTED', 'APPROVED', 'REJECTED'],
    default: 'SUBMITTED'
  })
  status: string;

  @CreateDateColumn({ name: 'created_at' })
  submittedAt: Date;

  @ManyToOne(() => Campaign)
  @JoinColumn({ name: 'campaign_id' })
  campaign: Campaign;
}