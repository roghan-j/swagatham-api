import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1656659552532 implements MigrationInterface {
    name = 'migration1656659552532'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`family\` ADD \`donorId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`family\` ADD CONSTRAINT \`FK_4b60a0a910dfd51ff62ac252e06\` FOREIGN KEY (\`donorId\`) REFERENCES \`donors\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`family\` DROP FOREIGN KEY \`FK_4b60a0a910dfd51ff62ac252e06\``);
        await queryRunner.query(`ALTER TABLE \`family\` DROP COLUMN \`donorId\``);
    }

}
