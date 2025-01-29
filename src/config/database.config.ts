import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Campaign } from 'src/campaigns/entities/campaign.entity';
import { Submission } from 'src/campaigns/entities/submission.entity';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT ?? '3306', 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Campaign, Submission],
  synchronize: process.env.NODE_ENV !== 'production',
};