import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

const testConnection = async () => {
  const AppDataSource = new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST || 'your-aiven-host',
    port: parseInt(process.env.DB_PORT || '3306'),
    username: process.env.DB_USERNAME || 'your-aiven-username',
    password: process.env.DB_PASSWORD || 'your-aiven-password',
    database: process.env.DB_NAME || 'your-aiven-database',
    synchronize: false,
    logging: true
  });

  try {
    await AppDataSource.initialize();
    console.log('✅ Successfully connected to database');
    
    
    const dbInfo = await AppDataSource.query('SELECT @@hostname as hostname, database() as current_db');
    console.log('Database Info:', dbInfo);
    
    //
    const tables = await AppDataSource.query('SHOW TABLES');
    console.log('Tables in database:', tables);
    
    await AppDataSource.destroy();
    console.log('Connection closed');
  } catch (error) {
    console.error('❌ Error connecting to database:', error);
  }
};

testConnection();