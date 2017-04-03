import { IBaasicModel } from '../../../infrastructure/common/contracts';

export interface IPreprocessingProviderSettings extends IBaasicModel {
    abrv: string,
    name: string
}