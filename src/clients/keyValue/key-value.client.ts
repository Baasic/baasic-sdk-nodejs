import { BaasicAppClient } from '../index'
import { IBaasicQueryModel, IGetRequestOptions, IHttpResponse, IOptions } from '../../infrastructure/common/contracts';
import { IKeyValue } from './contracts';

export class KeyValueClient {

    constructor(private baasicApp: BaasicAppClient) { }

    /**
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of key value resources matching the given criteria.
     * @param options query resource options object
     * @returns A promise that is resolved once the find action has beend performed.
     * @method
     * @example KeyValueClient.find({
                 pageNumber: 1, 
                 pageSize: 10, 
                 orderBy: '<field>', 
                 orderDirection: '<asc|desc>', 
                 search: '<search-phrase>'
                })
                .then(function (collection) {   
                    // perform success action here 
                },
                 function (response, status, headers, config) {   
                    // perform error handling here 
                });                     
     **/
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IKeyValue>>> {
        return this.baasicApp.keyValueModule.find(options);
    }

    /**
     * Returns a promise that is resolved once the get action has been performed. Success response returns the specified key value resource.
     * @param id unique identifer of key value resources
     * @param options query resource options object
     * @returns A promise that is resolved once the get action has beend performed.
     * @method
     * @example KeyValueClient.get('<key-value-id>')
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                        // perform error handling here 
                    });                  
     **/
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IKeyValue>> {
        return this.baasicApp.keyValueModule.get(id, options);
    }

    /**
     * Returns a promise that is resolved once the create key value action has been performed; this action creates a new key value resource.
     * @param data A key value object that needs to be inserted into the system.
     * @returns A promise that is resolved once the create key value action has beend performed.
     * @method
     * @example KeyValueClient.create({key: '<key>', value: '<value>', })
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                        // perform error handling here 
                    });
     */
    create(data: IKeyValue): PromiseLike<IHttpResponse<IKeyValue>> {
        return this.baasicApp.keyValueModule.create(data);
    }

    /**
    * Returns a promise that is resolved once the update key value action has been performed; this action updates a key value resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicKeyValueRouteClient` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
    * ``` 
    * let params = modelMapper.removeParams(keyValue); 
    * let uri = params['model'].links('put').href; 
    * ```
    * @param data A key value object used to update specified key value resource.
    * @return A promise that is resolved once the update key value action has been performed.
    * @method
    * @example // keyValue is a resource previously fetched using get action. 
                  keyValue.value = '<new-value>'; 
                  KeyValueClient.update(keyValue)
                  .then(function (data) {   
                      // perform success action here 
                   },
                    function (response, status, headers, config) {   
                       // perform error handling here 
                   }); 				
    **/
    update(data: IKeyValue): PromiseLike<IHttpResponse<void>> {
        return this.baasicApp.keyValueModule.update(data);
    }

    /**
    * Returns a promise that is resolved once the remove action has been performed. This action will remove a key value resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicKeyValueRouteClient` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
    * ``` 
    * let params = modelMapper.removeParams(keyValue); 
    * let uri = params['model'].links('delete').href; 
    * ```      
    * @param data A key value object used to delete specified key value resource.  
    * @returns A promise that is resolved once the remove action has been performed.          
    * @method 
    * @example // keyValue is a resource previously fetched using get action.				 
                   KeyValueClient.remove(keyValue) 
                   .then(function (data) {   
                       // perform success action here 
                   },
                    function (response, status, headers, config) {   
                       // perform error handling here 
                   });
    **/
    remove(data: IKeyValue): PromiseLike<IHttpResponse<void>> {
        return this.baasicApp.keyValueModule.remove(data);
    }
};