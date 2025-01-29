import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Campaign } from '../campaigns/entities/campaign.entity';
import { Submission } from '../campaigns/entities/submission.entity';
import * as dotenv from 'dotenv';

dotenv.config();

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '3306'),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Campaign, Submission],
  synchronize: false,
  autoLoadEntities: true,
  connectTimeout: 30000,
  extra: {
    connectionLimit: 5
  }
};