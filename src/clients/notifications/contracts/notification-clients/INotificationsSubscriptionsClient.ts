import { INotificationsSubscriptionsAnonymousClient, INotificationsSubscriptionsUsersClient } from '../';

export interface INotificationsSubscriptionsClient {
    anonymous: INotificationsSubscriptionsAnonymousClient;
    users: INotificationsSubscriptionsUsersClient;
}