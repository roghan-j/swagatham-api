import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1655109146869 implements MigrationInterface {
    name = 'migration1655109146869'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`kyc\` (\`id\` int NOT NULL AUTO_INCREMENT, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`donors\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`mobile\` varchar(255) NOT NULL, \`kycId\` int NULL, UNIQUE INDEX \`REL_1117cbb7dd3cd679e76b29f728\` (\`kycId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`donors\` ADD CONSTRAINT \`FK_1117cbb7dd3cd679e76b29f7287\` FOREIGN KEY (\`kycId\`) REFERENCES \`kyc\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`donors\` DROP FOREIGN KEY \`FK_1117cbb7dd3cd679e76b29f7287\``);
        await queryRunner.query(`DROP INDEX \`REL_1117cbb7dd3cd679e76b29f728\` ON \`donors\``);
        await queryRunner.query(`DROP TABLE \`donors\``);
        await queryRunner.query(`DROP TABLE \`kyc\``);
    }

}
