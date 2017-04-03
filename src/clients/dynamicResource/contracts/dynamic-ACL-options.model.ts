import { IACLOptions } from '../../../infrastructure/common/contracts';

export interface IDynamicACLOptions extends IACLOptions {
    schemaName: string
}