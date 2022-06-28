import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1656352739897 implements MigrationInterface {
    name = 'migration1656352739897'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`blogs\` ADD \`slug\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`blogs\` DROP COLUMN \`slug\``);
    }

}
