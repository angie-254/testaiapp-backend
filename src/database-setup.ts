import { DataSource } from 'typeorm';
import { Campaign } from './campaigns/entities/campaign.entity';
import { Submission } from './campaigns/entities/submission.entity';
import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv';

dotenv.config();

const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '3306'),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Campaign, Submission],
  synchronize: false
});

async function setupDatabase() {
  try {
    const connection = await AppDataSource.initialize();
    console.log('Database connection established');

    
    const schemaPath = path.join(__dirname, 'database', 'schema.sql');
    const schema = fs.readFileSync(schemaPath, 'utf8');
    
    
    const statements = schema
      .split(';')
      .filter(statement => statement.trim());
    
    
    for (const statement of statements) {
      if (statement.trim()) {
        try {
          await connection.query(statement + ';');
          console.log('Executed:', statement.substring(0, 50) + '...');
        } catch (err) {
          console.error('Error executing statement:', statement);
          console.error('Error:', err);
        }
      }
    }

    console.log('Schema setup completed');
    await connection.destroy();
    console.log('Connection closed');
  } catch (error) {
    console.error('Error:', error);
  }
}

setupDatabase();