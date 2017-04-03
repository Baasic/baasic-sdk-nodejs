import { IACLClient, IBaasicQueryModel, IGetRequestOptions, IHttpResponse, IOptions } from '../../../../infrastructure/common/contracts';
import {
    IUserProfile,
    IUserProfileAvatarClient,
    IUserProfileEducationClient,
    IUserProfileSkillClient,
    IUserProfileWorkClient
} from '../';

export interface IUserProfileClient {
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IUserProfile>>>;
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IUserProfile>>;
    create(data: IUserProfile): PromiseLike<IHttpResponse<IUserProfile>>;
    update(data: IUserProfile): PromiseLike<IHttpResponse<void>>;
    remove(data: IUserProfile): PromiseLike<IHttpResponse<void>>;
    acl: IACLClient;
    education: IUserProfileEducationClient;
    avatar: IUserProfileAvatarClient;
    skill: IUserProfileSkillClient;
    work: IUserProfileWorkClient;
}