"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migration1656352739897 = void 0;
class migration1656352739897 {
    constructor() {
        this.name = 'migration1656352739897';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`blogs\` ADD \`slug\` varchar(255) NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`blogs\` DROP COLUMN \`slug\``);
    }
}
exports.migration1656352739897 = migration1656352739897;
//# sourceMappingURL=1656352739897-migration.js.map