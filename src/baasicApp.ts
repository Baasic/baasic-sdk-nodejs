import { IBaasicOptions, BaasicApp as BaasicSdkApp, IToken, IUser } from 'baasic-sdk-javascript';
import { HttpClient } from './infrastructure/httpApi/http-client';
import { InMemoryStorageHandler } from './infrastructure/store';
import { EventHandler } from './infrastructure/event.handler';
import * as clients from './clients';
import * as urlUtil from 'url';


export class BaasicApp {
    private readonly app: BaasicSdkApp;
    public readonly membership: MembershipClient;

    public readonly membershipClient: clients.MembershipClient;
    //Modules
    public readonly applicationSettingClient: clients.ApplicationSettingsClient;
    public readonly keyValueClient: clients.KeyValueClient;
    public readonly valueSetClient: clients.ValueSetClient;
    public readonly userProfileClient: clients.UserProfileClient;
    public readonly templatingClient: clients.TemplatingClient;
    public readonly meteringClient: clients.MeteringClient;
    public readonly mediaVaultClient: clients.MediaVaultClient;
    public readonly fileClient: clients.FilesClient;
    public readonly dynamicResourceClient: clients.DynamicResourceClient;
    public readonly notificationClient: clients.NotificationsClient;
    public readonly articleClient: clients.ArticleClient;
    public readonly commerceClient: clients.CommerceClient;

    constructor(apiKey: string, options?: Partial<IBaasicOptions>) {
        this.app = new BaasicSdkApp(apiKey, getOptions(options));

        this.membershipClient = new clients.MembershipClient(this.app);
        //Modules
        this.applicationSettingClient = new clients.ApplicationSettingsClient(this.app);
        this.keyValueClient = new clients.KeyValueClient(this.app);
        this.valueSetClient = new clients.ValueSetClient(this.app);
        this.userProfileClient = new clients.UserProfileClient(this.app);
        this.templatingClient = new clients.TemplatingClient(this.app);
        this.meteringClient = new clients.MeteringClient(this.app);
        this.mediaVaultClient = new clients.MediaVaultClient(this.app);
        this.fileClient = new clients.FilesClient(this.app);
        this.dynamicResourceClient = new clients.DynamicResourceClient(this.app);
        this.notificationClient = new clients.NotificationsClient(this.app);
        this.articleClient = new clients.ArticleClient(this.app);
        this.commerceClient = new clients.CommerceClient(this.app);
    }

    getAccessToken(): IToken {
        return this.app.getAccessToken();
    }

    updateAccessToken(value: IToken) {
        this.app.updateAccessToken(value);
    }

    getApiKey(): string {
        return this.app.getApiKey();
    }

    getApiUrl(): URL {
        return this.app.getApiUrl();
    }

    getUser(): IUser {
        return this.app.getUser();
    }

    setUser(userInfo: IUser) {
        this.app.setUser(userInfo);
    }
};

function getOptions(options: Partial<IBaasicOptions>): Partial<IBaasicOptions> {
    var defaults: Partial<IBaasicOptions> = {
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

