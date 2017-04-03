import { IBaasicQueryModel, IGetRequestOptions, IHttpResponse, IOptions } from '../../../../infrastructure/common/contracts';
import { IArticleCommentReply, ICommentStatus, INotificationConfiguration } from '../';

export interface IArticleCommentRepliesClient {
    statuses: ICommentStatus;
    approve(data: IArticleCommentReply, options: INotificationConfiguration): PromiseLike<IHttpResponse<void>>;
    unapprove(data: IArticleCommentReply): PromiseLike<IHttpResponse<void>>;
    create(data: IArticleCommentReply): PromiseLike<IHttpResponse<IArticleCommentReply>>;
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IArticleCommentReply>>>;
    flag(data: IArticleCommentReply): PromiseLike<IHttpResponse<void>>;
    unflag(data: IArticleCommentReply): PromiseLike<IHttpResponse<void>>;
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IArticleCommentReply>>;
    remove(data: IArticleCommentReply): PromiseLike<IHttpResponse<void>>;
    report(data: IArticleCommentReply, options?: INotificationConfiguration): PromiseLike<IHttpResponse<void>>;
    unreport(data: IArticleCommentReply): PromiseLike<IHttpResponse<void>>;
    spam(data: IArticleCommentReply): PromiseLike<IHttpResponse<void>>;
    unspam(data: IArticleCommentReply): PromiseLike<IHttpResponse<void>>;
    update(data: IArticleCommentReply): PromiseLike<IHttpResponse<void>>;
}