import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BullModule } from '@nestjs/bull';
import { SampleQueueConsumerService } from './sample-queue.consumer.service';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    BullModule.registerQueue({
      name: 'sample-queue',
    }),
  ],
  controllers: [AppController],
  providers: [AppService, SampleQueueConsumerService],
})
export class AppModule {}
