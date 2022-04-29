import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BullModule } from '@nestjs/bull';
import { SampleQueueProducerService } from './sample-queue.producer.service';

@Module({
  imports: [
    // BullModule.forRootAsync({
    //   redis: {
    //     host: 'localhost',
    //     port: 6379,
    //   },
    // }),
    BullModule.registerQueueAsync({
      name: 'sample-queue',
      useFactory: () => ({
        redis: {
          host: 'localhost',
          port: 6379,
        },
        // defaultJobOptions: {
        //   attempts: 1,
        //   jobId: 'job',
        //   backoff: 
        // }
      })
    }),
  ],
  controllers: [AppController],
  providers: [AppService, SampleQueueProducerService],
})
export class AppModule { }
