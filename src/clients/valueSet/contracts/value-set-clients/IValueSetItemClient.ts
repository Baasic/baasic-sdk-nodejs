import { IBaasicQueryModel, IGetRequestOptions, IHttpResponse, IOptions } from '../../../../infrastructure/common/contracts';
import { IValueSetItem } from '../';

export interface IValueSetItemClient {
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IValueSetItem>>>;
    get(setName: string, id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IValueSetItem>>;
    create(data: IValueSetItem): PromiseLike<IHttpResponse<IValueSetItem>>;
    update(data: IValueSetItem): PromiseLike<IHttpResponse<IValueSetItem>>
    remove(data: IValueSetItem): PromiseLike<IHttpResponse<void>>
}