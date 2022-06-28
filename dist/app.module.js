"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_2 = require("typeorm");
const admin_module_1 = require("./modules/admin/admin.module");
const auth_middleware_1 = require("./middlewares/auth.middleware");
const donor_module_1 = require("./modules/donor/donor.module");
const donations_module_1 = require("./modules/donations/donations.module");
const nest_winston_1 = require("nest-winston");
const winston = __importStar(require("winston"));
const winston_mysql_1 = __importDefault(require("winston-mysql"));
const log_entity_1 = require("./log.entity");
const blog_module_1 = require("./modules/blog/blog.module");
let AppModule = class AppModule {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
    configure(consumer) {
        consumer.apply(auth_middleware_1.AuthMiddleware).forRoutes({
            path: '*',
            method: common_1.RequestMethod.ALL
        });
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: process.env.DB_HOST,
                username: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                database: 'swagatham',
                entities: [__dirname + '/**/*.entity{.ts,.js}'],
                migrations: [__dirname + '../migrations/*.{.ts,.js}']
            }),
            typeorm_1.TypeOrmModule.forFeature([log_entity_1.LogEntity]),
            admin_module_1.AdminModule,
            donor_module_1.DonorModule,
            donations_module_1.DonationsModule,
            blog_module_1.BlogModule,
            nest_winston_1.WinstonModule.forRoot({
                level: 'info',
                format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
                transports: [
                    new winston_mysql_1.default({
                        host: process.env.DB_HOST,
                        port: 3306,
                        user: process.env.DB_USER,
                        password: process.env.DB_PASSWORD,
                        database: 'swagatham',
                        table: 'logs',
                        fields: { level: 'msg-level', meta: 'metadata', message: 'log', timestamp: 'timestamp' },
                        level: 'info'
                    })
                ]
            })
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    }),
    __metadata("design:paramtypes", [typeorm_2.DataSource])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map