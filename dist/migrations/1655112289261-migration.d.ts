import { MigrationInterface, QueryRunner } from "typeorm";
export declare class migration1655112289261 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
