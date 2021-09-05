import {
  Body,
  Controller,
  Get,
  Post,
  UseInterceptors,
  ClassSerializerInterceptor,
  Inject,
  OnModuleInit,
} from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { ICreateSubscriberDTO } from './dtos/create-subscriber.dto';
import { ISubscribersService } from './subscriber.service.interface';

@Controller('subscribers')
@UseInterceptors(ClassSerializerInterceptor)
export default class SubscribersController implements OnModuleInit {
  private subscribersService: ISubscribersService;

  constructor(@Inject('SUBSCRIBERS_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.subscribersService =
      this.client.getService<ISubscribersService>('SubscribersService');
  }

  @Get()
  async getSubscribers() {
    return this.subscribersService.getAllSubscribers({});
  }

  @Post()
  async createPost(@Body() subscriber: ICreateSubscriberDTO) {
    return await this.subscribersService.addSubscriber(subscriber);
  }
}
