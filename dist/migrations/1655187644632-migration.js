"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migration1655187644632 = void 0;
class migration1655187644632 {
    constructor() {
        this.name = 'migration1655187644632';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`donors\` DROP COLUMN \`dob\``);
        await queryRunner.query(`ALTER TABLE \`donors\` ADD \`dob\` date NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`donors\` DROP COLUMN \`dob\``);
        await queryRunner.query(`ALTER TABLE \`donors\` ADD \`dob\` datetime NOT NULL`);
    }
}
exports.migration1655187644632 = migration1655187644632;
//# sourceMappingURL=1655187644632-migration.js.map