import { IBaasicQueryModel, IGetRequestOptions, IHttpResponse, IOptions } from '../../../../infrastructure/common/contracts';
import { IArticleFile } from '../';

export interface IArticleInstanceFilesBatchClient {
    unlink(articleId: string, data: IArticleFile[]): PromiseLike<IHttpResponse<void>>;
    update(articleId: string, data: IArticleFile[]): PromiseLike<IHttpResponse<void>>;
    link(articleId: string, data: IArticleFile[]): PromiseLike<IHttpResponse<any>>;
}