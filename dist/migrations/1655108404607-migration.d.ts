import { MigrationInterface, QueryRunner } from "typeorm";
export declare class migration1655108404607 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
