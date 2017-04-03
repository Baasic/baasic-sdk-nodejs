import { IException } from './';

export interface IBaasicResponse {
    details: string,
    error: IException,
    errorCode: number,
    message: string,
    response: Object,
    statusCode: string
}