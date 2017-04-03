import { IHttpResponse } from '../../../../infrastructure/common/contracts';
import { IFileEntry } from '../';

export interface IFilesBatchClient {
    update(data: IFileEntry[]): PromiseLike<IHttpResponse<void>>;
    link(data: IFileEntry[]): PromiseLike<IHttpResponse<any>>;
    unlink(data: Object[]): PromiseLike<IHttpResponse<void>>;
}