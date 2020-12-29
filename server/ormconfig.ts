import { ConnectionOptions } from 'typeorm';

// Check typeORM documentation for more information.
const config: ConnectionOptions = {
  type: 'postgres',
  host: process.env.PGHOST,
  port: parseInt(process.env.PGPORT) | 5432,
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  // We are using migrations, synchronize should be set to false.
  synchronize: true,
  // Run migrations automatically,
  // You can disable this if you prefer running migration manually.
  migrationsRun: true,
  logging: true,
  logger: 'file',
  // Allow both start:prod and start:dev to use migrations
  // __dirname is either dist or src folder, meaning either
  // the compiled js in prod or the ts in dev
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};

export = config;
