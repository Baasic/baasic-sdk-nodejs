import { IHttpResponse } from '../../../../infrastructure/common/contracts';

export interface IInvoiceStreamsClient {
    get(data: any): PromiseLike<IHttpResponse<any>>;
    getBlob(data: any): PromiseLike<IHttpResponse<any>>;
}