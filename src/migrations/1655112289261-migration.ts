import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1655112289261 implements MigrationInterface {
    name = 'migration1655112289261'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`donors\` ADD \`dob\` datetime NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`donors\` DROP COLUMN \`dob\``);
    }

}
