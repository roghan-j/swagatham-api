import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1656336351699 implements MigrationInterface {
    name = 'migration1656336351699'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`blogs\` CHANGE \`author\` \`authorId\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`blogs\` DROP COLUMN \`authorId\``);
        await queryRunner.query(`ALTER TABLE \`blogs\` ADD \`authorId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`blogs\` ADD CONSTRAINT \`FK_05aa4239904d894452e339e5139\` FOREIGN KEY (\`authorId\`) REFERENCES \`admins\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`blogs\` DROP FOREIGN KEY \`FK_05aa4239904d894452e339e5139\``);
        await queryRunner.query(`ALTER TABLE \`blogs\` DROP COLUMN \`authorId\``);
        await queryRunner.query(`ALTER TABLE \`blogs\` ADD \`authorId\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`blogs\` CHANGE \`authorId\` \`author\` varchar(255) NOT NULL`);
    }

}
