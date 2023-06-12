import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from './orm.config';

@Module({
  imports: [TypeOrmModule.forRootAsync({ useFactory: ormConfig }), UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
