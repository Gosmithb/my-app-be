import {DataSource, DataSourceOptions} from 'typeorm'
import * as path from 'path';

const dataSource = new DataSource(dataSourceOptions());

export function dataSourceOptions(): DataSourceOptions {
  return {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '18102001',
    database: 'my-app',
    entities: [path.join(__dirname, '../src/**/*.entity.{js,ts}') ],
		migrations: [path.join(__dirname, '../db/migrations/*.{js,ts}')],
    synchronize: true
  };
} 

export default dataSource;
