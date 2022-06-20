"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migration1655719155543 = void 0;
class migration1655719155543 {
    constructor() {
        this.name = 'migration1655719155543';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`donations\` ADD \`order_id\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`donations\` ADD \`receipt\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`donations\` ADD \`completed\` tinyint NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`donations\` DROP COLUMN \`completed\``);
        await queryRunner.query(`ALTER TABLE \`donations\` DROP COLUMN \`receipt\``);
        await queryRunner.query(`ALTER TABLE \`donations\` DROP COLUMN \`order_id\``);
    }
}
exports.migration1655719155543 = migration1655719155543;
//# sourceMappingURL=1655719155543-migration.js.map