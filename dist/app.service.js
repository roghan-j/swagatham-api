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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const datasource_1 = __importDefault(require("./datasource"));
const log_entity_1 = require("./log.entity");
let AppService = class AppService {
    constructor(logRepository) {
        this.logRepository = logRepository;
    }
    async returnLogs(query) {
        const start = query.startDate + " 00:00:00";
        const end = query.endDate + " 23:59:59";
        const logs = await datasource_1.default.createQueryBuilder().select("log").from(log_entity_1.LogEntity, "log").where("timestamp >= :start and timestamp < :end", { start, end }).getMany();
        console.log(logs);
        return logs;
    }
};
AppService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(log_entity_1.LogEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map