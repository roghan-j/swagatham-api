import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1655112872704 implements MigrationInterface {
    name = 'migration1655112872704'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`donations\` (\`id\` int NOT NULL AUTO_INCREMENT, \`desc\` varchar(255) NOT NULL, \`amount\` int NOT NULL, \`donorId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`donations\` ADD CONSTRAINT \`FK_e3eebd26ba5ec476feb06c93cea\` FOREIGN KEY (\`donorId\`) REFERENCES \`donors\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`donations\` DROP FOREIGN KEY \`FK_e3eebd26ba5ec476feb06c93cea\``);
        await queryRunner.query(`DROP TABLE \`donations\``);
    }

}
