import { IBaasicModel } from '../../../infrastructure/common/contracts';
import { IArticleComment, IArticleFile, IAuthor, IArticleTag, IRating } from './';

export interface IArticle extends IBaasicModel {
    allowComments?: boolean,
    archiveDate?: string,
    author?: IAuthor,
    authorId?: string,
    comments?: IArticleComment,
    content?: string,
    fileEntries?: IArticleFile,
    publishDate?: string,
    ratings?: IRating[],
    slug?: string,
    status?: number,
    tags: IArticleTag[],
    title?: string
}