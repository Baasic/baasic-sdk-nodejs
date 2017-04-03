import { IBaasicModel } from '../../../infrastructure/common/contracts';
import { IOwner } from './';

export interface IResourceSchema extends IBaasicModel {
    description?: string,
    enforceSchemaValidation?: boolean,
    name: string,
    owner?: IOwner,
    ownerId?: string,
    schema: any
}