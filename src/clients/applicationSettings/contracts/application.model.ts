import { IApplicationRole, ISNProvider } from './';
import { IBaasicModel } from '../../../infrastructure/common/contracts';

export interface IApplication extends IBaasicModel {
    allowAnyOrigin?: boolean,
    allowUserRegistration?: boolean,
    applicationTitle: string,
    captchaPrivateKey?: string,
    identifier?: string,
    isActive?: boolean,
    mailFromAddress?: string,
    origins?: string[],
    role?: IApplicationRole[],
    snProvider?: ISNProvider[]
}