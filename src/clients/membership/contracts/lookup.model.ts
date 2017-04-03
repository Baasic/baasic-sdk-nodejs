import { IBaasicModel } from '../../../infrastructure/common/contracts';
import { IAccessAction, IAccessSection, IRole, ISnProvider } from './';

export interface ILookup extends IBaasicModel {
    accessAction?: IAccessAction[],
    accessSection?: IAccessSection[],
    role?: IRole[],
    snProvider?: ISnProvider[]
}