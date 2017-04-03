import { IHttpResponse } from '../../../../infrastructure/common/contracts';
import { IMeteringCategory } from '../';

export interface IMeteringCategoryBatchClient {
    create(data: IMeteringCategory[]): PromiseLike<IHttpResponse<IMeteringCategory[]>>;
    update(data: IMeteringCategory[]): PromiseLike<IHttpResponse<void>>;
    delete(ids: string[]): PromiseLike<IHttpResponse<void>>;
}