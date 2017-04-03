import { IBaasicQueryModel, IGetRequestOptions, IHttpResponse, IOptions } from '../../../../infrastructure/common/contracts';
import { IUserWork } from '../';

export interface IUserProfileWorkClient {
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IUserWork>>>;
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IUserWork>>;
    create(data: IUserWork): PromiseLike<IHttpResponse<IUserWork>>;
    update(data: IUserWork): PromiseLike<IHttpResponse<void>>;
    remove(data: IUserWork): PromiseLike<IHttpResponse<void>>;
}