import { IBaasicModel } from '../../../infrastructure/common/contracts';

export interface IOrganization extends IBaasicModel {
    description?: string,
    name: string,
    slug?: string
}