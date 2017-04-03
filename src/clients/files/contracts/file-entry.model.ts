import { IBaasicModel } from '../../../infrastructure/common/contracts';
import { IFileEntryMetadata, IPolicy } from './';

export interface IFileEntry extends IBaasicModel, IFileEntryMetadata {
    policies?: IPolicy[]
}