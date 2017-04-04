import { BaasicApp } from 'baasic-sdk-javascript'
import { IBaasicQueryModel, IGetRequestOptions, IHttpResponse, IOptions } from '../../infrastructure/common/contracts';
import { IValueSet, IValueSetItem, IValueSetItemClient } from './contracts';

export class ValueSetClient {

    constructor(private baasicApp: BaasicApp) { }

    /**
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of value set resources matching given criteria.
     * @param options query resource options object
     * @returns A promise that is resolved once the find action has beend performed.
     * @method 
     * @example ValueSetClient.find({
                    pageNumber: 1,
                    pageSize : 10,
                    orderBy : '<field>',
                    orderDirection : '<asc|desc>', 
                    search : '<search-phrase>'
                })
                .then(function (collection) {   
                    // perform success action here 
                },
                 function (response, status, headers, config) {   
                    // perform error handling here 
                });
     **/
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IValueSet>>> {
        return this.baasicApp.valueSetModule.find(options);
    }

    /**
     * Returns a promise that is resolved once the get action has been performed. Success response returns the specified value set resource.
     * @param setName value set name
     * @param options query resource options object
     * @returns A promise that is resolved once the get action has been performed.
     * @method
     * @example ValueSetClient.get('<value-set-name>')
                   .success(function (data) {   
                       // perform success action here 
                   })
                   .error(function (response, status, headers, config) {   
                       // perform error handling here 
                   });
    **/
    get(setName: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IValueSet>> {
        return this.baasicApp.valueSetModule.get(setName, options);
    }

    /**
     * Returns a promise that is resolved once the create value set action has been performed; this action creates a new value set resource.
     * @param data A key value object that needs to be inserted into the system.
     * @returns A promise that is resolved once the create value set action has beend performed.
     * @method
     * @example ValueSetClient.create({
                    name: '<value-set-name>',
                    description: '<description>',
                    values: [{value: '<value>'}]
                })
                .then(function (data) {   
                    // perform success action here 
                },
                 function (response, status, headers, config) {   
                    // perform error handling here 
                });
     **/
    create(data: IValueSet): PromiseLike<IHttpResponse<IValueSet>> {
        return this.baasicApp.valueSetModule.create(data);
    }

    /**
     * Returns a promise that is resolved once the update value set action has been performed; this action updates a value set resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicValueSetClient` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(valueSet); 
     * let uri = params['model'].links('put').href; 
     * ```
     * @param data Value set object used to update specified value set resource.
     * @returns A promise that is resolved once the update value set action has been performed.
     * @method
     * @example // valueSet is a resource previously fetched using get action. 
                        valueSet.name = '<new-name>'; 
                        ValueSetClient.update(valueSet)
                            .then(function (data) {   
                                // perform success action here 
                            },
                             function (response, status, headers, config) {   
                                // perform error handling here 
                            });
     **/
    update(data: IValueSet): PromiseLike<IHttpResponse<void>> {
        return this.baasicApp.valueSetModule.update(data);
    }

    /**                  
     * Returns a promise that is resolved once the remove action has been performed. This action will delete a value set resource if the action is completed successfully. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicValueSetClient` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(valueSet); 
     * let uri = params['model'].links('delete').href; 
     * ```
     * @param data A value set object used to delete specified value set resource.                  
     * @method                         
     * @example // valueSet is a resource previously fetched using get action.				 
                    valueSetClient.remove(valueSet)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                            // perform error handling here 
                        });						
     **/
    remove(data: IValueSet): PromiseLike<IHttpResponse<void>> {
        return this.baasicApp.valueSetModule.remove(data);
    }

    get items(): IValueSetItemClient {
        let baasicApp = this.baasicApp;
        return {
            /**
            * Returns a promise that is resolved once the find action has been performed. Success response returns a list of value set item resources matching given criteria.
            * @param options Query resource options object.
            * @returns A promise that is resolved once the find action has been performed.
            * @method items.find
            * @example ValueSetClient.items.find({
                            setName: '<value-set-name>',
                            pageNumber : 1, 
                            pageSize : 10, 
                            orderBy : '<field>',
                            orderDirection : '<asc|desc>',
                            search : '<search-phrase>' })
                        .then(function (collection) {   
                            // perform success action here 
                        },
                        function (response, status, headers, config) {   
                            // perform error handling here 
                        });
            **/
            find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IValueSetItem>>> {
                return baasicApp.valueSetModule.items.find(options);
            },

            /**
            * Returns a promise that is resolved once the get action has been performed. Success response returns the specified value set item resource.
            * @param setName value set name
            * @param id unique identifier of value set resource
            * @param options query resource options object
            * @returns A promise that is resolved once the get action has been performed.
            * @method items.get
            * @example ValueSetClient.items.get('<value-set-name>', '<set-item-id>')
                        .then(function (data) {   
                               // perform success action here 
                       },
                       function (response, status, headers, config) {   
                           // perform error handling here 
                       });
           **/
            get(setName: string, id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IValueSetItem>> {
                return baasicApp.valueSetModule.items.get(setName, id, options);
            },

            /**
             * Returns a promise that is resolved once the create value set item action has been performed; this action creates a new value set item resource.
             * @method
             * @param data A value set item object that needs to be inserted into the system.
             * @returns A promise that is resolved once the create value set item action has been performed.
             * @example ValueSetClient.items.create({
                            setId: '<value-set-id>', 
                            value: '<value>'
                        })
                        .then(function (data) {   
                            // perform success action here 
                        },
                        function (response, status, headers, config) {   
                            // perform error handling here 
                        });
            **/
            create(data: IValueSetItem): PromiseLike<IHttpResponse<IValueSetItem>> {
                return baasicApp.valueSetModule.items.create(data);
            },

            /**
             * Returns a promise that is resolved once the update value set item action has been performed; this action updates a value set item resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicValueSetClient` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
             * ``` 
             * let params = modelMapper.removeParams(valueSetItem); 
             * let uri = params['model'].links('put').href; 
             * ```
             * @method
             * @param data A value set item object used to update specified value set resource.
             * @returns A promise that is resolved once the update value set item action has been performed.
             * @example // valueSetItem is a resource previously fetched using get action. 
                        valueSetItem.value = '<new-value>'; 
                        ValueSetItemClient.items.update(valueSetItem)
                            .then(function (data) {   
                                // perform success action here 
                            },
                            function (response, status, headers, config) {  
                                // perform error handling here 
                            });
            **/
            update(data: IValueSetItem): PromiseLike<IHttpResponse<IValueSetItem>> {
                return baasicApp.valueSetModule.items.update(data);
            },

            /**
             * Returns a promise that is resolved once the remove action has been performed. This action will delete a value set item if the action is completed successfully. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicValueSetClient` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
             * ``` 
             * let params = modelMapper.removeParams(valueSetItem); 
             * let uri = params['model'].links('delete').href; 
             * ```
             * @param data A value set item object used to delete specified value set resource.
             * @returns A promise that is resolved once the remove action has been performed.
             * @method 
             * @example // valueSetItem is a resource previously fetched using get action.
                        ValueSetItemClient.items.remove(valueSetItem)
                            .then(function (data) {   
                                // perform success action here 
                            },
                            function (response, status, headers, config) {   
                                // perform error handling here 
                            });
            **/
            remove(data: IValueSetItem): PromiseLike<IHttpResponse<void>> {
                return baasicApp.valueSetModule.items.remove(data);
            }
        };
    }
}