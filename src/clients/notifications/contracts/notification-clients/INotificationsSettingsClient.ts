import { IHttpResponse } from '../../../../infrastructure/common/contracts';

export interface INotificationsSettingsClient {
    get(provider: string): PromiseLike<IHttpResponse<any>>;
    update(data: Object): PromiseLike<IHttpResponse<void>>;
}