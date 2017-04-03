import { IBaasicModel } from '../../../infrastructure/common/contracts';
import { IUserAccess, IUserIdentity, IRole } from './';

export interface IAppUser extends IBaasicModel, IUserAccess, IUserIdentity {
    creationDate?: string,
    dashboardSettings?: any,
    name?: string
}