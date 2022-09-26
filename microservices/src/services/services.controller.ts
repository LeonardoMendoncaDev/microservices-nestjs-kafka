import { Controller, Logger } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { KafkaMessage } from '@nestjs/microservices/external/kafka.interface';

@Controller()
export class ServicesController {
  constructor(private eventEmitter: EventEmitter2) {}

  //   @EventPattern('services')
  //   serviceEvent(@Payload(new ValidationPipe()) { value }: KafkaServiceDto) {
  //     Logger.debug(value, 'ServicesController - serviceEvent');
  //     this.eventEmitter.emit(value.eventType, value);
  //   }

  //   @OnEvent('ServiceCreated')
  //   handleServiceCreatedEvent(createServiceDto: CreateServiceDto) {
  //     Logger.debug(
  //       createServiceDto,
  //       'ServicesController - handleServiceCreatedEvent',
  //     );
  //   }

  //   @OnEvent('ServiceUpdated')
  //   handleServiceUpdatedEvent(updateServiceDto: UpdateServiceDto) {
  //     Logger.debug(
  //       updateServiceDto,
  //       'ServicesController - handleServiceUpdatedEvent',
  //     );
  //   }

  //   @OnEvent('ServiceDeleted')
  //   handleServiceDeletedEvent(deleteServiceDto: DeleteServiceDto) {
  //     Logger.debug(
  //       deleteServiceDto,
  //       'ServicesController - handleServiceDeletedEvent',
  //     );
  //   }

  @MessagePattern('services')
  consumer(@Payload() message: KafkaMessage) {
    Logger.debug(message);
  }
}
