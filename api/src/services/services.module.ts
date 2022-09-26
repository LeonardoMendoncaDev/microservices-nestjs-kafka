import { Module } from '@nestjs/common';
import { ClientKafka, ClientsModule, Transport } from '@nestjs/microservices';
import { ServicesController } from './services.controller';
import { ServicesService } from './services.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'CLIENT_KAFKA',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'services',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'services',
          },
        },
      },
    ]),
  ],
  controllers: [ServicesController],
  providers: [
    ServicesService,
    {
      provide: 'KAFKA_PRODUCER',
      useFactory: async (kafkaClient: ClientKafka) => {
        return kafkaClient.connect();
      },
      inject: ['CLIENT_KAFKA'],
    },
  ],
})
export class ServicesModule {}