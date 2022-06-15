"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migration1655116548328 = void 0;
class migration1655116548328 {
    constructor() {
        this.name = 'migration1655116548328';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`donations\` ADD \`donatedAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`donations\` DROP COLUMN \`donatedAt\``);
    }
}
exports.migration1655116548328 = migration1655116548328;
//# sourceMappingURL=1655116548328-migration.js.map