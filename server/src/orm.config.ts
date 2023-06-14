import { TypeOrmModuleOptions } from '@nestjs/typeorm';

function ormConfig(): TypeOrmModuleOptions {
  const commonConf = {
    SYNCRONIZE: true,
    ENTITIES: [__dirname + '/domain/*{.ts,.js}'],
    MIGRATIONS: [__dirname + '/migrations/**/*{.ts,.js}'],
    MIGRATIONS_RUN: false,
  };

  return {
    name: 'default',
    type: 'mysql',
    database: 'bagcation',
    host: 'localhost',
    port: Number(3306),
    username: 'root',
    password: 'root',
    logging: true,
    synchronize: commonConf.SYNCRONIZE,
    entities: commonConf.ENTITIES,
    migrations: commonConf.MIGRATIONS,
    migrationsRun: commonConf.MIGRATIONS_RUN,
  };
}

export { ormConfig };

// host: '192.168.0.45',
//     port: Number(3307),
//     username: 'Jo',
//     password: '1234',
