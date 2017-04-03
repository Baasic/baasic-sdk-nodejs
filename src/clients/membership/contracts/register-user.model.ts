import { IBaasicModel } from '../../../infrastructure/common/contracts';
import { IUserIdentity } from './';

export interface IRegisterUser extends IBaasicModel, IUserIdentity {
    activationUrl?: string,
    challengeIdentifier?: string,
    challengeResponse?: string,
    confirmPassword: string,
    password: string
}