import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { SampleQueueProducerService } from './sample-queue.producer.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private sampleQueueProducerService: SampleQueueProducerService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('save')
  async saveToFile(@Body() body: { message: string }) {
    await this.sampleQueueProducerService.sendDataToJob(body.message);
    return body;
  }
}
