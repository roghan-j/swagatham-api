import { MigrationInterface, QueryRunner } from "typeorm";
export declare class migration1655192449764 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
