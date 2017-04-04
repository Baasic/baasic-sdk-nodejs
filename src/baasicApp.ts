import { IBaasicOptions, BaasicApp as BaasicSdkApp } from 'baasic-sdk-javascript';
import { HttpClient } from './infrastructure/httpApi/http-client';

import {
    ApplicationSettingsClient,
    ArticleClient,
    CommerceClient,
    DynamicResourceClient,
    FilesClient,
    KeyValueClient,
    MediaVaultClient,
    MembershipClient,
    MeteringClient,
    NotificationsClient,
    TemplatingClient,
    UserProfileClient,
    ValueSetClient
} from './clients';


export class BaasicApp {
    private readonly app : BaasicSdkApp;

    constructor(apiKey: string, options?: Partial<IBaasicOptions>) {
        this.app = new BaasicSdkApp(apiKey, getOptions(options));
    }
};

function getOptions(options: Partial<IBaasicOptions>): Partial<IBaasicOptions> {
    var defaults = {
        httpClient: () => new HttpClient()
    }

    return Object.assign({}, defaults, options);
};

