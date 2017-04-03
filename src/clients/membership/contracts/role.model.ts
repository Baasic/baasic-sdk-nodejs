import { IBaasicModel } from '../../../infrastructure/common/contracts';

export interface IRole extends IBaasicModel {
    description?: string,
    name: string
}