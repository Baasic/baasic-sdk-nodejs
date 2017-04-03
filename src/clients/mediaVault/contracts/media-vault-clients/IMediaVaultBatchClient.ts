import { IHttpResponse } from '../../../../infrastructure/common/contracts';
import { IMediaEntry } from '../';

export interface IMediaVaultBatchClient {
    update(data: IMediaEntry[]): PromiseLike<IHttpResponse<void>>;
    remove(data: any[]): PromiseLike<IHttpResponse<void>>;
}