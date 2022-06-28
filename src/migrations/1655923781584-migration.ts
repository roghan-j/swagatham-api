import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1655923781584 implements MigrationInterface {
    name = 'migration1655923781584'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`logs\` (\`id\` int NOT NULL AUTO_INCREMENT, \`msg-level\` varchar(255) NOT NULL, \`log\` varchar(255) NOT NULL, \`metadata\` varchar(255) NOT NULL, \`timestamp\` datetime NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`logs\``);
    }

}
