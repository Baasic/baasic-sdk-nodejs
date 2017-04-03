import { IBaasicModel } from '../../../infrastructure/common/contracts';

export interface IOwner extends IBaasicModel {
    displayName?: string,
    id: string
}