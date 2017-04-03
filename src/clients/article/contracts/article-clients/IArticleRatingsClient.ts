import { IBaasicQueryModel, IGetRequestOptions, IHttpResponse, IOptions } from '../../../../infrastructure/common/contracts';
import { IRating } from '../';

export interface IArticleRatingsClient {
    create(data: IRating): PromiseLike<IHttpResponse<IRating>>;
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IRating>>>;
    findByUser(username: string, options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IRating>>>;
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IRating>>;
    update(data: IRating): PromiseLike<IHttpResponse<void>>;
    remove(data: IRating): PromiseLike<IHttpResponse<void>>;
}