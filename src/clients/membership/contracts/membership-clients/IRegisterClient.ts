import { IHttpResponse } from '../../../../infrastructure/common/contracts';
import { IAppUser, IRegisterUser } from '../';

export interface IRegisterClient {
    create(data: IRegisterUser): PromiseLike<IHttpResponse<IAppUser>>;
    activate(data: string): PromiseLike<any>;
}