import { IOptions } from '../../../infrastructure/common/contracts';

export interface IArticleOptions extends IOptions {
    articleUrl?: string,
    startDate?: any,
    endDate?: any
}