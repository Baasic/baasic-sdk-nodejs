import { IBaasicQueryModel, IGetRequestOptions, IHttpResponse, IOptions } from '../../../../infrastructure/common/contracts';
import { IArticleTag, IArticleTagsSubscriptionsClient } from '../';

export interface IArticleTagsClient {
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IArticleTag>>>;
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IArticleTag>>;
    update(data: IArticleTag): PromiseLike<IHttpResponse<void>>;
    remove(data: IArticleTag): PromiseLike<IHttpResponse<void>>;
    subscriptions: IArticleTagsSubscriptionsClient;
}