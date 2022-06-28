import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1656335691620 implements MigrationInterface {
    name = 'migration1656335691620'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`blogs\` (\`id\` int NOT NULL AUTO_INCREMENT, \`author\` varchar(255) NOT NULL, \`title\` varchar(255) NOT NULL, \`content\` varchar(1500) NOT NULL, \`image\` longblob NOT NULL, \`draft\` tinyint NOT NULL DEFAULT 1, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`blogs\``);
    }

}
