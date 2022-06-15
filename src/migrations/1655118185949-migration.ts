import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1655118185949 implements MigrationInterface {
    name = 'migration1655118185949'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`kyc\` ADD \`mobile\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`kyc\` DROP COLUMN \`mobile\``);
    }

}
