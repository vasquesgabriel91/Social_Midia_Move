import { DataSource } from 'typeorm';
import { User } from './modules/user/entities/user.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost', 
  port: 5432,
  username: 'root',
  password: '123456',
  database: 'socialmoves',
  synchronize: false,
  logging: true,
  entities: [User],
  migrations: ['src/migrations/*.ts'],
});
