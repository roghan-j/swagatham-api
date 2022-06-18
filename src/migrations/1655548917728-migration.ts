import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1655548917728 implements MigrationInterface {
    name = 'migration1655548917728'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`payments\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`mobile\` int NOT NULL, \`amount\` int NOT NULL, \`order_id\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`payments\``);
    }

}
