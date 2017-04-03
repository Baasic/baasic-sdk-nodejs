import { IBaasicQueryModel, IGetRequestOptions, IHttpResponse, IOptions } from '../../../../infrastructure/common/contracts';
import { IRole } from '../';

export interface IRoleClient {
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IRole>>>;
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IRole>>;
    create(data: IRole): PromiseLike<IHttpResponse<IRole>>;
    update(data: IRole): PromiseLike<IHttpResponse<IRole>>;
    remove(data: IRole): PromiseLike<IHttpResponse<any>>;
}