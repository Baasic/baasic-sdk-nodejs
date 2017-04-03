import { IBaasicModel } from '../../../infrastructure/common/contracts';
import { IArticleFileEntryMetadata } from './';

export interface IArticleFileEntry extends IBaasicModel, IArticleFileEntryMetadata {
    articleId?: string,
    parentId?: string
}