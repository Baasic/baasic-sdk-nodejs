import { IHttpResponse } from '../../../../infrastructure/common/contracts';
import { IArticleFile } from '../';

export interface IArticleFilesStreamsClient {
    get(data: any): PromiseLike<IHttpResponse<any>>;
    getBlob(data: any): PromiseLike<IHttpResponse<any>>;
    update(data: any, stream: any): PromiseLike<IHttpResponse<any>>;
    create(data: IArticleFile, stream: any): PromiseLike<IHttpResponse<any>>;
}