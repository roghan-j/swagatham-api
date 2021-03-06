import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataSource } from 'typeorm';
import { AdminModule } from './modules/admin/admin.module';
import { AuthMiddleware } from './middlewares/auth.middleware';
import { DonorModule } from './modules/donor/donor.module';
import { DonationsModule } from './modules/donations/donations.module';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston'
import MySQLTransport from 'winston-mysql'
import { LogEntity } from './log.entity';
import { BlogModule } from './modules/blog/blog.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: 'swagatham',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      migrations: [__dirname + '../migrations/*.{.ts,.js}']
    }),
    TypeOrmModule.forFeature([LogEntity]),
    AdminModule,
    DonorModule,
    DonationsModule,
    BlogModule,
    WinstonModule.forRoot({
      level: 'info',
      format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
      transports: [
        new MySQLTransport({
          host: process.env.DB_HOST,
          port: 3306,
          user: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: 'swagatham',
          table: 'logs',
          fields: { level: 'msg-level', meta: 'metadata', message: 'log', timestamp: 'timestamp' },
          level: 'info'
        })
      ]
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) { }
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes({
      path: '*',
      method: RequestMethod.ALL
    })
  }
}
