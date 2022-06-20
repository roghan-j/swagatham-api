import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1655719155543 implements MigrationInterface {
    name = 'migration1655719155543'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`donations\` ADD \`order_id\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`donations\` ADD \`receipt\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`donations\` ADD \`completed\` tinyint NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`donations\` DROP COLUMN \`completed\``);
        await queryRunner.query(`ALTER TABLE \`donations\` DROP COLUMN \`receipt\``);
        await queryRunner.query(`ALTER TABLE \`donations\` DROP COLUMN \`order_id\``);
    }

}
