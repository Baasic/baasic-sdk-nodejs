import { IBaasicQueryModel, IGetRequestOptions, IHttpResponse, IOptions } from '../../../../infrastructure/common/contracts';
import { IArticle, IArticleComment, IArticleInstanceCommentsRepliesClient, INotificationConfiguration } from '../';

export interface IArticleInstanceCommentsClient {
    approve(data: IArticleComment, options: INotificationConfiguration): PromiseLike<IHttpResponse<void>>;
    unapprove(data: IArticleComment): PromiseLike<IHttpResponse<void>>;
    create(data: IArticleComment): PromiseLike<IHttpResponse<IArticleComment>>;
    find(articleId: string, options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IArticleComment>>>;
    flag(data: IArticleComment): PromiseLike<IHttpResponse<void>>;
    unflag(data: IArticleComment): PromiseLike<IHttpResponse<void>>;
    get(articleId: string, commentId: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IArticleComment>>;
    remove(data: IArticleComment): PromiseLike<IHttpResponse<void>>;
    removeAll(data: IArticle): PromiseLike<IHttpResponse<void>>;
    report(data: IArticleComment, options: INotificationConfiguration): PromiseLike<IHttpResponse<void>>;
    unreport(data: IArticleComment): PromiseLike<IHttpResponse<void>>;
    update(data: IArticleComment): PromiseLike<IHttpResponse<void>>;
    spam(data: IArticleComment): PromiseLike<IHttpResponse<void>>;
    unspam(data: IArticleComment): PromiseLike<IHttpResponse<void>>;
    replies: IArticleInstanceCommentsRepliesClient;
}