import { IHttpResponse } from '../../../../infrastructure/common/contracts';

export interface IUserProfileAvatarStreamsClient {
    get(data: any): PromiseLike<IHttpResponse<any>>;
    getBlob(data: any): PromiseLike<IHttpResponse<any>>;
    create(id: string, data: any, stream: any): PromiseLike<IHttpResponse<any>>;
    update(data: any, stream: any): PromiseLike<IHttpResponse<any>>;
}