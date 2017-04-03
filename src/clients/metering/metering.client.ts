import { BaasicAppClient } from '../index'

import { IACLPolicy, IACLOptions, IACLClient, IBaasicQueryModel, IGetRequestOptions, IHttpResponse, IOptions } from '../../infrastructure/common/contracts';
import {
    IMeteringBatchClient,
    IMeteringCategory,
    IMeteringCategoryClient,
    IMeteringData,
    IMeteringSettings,
    IMeteringSettingsClient,
    IMeteringStatisticsClient
} from './contracts';

export class MeteringClient {

    constructor(private baasicApp: BaasicAppClient) { }

    /**                  
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of metering resources matching the given criteria.                  
     * @method 
     * @param options Query resource options object.
     * @returns A promise that is resolved once the find action has been performed.                         
     * @example MeteringClient.find({   
                    pageNumber : 1,   
                    pageSize : 10,   
                    orderBy : '<field>',   
                    orderDirection : '<asc|desc>',   
                    categories: 'Storage,Requests,Bandwidth' 
                })
                .then(function (collection) {   
                    // perform success action here 
                },
                 function (response, status, headers, config) {   
                     // perform error handling here 
                });                    
     **/
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IMeteringData>>> {
        return this.baasicApp.meteringModule.find(options);
    }

    /**                 
     * Returns a promise that is resolved once the get action has been performed. Success response returns the metering resource.                 
     * @method 
     * @param id MeteringData id which uniquely identifies MeteringData resource that needs to be retrieved.
     * @param options Query resource options object.
     * @returns A promise that is resolved once the get action has been performed.                        
     * @example MeteringClient.get()
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    });                 
     **/
    get(id: string, options?: IOptions): PromiseLike<IHttpResponse<IMeteringData>> {
        return this.baasicApp.meteringModule.get(id, options);
    }

    /**                  
     * Returns a promise that is resolved once the create metering action has been performed; this action creates a new metering resource.                  
     * @method 
     * @param data An MeteringData object that needs to be inserted into the system.
     * @returns A promise that is resolved once the create metering action has been performed                        
     * @example MeteringClient.create({   
                    category : '<category-name>',   
                    name : '<sub-category-name>',   
                    value: '<value>' 
                })
                .then(function (data) {   
                    // perform success action here 
                },
                 function (response, status, headers, config) {   
                     // perform error handling here 
                });                 
      **/
    create(data: IMeteringData): PromiseLike<IHttpResponse<IMeteringData>> {
        return this.baasicApp.meteringModule.create(data);
    }

    /**                  
     * Returns a promise that is resolved once the update metering action has been performed; this action updates a metering resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicMeteringRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.updateParams(meteringData); 
     * let uri = params['model'].links('put').href; 
     * ```                  
     * @method
     * @param data An metering data object used to update specified MeteringData resource.
     * @returns A promise that is resolved once the update metering action has been performed.                         
     * @example // meteringData is a resource previously fetched using get action. 
                    meteringData.value = '<some-new-value>'; 
                    MeteringClient.update(meteringData)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                             // perform error handling here 
                        }); 				
     **/
    update(data: IMeteringData): PromiseLike<IHttpResponse<void>> {
        return this.baasicApp.meteringModule.update(data);
    }

    /**                  
     * Returns a promise that is resolved once the remove action has been performed. This action will remove a metering resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicMeteringRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(meteringData); 
     * let uri = params['model'].links('delete').href; 
     * ```                  
     * @method 
     * @param data An metering data object used to remove specified MeteringData resource.                         
     * @returns A promise that is resolved once the remove action has been performed. 
     * @example // meteringData is a resource previously fetched using get action.				 
                        MeteringClient.remove(meteringData)
                            .then(function (data) {   
                                // perform success action here 
                            },
                             function (response, status, headers, config) {   
                                 // perform error handling here 
                            });						
     **/
    remove(data: IMeteringData): PromiseLike<IHttpResponse<void>> {
        return this.baasicApp.meteringModule.remove(data);
    }

    /**                  
     * Returns a promise that is resolved once the purge action has been performed. This action will remove all metering resources from the system if successfully completed.                  
     * @method
     * @returns A promise that is resolved once the purge action has been performed.                         
     * @example MeteringClient.purge()
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    });						
     **/
    purge(): PromiseLike<IHttpResponse<void>> {
        return this.baasicApp.meteringModule.purge();
    }

