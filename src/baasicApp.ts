import { IBaasicOptions, BaasicApp as BaasicSdkApp } from 'baasic-sdk-javascript';
import { HttpClient } from './infrastructure/httpApi/http-client';
import { InMemoryStorageHandler } from './infrastructure/store';
import { EventHandler } from './infrastructure/event.handler';
import * as urlUtil from 'url';

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
    public readonly membership: MembershipClient;

    constructor(apiKey: string, options?: Partial<IBaasicOptions>) {
        this.app = new BaasicSdkApp(apiKey, getOptions(options));
        this.membership = new MembershipClient(this.app);
    }
};

function getOptions(options: Partial<IBaasicOptions>): Partial<IBaasicOptions> {
    var defaults : Partial<IBaasicOptions> = {
        httpClient: () => new HttpClient(),
        storageHandler: () => new InMemoryStorageHandler(),
        eventHandler: () => new EventHandler(),
        urlFactory: (url: string, base?: string) => {
            if (base) {
                url = base + url;
            }
            var urlObject = urlUtil.parse(url);
            urlObject.toString = () => urlUtil.format(urlObject);
            return urlObject as URL;
        } 
    }

    return Object.assign({}, defaults, options);
};

