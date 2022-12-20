import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @ApiTags('Health')
  @Get()
  @ApiOkResponse({ description: 'Hello World!' })
  getHello(): string {
    return this.appService.getHello();
  }
}
