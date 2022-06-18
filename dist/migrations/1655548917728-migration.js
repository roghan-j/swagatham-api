"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migration1655548917728 = void 0;
class migration1655548917728 {
    constructor() {
        this.name = 'migration1655548917728';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`payments\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`mobile\` int NOT NULL, \`amount\` int NOT NULL, \`order_id\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE \`payments\``);
    }
}
exports.migration1655548917728 = migration1655548917728;
//# sourceMappingURL=1655548917728-migration.js.map