import { IBaasicModel } from '../../../infrastructure/common/contracts';

export interface IMembership extends IBaasicModel {
    userName?: string,
    id?: string
}