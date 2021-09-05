import { Module } from '@nestjs/common';
import { SubscribersService } from './subscriber.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import Subscriber from './subscribe.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Subscriber])],
  exports: [],
  controllers: [SubscribersService],
})
export class SubscribersModule {}
