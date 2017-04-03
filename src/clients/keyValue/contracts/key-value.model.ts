import { IBaasicModel } from '../../../infrastructure/common/contracts';

export interface IKeyValue extends IBaasicModel {
    key: string,
    value: string
}