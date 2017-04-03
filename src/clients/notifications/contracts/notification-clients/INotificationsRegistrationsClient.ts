import { INotificationsRegistrationsAnonymousClient, INotificationsRegistrationsUsersClient } from '../';

export interface INotificationsRegistrationsClient {
    anonymous: INotificationsRegistrationsAnonymousClient;
    users: INotificationsRegistrationsUsersClient;
}