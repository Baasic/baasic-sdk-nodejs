import { IHttpResponse } from '../../../../infrastructure/common/contracts';
import { ISocialLogin } from '../';

export interface ILoginSocialClient {
    get(provider: string, returnUrl: string): PromiseLike<IHttpResponse<any>>;
    post(provider: string, data: ISocialLogin, options?: any): PromiseLike<void>;
    parseResponse(provider: string, returnUrl: string): any;
}