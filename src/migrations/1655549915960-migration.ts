import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1655549915960 implements MigrationInterface {
    name = 'migration1655549915960'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`payments\` ADD \`receipt\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`payments\` DROP COLUMN \`receipt\``);
    }

}
