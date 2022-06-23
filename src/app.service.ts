import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import appDataSource from './datasource';
import { LogEntity } from './log.entity';

@Injectable()
export class AppService {
  constructor(@InjectRepository(LogEntity) private readonly logRepository: Repository<LogEntity>) { }

  async returnLogs(): Promise<LogEntity[]> {
    const logs = await this.logRepository.find()
    return logs
  }

}
