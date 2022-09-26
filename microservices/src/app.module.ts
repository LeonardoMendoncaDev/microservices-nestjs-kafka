import { Module } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServicesController } from './services/services.controller';

@Module({
  imports: [],
  controllers: [AppController, ServicesController],
  providers: [AppService, EventEmitter2],
})
export class AppModule {}
