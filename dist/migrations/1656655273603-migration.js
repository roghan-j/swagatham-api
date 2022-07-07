"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migration1656655273603 = void 0;
class migration1656655273603 {
    constructor() {
        this.name = 'migration1656655273603';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`family_entity\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`mobile\` varchar(255) NOT NULL, \`relation\` varchar(255) NOT NULL, \`dob\` date NOT NULL, \`anniversary\` date NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE \`family_entity\``);
    }
}
exports.migration1656655273603 = migration1656655273603;
//# sourceMappingURL=1656655273603-migration.js.map