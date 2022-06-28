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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogEntity = void 0;
const typeorm_1 = require("typeorm");
const admin_entity_1 = require("../admin/admin.entity");
const slugify_1 = __importDefault(require("slugify"));
let BlogEntity = class BlogEntity {
    slugify() {
        this.slug = (0, slugify_1.default)(this.title);
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], BlogEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BlogEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 1500
    }),
    __metadata("design:type", String)
], BlogEntity.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'longblob' }),
    __metadata("design:type", Buffer)
], BlogEntity.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], BlogEntity.prototype, "draft", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BlogEntity.prototype, "slug", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => admin_entity_1.AdminEntity, admin => admin.blogs),
    __metadata("design:type", admin_entity_1.AdminEntity)
], BlogEntity.prototype, "author", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BlogEntity.prototype, "slugify", null);
BlogEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'blogs' })
], BlogEntity);
exports.BlogEntity = BlogEntity;
//# sourceMappingURL=blog.entity.js.map