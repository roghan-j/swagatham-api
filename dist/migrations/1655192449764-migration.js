"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migration1655192449764 = void 0;
class migration1655192449764 {
    constructor() {
        this.name = 'migration1655192449764';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`kyc\` ADD \`name\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`kyc\` ADD \`fs_name\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`kyc\` ADD \`gender\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`kyc\` ADD \`m_status\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`kyc\` ADD \`dob\` date NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`kyc\` ADD \`status\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`kyc\` ADD \`pan\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`kyc\` ADD \`aaddhar\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`kyc\` ADD \`id_proof\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`kyc\` ADD \`address\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`kyc\` ADD \`ctv\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`kyc\` ADD \`pincode\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`kyc\` ADD \`state\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`kyc\` ADD \`country\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`kyc\` ADD \`email\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`kyc\` ADD \`address_proof\` varchar(255) NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`kyc\` DROP COLUMN \`address_proof\``);
        await queryRunner.query(`ALTER TABLE \`kyc\` DROP COLUMN \`email\``);
        await queryRunner.query(`ALTER TABLE \`kyc\` DROP COLUMN \`country\``);
        await queryRunner.query(`ALTER TABLE \`kyc\` DROP COLUMN \`state\``);
        await queryRunner.query(`ALTER TABLE \`kyc\` DROP COLUMN \`pincode\``);
        await queryRunner.query(`ALTER TABLE \`kyc\` DROP COLUMN \`ctv\``);
        await queryRunner.query(`ALTER TABLE \`kyc\` DROP COLUMN \`address\``);
        await queryRunner.query(`ALTER TABLE \`kyc\` DROP COLUMN \`id_proof\``);
        await queryRunner.query(`ALTER TABLE \`kyc\` DROP COLUMN \`aaddhar\``);
        await queryRunner.query(`ALTER TABLE \`kyc\` DROP COLUMN \`pan\``);
        await queryRunner.query(`ALTER TABLE \`kyc\` DROP COLUMN \`status\``);
        await queryRunner.query(`ALTER TABLE \`kyc\` DROP COLUMN \`dob\``);
        await queryRunner.query(`ALTER TABLE \`kyc\` DROP COLUMN \`m_status\``);
        await queryRunner.query(`ALTER TABLE \`kyc\` DROP COLUMN \`gender\``);
        await queryRunner.query(`ALTER TABLE \`kyc\` DROP COLUMN \`fs_name\``);
        await queryRunner.query(`ALTER TABLE \`kyc\` DROP COLUMN \`name\``);
    }
}
exports.migration1655192449764 = migration1655192449764;
//# sourceMappingURL=1655192449764-migration.js.map