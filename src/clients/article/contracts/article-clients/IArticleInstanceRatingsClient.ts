import { IBaasicQueryModel, IGetRequestOptions, IHttpResponse, IOptions } from '../../../../infrastructure/common/contracts';
import { IArticle, IRating } from '../';

export interface IArticleInstanceRatingsClient {
    create(data: IRating): PromiseLike<IHttpResponse<IRating>>;
    find(articleId: string, options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IRating>>>;
    findByUser(articleId: string, username: string, options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IRating>>>;
    get(articleId: string, id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IRating>>;
    update(data: IRating): PromiseLike<IHttpResponse<void>>;
    remove(data: IRating): PromiseLike<IHttpResponse<void>>;
    removeAll(data: IArticle): PromiseLike<IHttpResponse<void>>;
}