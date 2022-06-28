"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migration1655923781584 = void 0;
class migration1655923781584 {
    constructor() {
        this.name = 'migration1655923781584';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`logs\` (\`id\` int NOT NULL AUTO_INCREMENT, \`msg-level\` varchar(255) NOT NULL, \`log\` varchar(255) NOT NULL, \`metadata\` varchar(255) NOT NULL, \`timestamp\` datetime NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE \`logs\``);
    }
}
exports.migration1655923781584 = migration1655923781584;
//# sourceMappingURL=1655923781584-migration.js.map