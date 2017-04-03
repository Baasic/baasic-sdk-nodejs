import { IHttpResponse } from '../../../../infrastructure/common/contracts';
import { IAnonymousSubscription } from '../';

export interface INotificationsSubscriptionsAnonymousBatchClient {
    create(data: IAnonymousSubscription[]): PromiseLike<IHttpResponse<IAnonymousSubscription[]>>;
    remove(ids: string[]): PromiseLike<IHttpResponse<void>>;
    update(data: IAnonymousSubscription[]): PromiseLike<IHttpResponse<void>>;
}