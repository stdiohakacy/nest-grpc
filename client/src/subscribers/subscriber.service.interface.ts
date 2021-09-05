import { ICreateSubscriberDTO } from './dtos/create-subscriber.dto';
import Subscriber from './subscribe.entity';

export interface ISubscribersService {
  addSubscriber(subscriber: ICreateSubscriberDTO): Promise<Subscriber>;
  getAllSubscribers(params: any): Promise<{ data: Subscriber[] }>;
}
