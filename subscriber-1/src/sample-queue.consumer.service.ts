import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import * as fs from 'fs';
import { timeout } from 'rxjs';

@Processor('sample-queue')
export class SampleQueueConsumerService {
  @Process({ name: 'job', concurrency: 8 })
  async sampleJob(job: Job<any>) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(job.data);
    fs.writeFileSync('./../test.txt', job.data.message);
  }
}