    get batch(): IMeteringBatchClient {
        let baasicApp = this.baasicApp;
        return {
            /**                   
             * Returns a promise that is resolved once the create data action has been performed; this action creates new data resources.                   
             * @method
             * @param data An MeteringData objects that need to be inserted into the system.
             * @returns A promise that is resolved once the create data action has been performed.                        
             * @example  MeteringClient.batch.create([{     
                            applicationId : '<applicationId>',     
                            category : '<category>',     
                            name: '<name>',     
                            value: '<value>'   
                        }])
                        .then(function (data) {     
                            // perform success action here   
                        },
                        function (response, status, headers, config) {     
                            // perform error handling here   
                        });                   
            **/
            create(data: IMeteringData[]): PromiseLike<IHttpResponse<IMeteringData[]>> {
                return baasicApp.meteringModule.batch.create(data);
            },

            /**                   
             * Returns a promise that is resolved once the update data action has been performed; this action updates specified data resources.                   
             * @method
             * @param data An MeteringData objects used to update specified MeteringData resources.
             * @returns A promise that is resolved once the update data action has been performed.
             * @example   MeteringClient.batch.update(companies)
                                .then(function (data) {     
                                    // perform success action here   
                                },
                                function (response, status, headers, config) {     
                                    // perform error handling here   
                                });                   
            **/
            update(data: IMeteringData[]): PromiseLike<IHttpResponse<void>> {
                return baasicApp.meteringModule.batch.update(data);
            },

            /**                  
            * Returns a promise that is resolved once the remove action has been performed. This action will remove data resources from the system if successfully completed.                  
            * @method   
            * @param ids MeteringData ids which uniquely identify MeteringData resources that need to be deleted.
            * @returns A promise that is resolved once the remove action has been performed.                    
            * @example MeteringClient.batch.remove(companyIds)
                           .then(function (data) {     
                               // perform success action here   
                           },
                           function (response, status, headers, config) {     
                               // perform error handling here   
                           });		                  
           **/
            remove(ids: string[]): PromiseLike<IHttpResponse<void>> {
                return baasicApp.meteringModule.batch.remove(ids);
            }
        };
    }

    get statistics(): IMeteringStatisticsClient {
        let baasicApp = this.baasicApp;
        return {
            /**                    
             * Returns a promise that is resolved once the find action has been performed. Success response returns a list of metering resources matching the given criteria.                    
             * @method  
             * @param options Query resource options object. 
             * @returns A promise that is resolved once the find action has been performed.                         
             * @example MeteringClient.statistics.find({     
                            pageNumber : 1,     
                            pageSize : 10,     
                            orderBy : '<field>',     
                            orderDirection : '<asc|desc>',     
                            category: 'Requests',     
                            rateBy : '<minute,hour,day,week,month,year>',     
                            from: '2 days ago',     
                            to: 'now'   
                        })
                        .then(function (collection) {     
                            // perform success action here   
                        },
                        function (response, status, headers, config) {     
                            // perform error handling here   
                        });                      
            **/
            find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IMeteringData>>> {
                return baasicApp.meteringModule.statistics.find(options);
            }
        };
    }

    get acl(): IACLClient {
        let baasicApp = this.baasicApp;
        return {
            /**                     
             * Returns a promise that is resolved once the get action has been performed. Success response returns a list of ACL policies established for the specified metering resource.                     
             * @method
             * @param options Query resource options object.
             * @returns A promise that is resolved once the get action has been performed.                            
             * @example MeteringClient.acl.get({id: '<id>'})
                         .then(function (data) {   
                             // perform success action here 
                         },
                            function (response, status, headers, config) {   
                                // perform error handling here 
                        });                     
            **/
            get(options?: IACLOptions): PromiseLike<IHttpResponse<IACLPolicy[]>> {
                return baasicApp.meteringModule.acl.get(options);
            },

            /**                     
             * Returns a promise that is resolved once the update acl action has been performed, this action creates new ACL policy for the specified metering resource.                     
             * @method 
             * @param options ACL options object.                      
             * @example let options = {id : '<id>'}; 
                        let aclObj =  {  actionId: '<action-id'>,  roleId: '<roleId>',  userId: '<userId>' }; 
                        options[baasicConstants.modelPropertyName] = aclObj; 
                        MeteringClient.acl.update(options)
                            .then(function (data) {   
                                // perform success action here 
                            },
                            function (response, status, headers, config) {   
                                // perform error handling here 
                            }); 				    
            **/
            update(options: IACLOptions[]): PromiseLike<IHttpResponse<IACLPolicy[]>> {
                return baasicApp.meteringModule.acl.update(options);
            },

            /**                     
             * Returns a promise that is resolved once the removeByUser action has been performed. This action deletes ACL policy assigned to the specified user and metering resource.                     
             * @method 
             * @param id User metering data id which uniquely identifies user metering data resource whose security privileges need to be retrieved and updated.
             * @param action Action abbreviation which identifies ACL policy assigned to the specified user and user metering data resource.
             *               Supported Values:
             *               "Create"
             *               "Delete"
             *               "Read"
             *               "Update"  
             * @param user A value that uniquely identifies user for which ACL policy needs to be removed.
             * @param data ACL Policy object used to delete specified item in the system.
             * @returns A promise that is resolved once the removeByUser action has been performed.                    
             * @example MeteringClient.acl.removeByUser('<id>', '<access-action>', '<username>')
                            .then(function (data) {   
                                // perform success action here 
                            },
                            function (response, status, headers, config) {   
                                // perform error handling here 
                            }); 				    
            **/
            removeByUser(id: string, action: string, user: string, data: IACLPolicy): PromiseLike<IHttpResponse<void>> {
                return baasicApp.meteringModule.acl.removeByUser(id, action, user, data);
            },

            /**                     
            * Returns a promise that is resolved once the removeByRole action has been performed. This action deletes ACL policy assigned to the specified role and metering resource.                     
            * @method 
            * @param id User metering data id which uniquely identifies user metering data resource whose security privileges need to be retrieved and updated.
            * @param action Action abbreviation which identifies ACL policy assigned to the specified user and user metering data resource.
            *               Supported Values:
            *               "Create"
            *               "Delete"
            *               "Read"
            *               "Update"  
            * @param role A value that uniquely identifies role for which ACL policy needs to be removed.
            * @param data ACL Policy object used to delete specified item in the system.
            * @returns A promise that is resolved once the removeByRole action has been performed.                   
            * @example MeteringClient.acl.removeByRole('<id>', '<access-action>', '<role-name>')
                           .then(function (data) {   
                               // perform success action here 
                           },
                           function (response, status, headers, config) {   
                               // perform error handling here 
                           }); 				    
           **/
            removeByRole(id: string, action: string, role: string, data: IACLPolicy): PromiseLike<IHttpResponse<void>> {
                return baasicApp.meteringModule.acl.removeByRole(id, action, role, data);
            }
        };
    }

