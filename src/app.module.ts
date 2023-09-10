import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './Entities/user.entity';
import { UserModule } from './database/tables/User/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'gsdatabase',
      entities: [User],
      synchronize: true,
    }),
    UserModule,

  ],
  controllers: [
    AppController],
  providers: [
    AppService],
})
export class AppModule { }
