import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1655187644632 implements MigrationInterface {
    name = 'migration1655187644632'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`donors\` DROP COLUMN \`dob\``);
        await queryRunner.query(`ALTER TABLE \`donors\` ADD \`dob\` date NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`donors\` DROP COLUMN \`dob\``);
        await queryRunner.query(`ALTER TABLE \`donors\` ADD \`dob\` datetime NOT NULL`);
    }

}
