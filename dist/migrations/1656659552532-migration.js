"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migration1656659552532 = void 0;
class migration1656659552532 {
    constructor() {
        this.name = 'migration1656659552532';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`family\` ADD \`donorId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`family\` ADD CONSTRAINT \`FK_4b60a0a910dfd51ff62ac252e06\` FOREIGN KEY (\`donorId\`) REFERENCES \`donors\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`family\` DROP FOREIGN KEY \`FK_4b60a0a910dfd51ff62ac252e06\``);
        await queryRunner.query(`ALTER TABLE \`family\` DROP COLUMN \`donorId\``);
    }
}
exports.migration1656659552532 = migration1656659552532;
//# sourceMappingURL=1656659552532-migration.js.map