import { IBaasicModel } from '../../../infrastructure/common/contracts';

export interface IUser extends IBaasicModel {
    username?: string
}