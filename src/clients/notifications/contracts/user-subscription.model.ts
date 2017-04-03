import { IBaasicModel } from '../../../infrastructure/common/contracts';
import { IUser } from './';

export interface IUserSubscription extends IBaasicModel {
    channel: string,
    user?: IUser,
    userId: string
}