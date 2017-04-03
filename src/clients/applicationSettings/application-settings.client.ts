import { BaasicAppClient } from '../index'

import { IBaasicQueryModel, IGetRequestOptions, IHttpResponse, IOptions } from '../../infrastructure/common/contracts';
import { IApplication } from './contracts';

export class ApplicationSettingsClient {

    constructor(private baasicApp: BaasicAppClient) { }

    /**                 
     * Returns a promise that is resolved once the get action has been performed. Success response returns the application settings resource.                 
     * @method
     * @param options Query resource options object.                        
     * @example ApplicationSettingsClient.get()
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                        // perform error handling here 
                    });                 
     **/
    get(options: IOptions): PromiseLike<IHttpResponse<IApplication>> {
        return this.baasicApp.applicationSettingModule.get(options);
    }

    /**                  
     * Returns a promise that is resolved once the update application settings action has been performed. This action updates the application setting resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't use `baasicApplicationSettingsRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(appSettings); 
     * let uri = params['model'].links('put').href;				 
     * ```                  
     * @method
     * @param data An application object used to update application settings of the specified application resource.                         
     * @example // appSettings is a resource previously fetched using get action. 
                    appSettings.allowAnyOrigin = true; 
                    ApplicationSettingsClient.update(appSettings)
                        .then(function (data) {  
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                            // perform error handling here 
                        }); 				
     **/
    update(data: IApplication): PromiseLike<IHttpResponse<void>> {
        return this.baasicApp.applicationSettingModule.update(data);
    }
}