import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Submission } from './submission.entity';

@Entity('campaigns')
export class Campaign {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('text')
  description: string;

  @Column('text', { nullable: true })
  requirements: string;

  @Column()
  deadline: Date;

  @Column({
    type: 'enum',
    enum: ['ACTIVE', 'COMPLETED'],
    default: 'ACTIVE'
  })
  status: string;

  @OneToMany(() => Submission, submission => submission.campaign)
  submissions: Submission[];
}