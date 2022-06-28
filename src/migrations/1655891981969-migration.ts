import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1655891981969 implements MigrationInterface {
    name = 'migration1655891981969'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`admins\` ADD \`createdBy\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`admins\` DROP COLUMN \`createdBy\``);
    }

}
