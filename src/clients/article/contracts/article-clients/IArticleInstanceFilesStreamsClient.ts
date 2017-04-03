import { IBaasicQueryModel, IGetRequestOptions, IHttpResponse, IOptions } from '../../../../infrastructure/common/contracts';
import { IArticleFile } from '../';

export interface IArticleInstanceFilesStreamsClient {
    get(articleId: string, data: any): PromiseLike<IHttpResponse<any>>;
    getBlob(articleId: string, data: any): PromiseLike<IHttpResponse<any>>;
    update(articleId: string, data: any, stream: any): PromiseLike<IHttpResponse<any>>;
    create(articleId: string, data: IArticleFile, stream: any): PromiseLike<IHttpResponse<any>>;
}