import { IHttpResponse } from '../../../../infrastructure/common/contracts';
import { IAnonymousRegistration } from '../';

export interface INotificationsRegistrationsAnonymousBatchClient {
    create(data: IAnonymousRegistration[]): PromiseLike<IHttpResponse<IAnonymousRegistration[]>>;
    remove(ids: string[]): PromiseLike<IHttpResponse<void>>;
    update(data: IAnonymousRegistration[]): PromiseLike<IHttpResponse<void>>;
}