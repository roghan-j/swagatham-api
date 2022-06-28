"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migration1656335691620 = void 0;
class migration1656335691620 {
    constructor() {
        this.name = 'migration1656335691620';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`blogs\` (\`id\` int NOT NULL AUTO_INCREMENT, \`author\` varchar(255) NOT NULL, \`title\` varchar(255) NOT NULL, \`content\` varchar(1500) NOT NULL, \`image\` longblob NOT NULL, \`draft\` tinyint NOT NULL DEFAULT 1, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE \`blogs\``);
    }
}
exports.migration1656335691620 = migration1656335691620;
//# sourceMappingURL=1656335691620-migration.js.map