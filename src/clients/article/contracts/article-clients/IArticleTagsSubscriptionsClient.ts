import { IHttpResponse } from '../../../../infrastructure/common/contracts';
import { IArticleSubscription, IArticleTag } from '../';

export interface IArticleTagsSubscriptionsClient {
    subscribe(tag: IArticleTag, data: any): PromiseLike<IHttpResponse<IArticleSubscription>>;
    isSubscribed(tag: IArticleTag, data: any): PromiseLike<IHttpResponse<IArticleSubscription>>;
    unSubscribe(tag: IArticleTag, data: any): PromiseLike<IHttpResponse<void>>;
}