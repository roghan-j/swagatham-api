"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migration1654768560281 = void 0;
class migration1654768560281 {
    constructor() {
        this.name = 'migration1654768560281';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`admins\` (\`id\` int NOT NULL AUTO_INCREMENT, \`username\` varchar(255) NOT NULL, \`phone\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE \`admins\``);
    }
}
exports.migration1654768560281 = migration1654768560281;
//# sourceMappingURL=1654768560281-migration.js.map