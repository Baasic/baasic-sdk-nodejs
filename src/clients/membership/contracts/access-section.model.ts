import { IBaasicModel } from '../../../infrastructure/common/contracts';

export interface IAccessSection extends IBaasicModel {
    abrv?: string,
    description?: string,
    name?: string
}