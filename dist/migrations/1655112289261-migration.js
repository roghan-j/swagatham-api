"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migration1655112289261 = void 0;
class migration1655112289261 {
    constructor() {
        this.name = 'migration1655112289261';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`donors\` ADD \`dob\` datetime NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`donors\` DROP COLUMN \`dob\``);
    }
}
exports.migration1655112289261 = migration1655112289261;
//# sourceMappingURL=1655112289261-migration.js.map