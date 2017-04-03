import { IBaasicQueryModel, IGetRequestOptions, IHttpResponse, IOptions } from '../../../../infrastructure/common/contracts';
import { IResourceSchema } from '../';

export interface IDynamicResourceSchemaClient {
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IResourceSchema>>>;
    get(name: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IResourceSchema>>;
    create(data: IResourceSchema): PromiseLike<IHttpResponse<IResourceSchema>>;
    update(data: IResourceSchema): PromiseLike<IHttpResponse<void>>;
    remove(data: IResourceSchema): PromiseLike<IHttpResponse<void>>;
    generate(data: any): PromiseLike<IHttpResponse<any>>;
}