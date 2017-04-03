import { IHttpResponse } from '../../../../infrastructure/common/contracts';
import { IArticleFile } from '../';

export interface IArticleFilesBatchClient {
    unlink(data: Object[]): PromiseLike<IHttpResponse<void>>;
    update(data: IArticleFile[]): PromiseLike<IHttpResponse<void>>;
    link(data: IArticleFile[]): PromiseLike<IHttpResponse<any>>;
}