import { IBaasicModel } from '../../../infrastructure/common/contracts';
import { ISkill, IUserProfile, IUserProfileSkill } from './';

export interface IUserSkill extends IBaasicModel, IUserProfileSkill {
    userProfile?: IUserProfile
}