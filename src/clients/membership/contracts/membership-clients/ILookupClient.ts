import { IGetRequestOptions, IHttpResponse } from '../../../../infrastructure/common/contracts';
import { ILookup } from '../';

export interface ILookupClient {
    get(options?: IGetRequestOptions): PromiseLike<IHttpResponse<ILookup>>;
}