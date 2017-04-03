import { IBaasicQueryModel, IGetRequestOptions, IHttpResponse, IOptions } from '../../../../infrastructure/common/contracts';
import { IOrganization, IOrganizationBatchClient } from '../';

export interface IOrganizationClient {
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IOrganization>>>;
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IOrganization>>;
    create(data: IOrganization): PromiseLike<IHttpResponse<IOrganization>>;
    update(data: IOrganization): PromiseLike<IHttpResponse<void>>;
    remove(data: IOrganization): PromiseLike<IHttpResponse<void>>;
    batch: IOrganizationBatchClient;
}