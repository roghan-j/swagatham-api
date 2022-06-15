"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migration1655112872704 = void 0;
class migration1655112872704 {
    constructor() {
        this.name = 'migration1655112872704';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`donations\` (\`id\` int NOT NULL AUTO_INCREMENT, \`desc\` varchar(255) NOT NULL, \`amount\` int NOT NULL, \`donorId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`donations\` ADD CONSTRAINT \`FK_e3eebd26ba5ec476feb06c93cea\` FOREIGN KEY (\`donorId\`) REFERENCES \`donors\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`donations\` DROP FOREIGN KEY \`FK_e3eebd26ba5ec476feb06c93cea\``);
        await queryRunner.query(`DROP TABLE \`donations\``);
    }
}
exports.migration1655112872704 = migration1655112872704;
//# sourceMappingURL=1655112872704-migration.js.map