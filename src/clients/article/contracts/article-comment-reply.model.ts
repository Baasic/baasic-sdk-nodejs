import { IBaasicModel } from '../../../infrastructure/common/contracts';
import { IArticleComment, IArticleCommentMetadata } from './';

export interface IArticleCommentReply extends IBaasicModel, IArticleCommentMetadata {
    comment?: IArticleComment,
    commentId?: string,
    reply: string
}