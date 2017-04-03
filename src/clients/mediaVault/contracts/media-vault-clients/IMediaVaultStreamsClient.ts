import { IHttpResponse } from '../../../../infrastructure/common/contracts';

export interface IMediaVaultStreamsClient {
    get(data: any): PromiseLike<IHttpResponse<any>>;
    getBlob(data: any): PromiseLike<IHttpResponse<any>>;
    create(data: any, stream: any): PromiseLike<IHttpResponse<any>>;
    update(data: any, stream: any): PromiseLike<IHttpResponse<any>>;
}