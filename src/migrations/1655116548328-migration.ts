import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1655116548328 implements MigrationInterface {
    name = 'migration1655116548328'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`donations\` ADD \`donatedAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`donations\` DROP COLUMN \`donatedAt\``);
    }

}
