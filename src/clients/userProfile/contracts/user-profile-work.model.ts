import { IBaasicModel } from '../../../infrastructure/common/contracts';
import { ICompany } from './';

export interface IUserProfileWork extends IBaasicModel {
    company?: ICompany,
    companyId?: string,
    companyName?: string,
    endDate?: string,
    startDate?: string,
    summary?: string
}