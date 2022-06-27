import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import appDataSource from './datasource';
import { LogEntity } from './log.entity';

@Injectable()
export class AppService {
  constructor(@InjectRepository(LogEntity) private readonly logRepository: Repository<LogEntity>) { }

  async returnLogs(query): Promise<LogEntity[]> {
    const start = query.startDate + " 00:00:00"
    const end = query.endDate + " 23:59:59"
    const logs = await appDataSource.createQueryBuilder().select("log").from(LogEntity, "log").where("timestamp >= :start and timestamp < :end", { start, end }).getMany()
    console.log(logs)
    return logs
  }

}
