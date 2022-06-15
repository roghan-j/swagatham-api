"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migration1655108404607 = void 0;
class migration1655108404607 {
    constructor() {
        this.name = 'migration1655108404607';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`admins\` DROP COLUMN \`token\``);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`admins\` ADD \`token\` varchar(255) NOT NULL DEFAULT ''`);
    }
}
exports.migration1655108404607 = migration1655108404607;
//# sourceMappingURL=1655108404607-migration.js.map