    get settings(): IMeteringSettingsClient {
        let baasicApp = this.baasicApp;
        return {
            /**                 
             * Returns a promise that is resolved once the get action has been performed. Success response returns the metering resource.                 
             * @method                        
             * @example baasicMeteringSettingsClient.get()
                            .then(function (data) {   
                                // perform success action here 
                            },
                            function (response, status, headers, config) {   
                                // perform error handling here 
                            });                 
            **/
            get(options?: IGetRequestOptions): PromiseLike<IHttpResponse<IMeteringSettings>> {
                return baasicApp.meteringModule.settings.get(options);
            },

            /**                  
             * Returns a promise that is resolved once the update metering action has been performed; this action updates a metering resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicMeteringSettingsRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
             * ``` 
             * let params = modelMapper.updateParams(meteringSettings); 
             * let uri = params['model'].links('put').href; 
             * ```                  
             * @method 
             * @param data An meteringSetting object used to update specified MeteringSetting resource.
             * @returns A promise that is resolved once the update metering action has been performed.                         
             * @example // meteringSettings is a resource previously fetched using get action. 
                            meteringSettings.dataRetentionPeriod = 60; 
                            baasicMeteringSettingsClient.update(meteringSettings)
                                .then(function (data) {   
                                    // perform success action here 
                                },
                                function (response, status, headers, config) {   
                                    // perform error handling here 
                                }); 				
            **/
            update(data: IMeteringSettings): PromiseLike<IHttpResponse<void>> {
                return baasicApp.meteringModule.settings.update(data);
            }
        };
    }

