import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import * as fs from 'fs';

@Processor('sample-queue')
export class SampleQueueConsumerService {
  @Process({name: 'job', concurrency: 3 })
  // @Process({name: 'job', concurrency: 1})
  async sampleJob(job: Job<any>) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(job.data);
    fs.writeFileSync('./../test.txt', job.data.message);
  }
}
