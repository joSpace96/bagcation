"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ormConfig = void 0;
function ormConfig() {
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
exports.ormConfig = ormConfig;
//# sourceMappingURL=orm.config.js.map