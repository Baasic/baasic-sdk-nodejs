import { IBaasicQueryModel, IGetRequestOptions, IHttpResponse, IOptions } from '../../../../infrastructure/common/contracts';
import { IArticleFile, IArticleInstanceFilesBatchClient, IArticleInstanceFilesStreamsClient } from '../';

export interface IArticleInstanceFilesClient {
    find(articleId: string, options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IArticleFile>>>;
    get(articleId: string, id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IArticleFile>>;
    unlink(articleId: string, data: any, options: Object): PromiseLike<IHttpResponse<void>>;
    unlinkByArticle(articleId: string, data: any, options: Object): PromiseLike<IHttpResponse<void>>;
    update(articleId: string, data: IArticleFile): PromiseLike<IHttpResponse<void>>;
    link(articleId: string, data: IArticleFile): PromiseLike<IHttpResponse<IArticleFile>>;
    batch: IArticleInstanceFilesBatchClient;
    streams: IArticleInstanceFilesStreamsClient;
}