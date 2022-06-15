import { MiddlewareConsumer } from '@nestjs/common';
import { DataSource } from 'typeorm';
export declare class AppModule {
    private dataSource;
    constructor(dataSource: DataSource);
    configure(consumer: MiddlewareConsumer): void;
}
