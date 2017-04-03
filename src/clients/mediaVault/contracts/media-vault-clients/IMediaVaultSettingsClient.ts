import { IHttpResponse } from '../../../../infrastructure/common/contracts';
import { IMediaVaultSettings } from '../';

export interface IMediaVaultSettingsClient {
    get(): PromiseLike<IHttpResponse<IMediaVaultSettings>>;
    update(data: IMediaVaultSettings): PromiseLike<IHttpResponse<void>>;
}