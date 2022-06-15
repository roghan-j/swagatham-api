import { MigrationInterface, QueryRunner } from "typeorm";
export declare class migration1654771908999 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
