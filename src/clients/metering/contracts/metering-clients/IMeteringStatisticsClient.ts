import { IBaasicQueryModel, IHttpResponse, IOptions } from '../../../../infrastructure/common/contracts';
import { IMeteringData } from '../';

export interface IMeteringStatisticsClient {
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IMeteringData>>>;
}