"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migration1655549915960 = void 0;
class migration1655549915960 {
    constructor() {
        this.name = 'migration1655549915960';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`payments\` ADD \`receipt\` varchar(255) NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`payments\` DROP COLUMN \`receipt\``);
    }
}
exports.migration1655549915960 = migration1655549915960;
//# sourceMappingURL=1655549915960-migration.js.map