import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1655108404607 implements MigrationInterface {
    name = 'migration1655108404607'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`admins\` DROP COLUMN \`token\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`admins\` ADD \`token\` varchar(255) NOT NULL DEFAULT ''`);
    }

}
