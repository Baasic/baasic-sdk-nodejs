import { IGetRequestOptions, IHttpResponse } from '../../../../infrastructure/common/contracts';
import { IMeteringSettings } from '../';

export interface IMeteringSettingsClient {
    get(options?: IGetRequestOptions): PromiseLike<IHttpResponse<IMeteringSettings>>;
    update(data: IMeteringSettings): PromiseLike<IHttpResponse<void>>;
}