    get category(): IMeteringCategoryClient {
        let baasicApp = this.baasicApp;
        return {
            /**                  
             * Returns a promise that is resolved once the find action has been performed. Success response returns a list of metering resources matching the given criteria.                  
             * @method
             * @param options Query resource options object.
             * @returns A promise that is resolved once the find action has been performed.                          
             * @example MeteringClient.category.find({   
                            pageNumber : 1,   
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
            find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IMeteringCategory>>> {
                return baasicApp.meteringModule.category.find(options);
            },

            /**                 
             * Returns a promise that is resolved once the get action has been performed. Success response returns the metering resource.                 
             * @method
             * @param id MeteringCategory id which uniquely identifies MeteringCategory resource that needs to be retrieved.
             * @param options Query resource options object.
             * @returns A promise that is resolved once the get action has been performed.                        
             * @example MeteringClient.category.get(id)
                            .then(function (data) {   
                                // perform success action here 
                            },
                            function (response, status, headers, config) {   
                                // perform error handling here 
                            });                 
            **/
            get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IMeteringCategory>> {
                return baasicApp.meteringModule.category.get(id, options);
            },

            /**                  
             * Returns a promise that is resolved once the create metering action has been performed; this action creates a new metering resource.                  
             * @method 
             * @param data An MeteringCategory object that needs to be inserted into the system.
             * @returns A promise that is resolved once the create metering action has been performed.                         
             * @example MeteringClient.category.create({   
                            category : '<category-name>',   
                            unitName : 'Kb',   
                            unitFactor: 1,   
                            defaultSamplingRate: '<value>', - Defaults: Minute = 1,Hour = 2,Day = 3,Week = 4,Month = 5,Year = 6   
                            aggregateFunction: '<value>' - Defaults: None = 0,Count = 1,Avg = 2,Max = 3,Min = 4,Sum = 5 
                        })
                        .then(function (data) {   
                            // perform success action here 
                        },
                        function (response, status, headers, config) {   
                            // perform error handling here 
                        });                  
            **/
            create(data: IMeteringCategory): PromiseLike<IHttpResponse<IMeteringCategory>> {
                return baasicApp.meteringModule.category.create(data);
            },

            /**                  
             * Returns a promise that is resolved once the update metering action has been performed; this action updates a metering resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicMeteringCategoryRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
             * ``` 
             * let params = modelMapepr.updateParams(meteringCategory); 
             * let uri = params['model'].links('put').href; 
             * ```                  
             * @method 
             * @param data An meteringCategory object used to update specified MeteringCategory resource.
             * @returns A promise that is resolved once the remove action has been performed.                            
             * @example // meteringCategory is a resource previously fetched using get action. 
                            meteringCategory.defaultSamplingRate = 'Day'; 
                            MeteringClient.category.update(meteringCategory)
                                .then(function (data) {   
                                    // perform success action here 
                                },
                                function (response, status, headers, config) {   
                                    // perform error handling here 
                                }); 				
            **/
            update(data: IMeteringCategory): PromiseLike<IHttpResponse<void>> {
                return baasicApp.meteringModule.category.update(data);
            },

            /**                  
             * Returns a promise that is resolved once the remove action has been performed. This action will remove a metering resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicMeteringCategoryRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
             * ```
             * let params = modelMapper.removeParams(meteringCategory); 
             * let uri = params['model'].links('delete').href; 
             * ```                  
             * @method 
             * @param data An meteringCategory object used to update specified MeteringCategory resource. 
             * @returns A promise that is resolved once the remove action has been performed.                        
             * @example // meteringCategory is a resource previously fetched using get action.				 
                            MeteringClient.category.remove(meteringCategory)
                                .then(function (data) {   
                                    // perform success action here 
                                },
                                function (response, status, headers, config) {   
                                    // perform error handling here 
                                });						
            **/
            remove(data: IMeteringCategory): PromiseLike<IHttpResponse<void>> {
                return baasicApp.meteringModule.category.remove(data);
            },

            batch: {
                /**                   
                 * Returns a promise that is resolved once the create category action has been performed; this action creates new category resources.                   
                 * @method
                 * @param data An MeteringCategory objects that need to be inserted into the system.
                 * @returns A promise that is resolved once the create category action has been performed.                        
                 * @example  MeteringClient.category.batch.create([{     
                                aggregateFunction : '<aggregateFunction>',     
                                category : '<name>',    
                                defaultSamplingRate: '<defaultSamplingRate>',     
                                slug: '<slug>',     
                                unitFactor: '<unitFactor>',     
                                unitName: '<unitName>'   
                            }])
                            .then(function (data) {     
                                // perform success action here   
                            },
                            function (response, status, headers, config) {     
                                // perform error handling here   
                            });                   
                **/
                create(data: IMeteringCategory[]): PromiseLike<IHttpResponse<IMeteringCategory[]>> {
                    return baasicApp.meteringModule.category.batch.create(data);
                },

                /**                   
                 * Returns a promise that is resolved once the update category action has been performed; this action updates specified category resources.                   
                 * @method
                 * @param data An MeteringCategory objects used to update specified MeteringCategory resources.
                 * @returns A promise that is resolved once the update category action has been performed.                      
                 * @example    MeteringClient.category.batch.update(companies)
                                .then(function (data) {     
                                    // perform success action here   
                                },
                                function (response, status, headers, config) {     
                                    // perform error handling here   
                                });                   
                **/
                update(data: IMeteringCategory[]): PromiseLike<IHttpResponse<void>> {
                    return baasicApp.meteringModule.category.batch.update(data);
                },

                /**                   
                 * Returns a promise that is resolved once the remove action has been performed. This action will remove category resources from the system if successfully completed.                   
                 * @method
                 * @param ids MeteringCategory ids which uniquely identify MeteringCategory resources that need to be deleted.
                 * @returns A promise that is resolved once the remove action has been performed.                         
                 * @example  MeteringClient.category.batch.remove(companyIds)
                                .then(function (data) {     
                                    // perform success action here   
                                },
                                function (response, status, headers, config) {     
                                    // perform error handling here   
                                });		                  
                **/
                delete(ids: string[]): PromiseLike<IHttpResponse<void>> {
                    return baasicApp.meteringModule.category.batch.delete(ids);
                }
            }
        };
    }
}