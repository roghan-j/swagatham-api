import { Controller, Get, Param, Post, UseGuards, Query } from '@nestjs/common';
// import { Query } from 'typeorm/driver/Query';
import { AppService } from './app.service';
import { AuthGuard } from './guards/auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('/api/logs')
  async returnLogs(@Query() query) {
    return await this.appService.returnLogs(query)
  }
}
