import { IUserInfo } from '../../../infrastructure/common/contracts';
import { IDerivedEntry } from './';


export interface IFileEntryMetadata {
    derivedEntries?: IDerivedEntry[],
    description?: string,
    fileExtension?: string,
    fileName?: string,
    fileSize?: string,
    height?: string,
    metaData?: string,
    ownerUser?: IUserInfo,
    ownerUserID?: string,
    path: string,
    width?: number
}