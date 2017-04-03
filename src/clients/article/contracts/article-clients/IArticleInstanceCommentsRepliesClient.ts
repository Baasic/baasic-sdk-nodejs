import { IBaasicQueryModel, IGetRequestOptions, IHttpResponse, IOptions } from '../../../../infrastructure/common/contracts';
import { IArticle, IArticleCommentReply, INotificationConfiguration } from '../';

export interface IArticleInstanceCommentsRepliesClient {
    approve(data: IArticleCommentReply, options: IOptions): PromiseLike<IHttpResponse<void>>;
    unapprove(data: IArticleCommentReply): PromiseLike<IHttpResponse<void>>;
    create(articleId: string, data: IArticleCommentReply): PromiseLike<IHttpResponse<IArticleCommentReply>>;
    find(articleId: string, commentId: string, options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IArticleCommentReply>>>;
    flag(data: IArticleCommentReply): PromiseLike<IHttpResponse<void>>;
    unflag(data: IArticleCommentReply): PromiseLike<IHttpResponse<void>>;
    get(articleId: string, commentId: string, replyId: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IArticleCommentReply>>;
    remove(data: IArticleCommentReply): PromiseLike<IHttpResponse<void>>;
    removeAll(data: IArticle): PromiseLike<IHttpResponse<void>>;
    report(data: IArticleCommentReply, options?: INotificationConfiguration): PromiseLike<IHttpResponse<void>>;
    unreport(data: IArticleCommentReply): PromiseLike<IHttpResponse<void>>;
    spam(data: IArticleCommentReply): PromiseLike<IHttpResponse<void>>;
    unspam(data: IArticleCommentReply): PromiseLike<IHttpResponse<void>>;
}