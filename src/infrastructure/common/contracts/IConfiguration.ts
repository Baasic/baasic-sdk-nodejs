import { IBaasicOptions } from 'baasic-sdk-javascript';

export interface IConfiguration {
    apiKey: string,
    options?: Partial<IBaasicOptions>
}