import { IBaasicModel } from '../../../infrastructure/common/contracts';

export interface IMediaVaultSettings extends IBaasicModel {
    derivedItemCount: number,
    uploadAllowedExtensions: string
}