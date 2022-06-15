"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migration1654771908999 = void 0;
class migration1654771908999 {
    constructor() {
        this.name = 'migration1654771908999';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`admins\` ADD \`token\` varchar(255) NOT NULL DEFAULT ''`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`admins\` DROP COLUMN \`token\``);
    }
}
exports.migration1654771908999 = migration1654771908999;
//# sourceMappingURL=1654771908999-migration.js.map