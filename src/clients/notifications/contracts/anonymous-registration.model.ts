import { IBaasicModel } from '../../../infrastructure/common/contracts';

export interface IAnonymousRegistration extends IBaasicModel {
    expirationDate?: string,
    provider: string,
    providerData: Object
}