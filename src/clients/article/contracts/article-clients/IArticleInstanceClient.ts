import { IACLClient, IBaasicQueryModel, IGetRequestOptions, IHttpResponse, IOptions } from '../../../../infrastructure/common/contracts';
import {
    IArticle,
    IArticleInstanceCommentsClient,
    IArticleInstanceFilesClient,
    IArticleInstanceRatingsClient,
    IArticleInstanceSubscriptionsClient,
    IArticleInstanceTagsClient,
    IArticleOptions
} from '../';

export interface IArticleInstanceClient {
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IArticle>>>;
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IArticle>>;
    create(data: IArticle): PromiseLike<IHttpResponse<IArticle>>;
    update(data: IArticle): PromiseLike<IHttpResponse<void>>;
    saveDraft(data: IArticle): PromiseLike<IHttpResponse<any>>;
    remove(data: IArticle): PromiseLike<IHttpResponse<void>>;
    archive(data: IArticle, options: IArticleOptions): PromiseLike<IHttpResponse<void>>;
    restore(data: IArticle): PromiseLike<IHttpResponse<void>>;
    unpublish(data: IArticle): PromiseLike<IHttpResponse<void>>;
    publish(data: IArticle, articleOptions: IArticleOptions): PromiseLike<IHttpResponse<void>>;
    purge(options: Object): PromiseLike<IHttpResponse<void>>;
    comments: IArticleInstanceCommentsClient,
    files: IArticleInstanceFilesClient,
    ratings: IArticleInstanceRatingsClient,
    subscriptions: IArticleInstanceSubscriptionsClient,
    tags: IArticleInstanceTagsClient,
    acl: IACLClient
}