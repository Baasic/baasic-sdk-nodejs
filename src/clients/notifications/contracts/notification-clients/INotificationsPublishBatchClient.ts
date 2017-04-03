import { IHttpResponse } from '../../../../infrastructure/common/contracts';
import { INotification } from '../';

export interface INotificationsPublishBatchClient {
    create(data: INotification[]): PromiseLike<IHttpResponse<INotification[]>>;
}