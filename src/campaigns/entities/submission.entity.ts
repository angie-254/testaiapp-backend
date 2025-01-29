import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('submissions')
export class Submission {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  campaignId: number;

  @Column()
  contentUrl: string;

  @Column({
    type: 'enum',
    enum: ['SUBMITTED', 'APPROVED', 'REJECTED'],
    default: 'SUBMITTED'
  })
  status: string;

  @CreateDateColumn()
  created_at: Date;
}