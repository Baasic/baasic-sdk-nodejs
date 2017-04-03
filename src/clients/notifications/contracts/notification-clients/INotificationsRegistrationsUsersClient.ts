import { IBaasicQueryModel, IGetRequestOptions, IHttpResponse, IOptions } from '../../../../infrastructure/common/contracts';
import { IUserRegistration, INotificationsRegistrationsUsersBatchClient } from '../';

export interface INotificationsRegistrationsUsersClient {
    create(data: IUserRegistration): PromiseLike<IHttpResponse<IUserRegistration>>;
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IUserRegistration>>>;
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IUserRegistration>>;
    remove(data: IUserRegistration): PromiseLike<IHttpResponse<void>>;
    update(data: IUserRegistration): PromiseLike<IHttpResponse<void>>;
    batch: INotificationsRegistrationsUsersBatchClient;
}