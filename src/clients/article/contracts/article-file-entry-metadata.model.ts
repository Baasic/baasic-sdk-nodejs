import { IUserInfo } from '../../../infrastructure/common/contracts';

export interface IArticleFileEntryMetadata {
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