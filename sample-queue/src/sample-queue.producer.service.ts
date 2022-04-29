import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Injectable()
export class SampleQueueProducerService {
  constructor(@InjectQueue('sample-queue') private sampleQueue: Queue) {}

  async sendDataToJob(message: string) {
    await this.sampleQueue.add('job', { message });
  }
}
