import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('campaigns')
export class Campaign {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('text')
  description: string;

  @Column('text')
  requirements: string;

  @Column()
  deadline: Date;

  @Column({
    type: 'enum',
    enum: ['ACTIVE', 'COMPLETED'],
    default: 'ACTIVE'
  })
  status: string;
}