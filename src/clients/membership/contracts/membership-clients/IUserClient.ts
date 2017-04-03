import { IBaasicQueryModel, IGetRequestOptions, IHttpResponse, IOptions } from '../../../../infrastructure/common/contracts';
import { IAppUser, INewPassword, INewUser, IUserSocialLoginClient } from '../';

export interface IUserClient {
    exists(username: string, options?: any): PromiseLike<IHttpResponse<any>>;
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IAppUser>>>;
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IAppUser>>;
    create(data: INewUser): PromiseLike<IHttpResponse<IAppUser>>;
    update(data: IAppUser): PromiseLike<IHttpResponse<any>>;
    remove(data: IAppUser): PromiseLike<IHttpResponse<any>>;
    unlock(data: IAppUser): PromiseLike<IHttpResponse<any>>;
    lock(data: IAppUser): PromiseLike<IHttpResponse<any>>;
    approve(data: IAppUser): PromiseLike<IHttpResponse<any>>;
    disapprove(data: IAppUser): PromiseLike<IHttpResponse<any>>;
    changePassword(username: string, data: INewPassword): PromiseLike<IHttpResponse<any>>;
    socialLogin: IUserSocialLoginClient;
}