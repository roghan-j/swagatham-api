"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migration1655118185949 = void 0;
class migration1655118185949 {
    constructor() {
        this.name = 'migration1655118185949';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`kyc\` ADD \`mobile\` varchar(255) NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`kyc\` DROP COLUMN \`mobile\``);
    }
}
exports.migration1655118185949 = migration1655118185949;
//# sourceMappingURL=1655118185949-migration.js.map