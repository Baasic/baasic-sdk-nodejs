import { IHttpResponse } from '../../../../infrastructure/common/contracts';
import { INotification, INotificationsPublishBatchClient } from '../';

export interface INotificationsPublishClient {
    create(data: INotification): PromiseLike<IHttpResponse<INotification>>;
    batch: INotificationsPublishBatchClient;
}