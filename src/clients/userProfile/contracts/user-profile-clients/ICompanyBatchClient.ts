import { IHttpResponse } from '../../../../infrastructure/common/contracts';
import { ICompany } from '../';

export interface ICompanyBatchClient {
    create(data: ICompany[]): PromiseLike<IHttpResponse<any>>;
    update(data: ICompany[]): PromiseLike<IHttpResponse<any>>;
    remove(ids: string[]): PromiseLike<IHttpResponse<any>>;
}