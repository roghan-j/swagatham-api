import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1654771908999 implements MigrationInterface {
    name = 'migration1654771908999'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`admins\` ADD \`token\` varchar(255) NOT NULL DEFAULT ''`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`admins\` DROP COLUMN \`token\``);
    }

}
