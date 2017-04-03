import { IHttpResponse } from '../../../../infrastructure/common/contracts';
import { IArticleSubscription } from '../';

export interface IArticleInstanceSubscriptionsCommentReportedClient {
    subscribe(data: IArticleSubscription): PromiseLike<IHttpResponse<any>>;
    isSubscribed(data: IArticleSubscription): PromiseLike<IHttpResponse<any>>;
    unSubscribe(data: IArticleSubscription): PromiseLike<IHttpResponse<void>>;
}