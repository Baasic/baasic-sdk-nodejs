import { IBaasicModel } from '../../../infrastructure/common/contracts';
import { IAnonymousRegistration } from './';

export interface IAnonymousSubscription extends IBaasicModel {
    channel: string,
    registration?: IAnonymousRegistration,
    registrationId: string
}