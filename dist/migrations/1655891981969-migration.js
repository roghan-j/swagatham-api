"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migration1655891981969 = void 0;
class migration1655891981969 {
    constructor() {
        this.name = 'migration1655891981969';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`admins\` ADD \`createdBy\` varchar(255) NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`admins\` DROP COLUMN \`createdBy\``);
    }
}
exports.migration1655891981969 = migration1655891981969;
//# sourceMappingURL=1655891981969-migration.js.map