import { IHttpResponse } from '../../../../infrastructure/common/contracts';
import { IAccessPolicy, IAccessAction } from '../';

export interface IPermissionClient {
    find(section: string, options?: any): PromiseLike<IHttpResponse<IAccessPolicy[]>>;
    getActions(options?: any): PromiseLike<IHttpResponse<IAccessAction[]>>;
    getPermissionSubjects(options: any): PromiseLike<any>;
    create(data: IAccessPolicy): PromiseLike<IHttpResponse<IAccessPolicy[]>>;
    remove(data: IAccessPolicy): PromiseLike<IHttpResponse<any>>;
    createPermission(section: string, actions: IAccessAction[], membershipItem: any): any;
    findPermission(permission: Object, permissionCollection: any): any;
    exists(permission: Object, permissionCollection: any): any;
    togglePermission(permission: Object, action: string): any;
    getModulePermissions(section: any): any;
    resetPermission(): void;
    hasPermission(authorization: string): boolean;
}