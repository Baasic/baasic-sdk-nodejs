import { IBaasicModel } from '../../../infrastructure/common/contracts';
import { IArticle, IArticleCommentMetadata } from './';

export interface IArticleComment extends IBaasicModel, IArticleCommentMetadata {
    article?: IArticle,
    articleId: string,
    comment?: string
}