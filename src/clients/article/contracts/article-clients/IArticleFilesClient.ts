import { IBaasicQueryModel, IGetRequestOptions, IHttpResponse, IOptions } from '../../../../infrastructure/common/contracts';
import { IArticleFile, IArticleFilesBatchClient, IArticleFilesStreamsClient } from '../';

export interface IArticleFilesClient {
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IArticleFile>>>;
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IArticleFile>>;
    unlink(data: IArticleFile, options: Object): PromiseLike<IHttpResponse<void>>;
    update(data: IArticleFile): PromiseLike<IHttpResponse<void>>;
    link(data: IArticleFile): PromiseLike<IHttpResponse<IArticleFile>>;
    batch: IArticleFilesBatchClient;
    streams: IArticleFilesStreamsClient;
}