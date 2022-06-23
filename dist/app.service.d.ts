import { Repository } from 'typeorm';
import { LogEntity } from './log.entity';
export declare class AppService {
    private readonly logRepository;
    constructor(logRepository: Repository<LogEntity>);
    returnLogs(): Promise<LogEntity[]>;
}
