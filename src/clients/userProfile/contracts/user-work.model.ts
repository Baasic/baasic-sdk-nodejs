import { IBaasicModel } from '../../../infrastructure/common/contracts';
import { IUserProfile, IUserProfileWork } from './';

export interface IUserWork extends IUserProfileWork, IBaasicModel {
    userProfile?: IUserProfile
}