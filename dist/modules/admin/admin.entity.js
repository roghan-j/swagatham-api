"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminEntity = void 0;
const typeorm_1 = require("typeorm");
const bcrypt_1 = require("bcrypt");
const blog_entity_1 = require("../blog/blog.entity");
let AdminEntity = class AdminEntity {
    async hashPassword() {
        this.password = await (0, bcrypt_1.hash)(this.password, 10);
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], AdminEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AdminEntity.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AdminEntity.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ select: false }),
    __metadata("design:type", String)
], AdminEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AdminEntity.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => blog_entity_1.BlogEntity, blog => blog.author),
    __metadata("design:type", Array)
], AdminEntity.prototype, "blogs", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminEntity.prototype, "hashPassword", null);
AdminEntity = __decorate([
    (0, typeorm_1.Entity)({ name: "admins" })
], AdminEntity);
exports.AdminEntity = AdminEntity;
//# sourceMappingURL=admin.entity.js.map