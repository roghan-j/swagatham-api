import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1656655378257 implements MigrationInterface {
    name = 'migration1656655378257'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`family\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`mobile\` varchar(255) NOT NULL, \`relation\` varchar(255) NOT NULL, \`dob\` date NOT NULL, \`anniversary\` date NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`family\``);
    }

}
