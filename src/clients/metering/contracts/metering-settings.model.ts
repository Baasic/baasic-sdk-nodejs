import { IBaasicModel } from '../../../infrastructure/common/contracts';

export interface IMeteringSettings extends IBaasicModel {
    dataRetentionPerion: number
}