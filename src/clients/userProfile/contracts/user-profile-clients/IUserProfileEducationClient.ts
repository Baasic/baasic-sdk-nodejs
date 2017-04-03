import { IBaasicQueryModel, IGetRequestOptions, IHttpResponse, IOptions } from '../../../../infrastructure/common/contracts';
import { IUserEducation } from '../';

export interface IUserProfileEducationClient {
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IUserEducation>>>;
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IUserEducation>>;
    create(data: IUserEducation): PromiseLike<IHttpResponse<IUserEducation>>;
    update(data: IUserEducation): PromiseLike<IHttpResponse<void>>;
    remove(data: IUserEducation): PromiseLike<IHttpResponse<void>>;
}