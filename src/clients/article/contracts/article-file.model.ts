import { IBaasicModel } from '../../../infrastructure/common/contracts';
import { IArticleFileEntry } from './';

export interface IArticleFile extends IBaasicModel {
    articleFileEntry?: IArticleFileEntry,
    articleFileEntryId?: string,
    articleId?: string
}