import { IBaasicQueryModel, IGetRequestOptions, IHttpResponse, IOptions } from '../../../../infrastructure/common/contracts';
import { IPreprocessingProviderSettings } from '../';

export interface IMediaVaultProcessingProviderSettingsClient {
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IPreprocessingProviderSettings>>>;
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IPreprocessingProviderSettings>>;
    update(data: IPreprocessingProviderSettings): PromiseLike<IHttpResponse<void>>;
}