import { IUserInfo } from '../';

export interface ILoginClient {
    login(data: any): PromiseLike<any>;
    loadUserData(data: any): IUserInfo;
    logout(token: string, type: string): PromiseLike<void>;
}