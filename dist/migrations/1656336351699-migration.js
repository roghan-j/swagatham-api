"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migration1656336351699 = void 0;
class migration1656336351699 {
    constructor() {
        this.name = 'migration1656336351699';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`blogs\` CHANGE \`author\` \`authorId\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`blogs\` DROP COLUMN \`authorId\``);
        await queryRunner.query(`ALTER TABLE \`blogs\` ADD \`authorId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`blogs\` ADD CONSTRAINT \`FK_05aa4239904d894452e339e5139\` FOREIGN KEY (\`authorId\`) REFERENCES \`admins\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`blogs\` DROP FOREIGN KEY \`FK_05aa4239904d894452e339e5139\``);
        await queryRunner.query(`ALTER TABLE \`blogs\` DROP COLUMN \`authorId\``);
        await queryRunner.query(`ALTER TABLE \`blogs\` ADD \`authorId\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`blogs\` CHANGE \`authorId\` \`author\` varchar(255) NOT NULL`);
    }
}
exports.migration1656336351699 = migration1656336351699;
//# sourceMappingURL=1656336351699-migration.js.map