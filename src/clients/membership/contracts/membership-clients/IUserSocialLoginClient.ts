import { IBaasicQueryModel, IHttpResponse } from '../../../../infrastructure/common/contracts';
import { IUserSocialLogin } from '../';

export interface IUserSocialLoginClient {
    get(username: string): PromiseLike<IHttpResponse<IBaasicQueryModel<IUserSocialLogin>>>;
    remove(username: string, provider: any): PromiseLike<IHttpResponse<void>>;
}