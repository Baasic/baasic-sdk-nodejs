import { IBaasicQueryModel, IGetRequestOptions, IHttpResponse, IOptions } from '../../../../infrastructure/common/contracts';
import { IArticleComment, IArticleCommentRepliesClient, ICommentStatus, INotificationConfiguration } from '../';

export interface IArticleCommentClient {
    statuses: ICommentStatus,
    approve(data: IArticleComment, options: INotificationConfiguration): PromiseLike<IHttpResponse<void>>;
    unapprove(data: IArticleComment): PromiseLike<IHttpResponse<void>>;
    create(data: IArticleComment): PromiseLike<IHttpResponse<IArticleComment>>;
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IArticleComment>>>;
    flag(data: IArticleComment): PromiseLike<IHttpResponse<void>>;
    unflag(data: IArticleComment): PromiseLike<IHttpResponse<void>>;
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IArticleComment>>;
    remove(data: IArticleComment): PromiseLike<IHttpResponse<void>>;
    report(data: IArticleComment, options: INotificationConfiguration): PromiseLike<IHttpResponse<void>>;
    unreport(data: IArticleComment): PromiseLike<IHttpResponse<void>>;
    update(data: IArticleComment): PromiseLike<IHttpResponse<void>>;
    commentReplies: IArticleCommentRepliesClient;
}