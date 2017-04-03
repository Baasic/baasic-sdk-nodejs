import { IHttpResponse } from '../../../../infrastructure/common/contracts';
import { IArticleSubscription } from '../';

export interface IArticleInstanceSubscriptionsCommentRequiresModerationClient {
    subscribe(data: IArticleSubscription): PromiseLike<IHttpResponse<any>>;
    isSubscribed(data: IArticleSubscription): PromiseLike<IHttpResponse<any>>;
    unSubscribed(data: IArticleSubscription): PromiseLike<IHttpResponse<void>>;
}