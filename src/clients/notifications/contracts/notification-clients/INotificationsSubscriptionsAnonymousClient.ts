import { IBaasicQueryModel, IGetRequestOptions, IHttpResponse, IOptions } from '../../../../infrastructure/common/contracts';
import { IAnonymousSubscription, INotificationsSubscriptionsAnonymousBatchClient } from '../';

export interface INotificationsSubscriptionsAnonymousClient {
    create(data: IAnonymousSubscription): PromiseLike<IHttpResponse<IAnonymousSubscription>>;
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IAnonymousSubscription>>>;
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IAnonymousSubscription>>;
    remove(data: IAnonymousSubscription): PromiseLike<IHttpResponse<void>>;
    update(data: IAnonymousSubscription): PromiseLike<IHttpResponse<void>>;
    batch: INotificationsSubscriptionsAnonymousBatchClient;
}