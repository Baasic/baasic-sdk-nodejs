import { IBaasicModel } from '../../../infrastructure/common/contracts';
import { IFileEntry } from './';

export interface IProfileAvatar extends IBaasicModel {
    avatarFileEntry?: IFileEntry,
    avatarFileEntryId?: string
}