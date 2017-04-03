import { BaasicAppClient } from '../index'

import { IACLPolicy, IBaasicQueryModel, IGetRequestOptions, IHttpResponse, IOptions } from '../../infrastructure/common/contracts';
import { IDynamicACLOptions, IDynamicObject, IDynamicResourceACLClient, IDynamicResourceSchemaClient, IResourceSchema } from './contracts';

export class DynamicResourceClient {

    constructor(private baasicApp: BaasicAppClient) { }

    /**                  
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of dynamic resources matching the given criteria.                  
     * @method
     * @param schemaName Name of dynamic resource schema whose dynamic resources need to be retrieved.
     * @param options Query resource options object.
     * @returns Promise that is resolved once the find action has been performed.               
     * @example DynamicResourceClient.find('<schema-name>', {   
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
    find(schemaName: string, options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IDynamicObject>>> {
        return this.baasicApp.dynamicResourceModule.find(schemaName, options);
    }

    /**                  
     * Returns a promise that is resolved once the get action has been performed. Success response returns the specified dynamic resource.                  
     * @method                         
     * @example DynamicResourceClient.get('<schema-name>', '<dynamic-resource-id>')
                    .then(function (data) {   
                        // perform success action here 
                    }, 
                     function (response, status, headers, config) {   
                        // perform error handling here 
                    });                 
     **/
    get(schemaName: string, id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IDynamicObject>> {
        return this.baasicApp.dynamicResourceModule.get(schemaName, id, options);
    }

    /**                  
     * Returns a promise that is resolved once the create dynamic resource action has been performed; this action creates a new dynamic resource item.                  
     * @method
     * @param schemaName Name of dynamic resource schema that needs to be updated with new dynamic resource.
     * @param data A JSON object that needs to be inserted into the system as dynamic resource. JSON object is an unordered collection of zero or more key/value pairs structured using the standard JSON syntax rules.                         
     * @example DynamicModuleClient.create('<schema-name>', {   
                    id : '',   
                    description : '<description>'  
                })
                .then(function (data) {   
                    // perform success action here 
                },
                 function (response, status, headers, config) {   
                     // perform error handling here 
                });                  
     **/
    create(schemaName: string, data: any): PromiseLike<IHttpResponse<IDynamicObject>> {
        return this.baasicApp.dynamicResourceModule.create(schemaName, data);
    }

    /**                  
     * Returns a promise that is resolved once the update action has been performed; this action updates a dynamic resource item. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicDynamicResourceRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(dynamicResource); 
     * let uri = params['model'].links('put').href; 
     * ```                  
     * @method
     * @param data A JSON object used to update specified dynamic resource. JSON object is an unordered collection of zero or more key/value pairs structured using the standard JSON syntax rules.
     * @param options Options object.                        
     * @example // dynamicResource is a resource previously fetched using get action. 
                    dynamicResource.description = '<description>'; 
                    baasicDynamicResourceClient.update(dynamicResource, {   
                        query: "where field = 'value' " 
                    })
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    }); 				
     **/
    update(data: any, options: IOptions): PromiseLike<IHttpResponse<void>> {
        return this.baasicApp.dynamicResourceModule.update(data, options);
    }

    /**                  
     * Returns a promise that is resolved once the patch action has been performed; this action patches an existing dynamic resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicDynamicResourceRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.updateParams(dynamicResource); 
     * let uri = params['model'].links('patch').href; 
     * ```                  
     * @method
     * @param data JSON object used for partial update of specified dynamic resource. JSON object is an unordered collection of zero or more key/value pairs structured using the standard JSON syntax rules.
     * @param options Options object.                         
     * @example // dynamicResource is a resource previously fetched using get action. 
                    dynamicResource.description = '<new-description>'; 
                    dynamicResource.newField = '<newfield-value>'; 
                    DynamicResourceClient.patch(dynamicResource, {   
                        query: "where field = 'value' " 
                    })
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                        
                    }); 				
     **/
    patch(data: any, options: IOptions): PromiseLike<IHttpResponse<void>> {
        return this.baasicApp.dynamicResourceModule.patch(data, options);
    }

    /**                  
     * Returns a promise that is resolved once the remove action has been performed. This action will remove a dynamic resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicDynamicResourceRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(dynamicResource); 
     * let uri = params['model'].links('delete').href; 
     * ```                  
     * @method
     * @param data JSON object used to delete specified dynamic resource. JSON object is an unordered collection of zero or more key/value pairs structured using the standard JSON syntax rules.                         
     * @example // dynamicResource is a resource previously fetched using get action.				 
                    DynamicResourceClient.remove(dynamicResource, {   
                        query: "where field = 'value' " 
                    })
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    });						
     **/
    remove(data: any, options: IOptions): PromiseLike<IHttpResponse<void>> {
        return this.baasicApp.dynamicResourceModule.remove(data, options);
    }

    get schema(): IDynamicResourceSchemaClient {
        let baasicApp = this.baasicApp;
        return {
            /**                  
             * Returns a promise that is resolved once the find action has been performed. Success response returns a list of dynamic resource schemas matching the given criteria.                  
             * @method
             * @param options Options object.                      
             * @example DynamicResourceClient.scema.find({ 
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
            find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IResourceSchema>>> {
                return baasicApp.dynamicResourceModule.schema.find(options);
            },

            /**                  
             * Returns a promise that is resolved once the get action has been performed. Success response returns the specified dynamic resource schema.                  
             * @method
             * @param name Name of dynamic resource schema which need to be retrieved.
             * @param options Options object.                         
             * @example DynamicResourceClient.schema.get('<schema-name>')
                            .then(function (data) {   
                                // perform success action here 
                            },
                            function (response, status, headers, config) {   
                                // perform error handling here 
                            });                 
            **/
            get(name: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IResourceSchema>> {
                return baasicApp.dynamicResourceModule.schema.get(name, options);
            },

            /**                 
             * Returns a promise that is resolved once the create action has been performed; this action creates a new dynamic resource schema item.                 
             * @method
             * @param data A dynamic resource schema object that needs to be inserted into the system.                        
             * @example DynamicResourceClient.schema.create({   
                            schema : {  
                                type : 'object',     
                                properties : { 
                                    id : {
                                        title : '<unique-identifier-field>', 
                                        readonly : true, 
                                        hidden : true, 
                                        type : 'string' 
                                    },
                                    description : {         
                                        type: string       
                                    }     
                                }   
                            },   
                            name : '<schema-name>',   
                            description : '<description>',   
                            enforceSchemaValidation : true 
                        })
                        .then(function (data) {   
                            // perform success action here 
                        },
                        function (response, status, headers, config) {   
                            // perform error handling here 
                        });                 
            **/
            create(data: IResourceSchema): PromiseLike<IHttpResponse<IResourceSchema>> {
                return baasicApp.dynamicResourceModule.schema.create(data);
            },

            /**                  
             * Returns a promise that is resolved once the update dynamic resource schema action has been performed; this action updates a dynamic resource schema item. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicDynamicSchemaRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
             * ``` 
             * let params = modelMapper.removeParams(dynamicResourceSchema); 
             * let uri = params['model'].links('put').href; 
             * ```                  
             * @method
             * @param data A dynamic schema object used to update specified dynamic resource schema.                         
             * @example // dynamicResourceSchema is a resource previously fetched using get action. 
                            dynamicResourceSchema.description = '<description>'; 
                            DynamicResourceClient.schema.update(dynamicResourceSchema)
                                .then(function (data) {   
                                    // perform success action here 
                                },
                                function (response, status, headers, config) {   
                                    // perform error handling here 
                                }); 				
            **/
            update(data: IResourceSchema): PromiseLike<IHttpResponse<void>> {
                return baasicApp.dynamicResourceModule.schema.update(data);
            },

            /**                 
             * Returns a promise that is resolved once the remove action has been performed. This action will remove a dynamic resource schema item from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicDynamicSchemaRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
             * ``` 
             * let params = modelMapper.removeParams(dynamicResourceSchema); 
             * let uri = params['model'].links('delete').href; 
             * ```                 
             * @method
             * @param data A dynamic schema object used to delete specified dynamic resource schema.                        
             * @example // dynamicResourceSchema is a resource previously fetched using get action.				 
                            DynamicResourceClient.schema.remove(dynamicResourceSchema)
                                .then(function (data) {   
                                    // perform success action here 
                                },
                                function (response, status, headers, config) {   
                                    // perform error handling here 
                                });						
            **/
            remove(data: IResourceSchema): PromiseLike<IHttpResponse<void>> {
                return baasicApp.dynamicResourceModule.schema.remove(data);
            },

            /**                 
             * Returns a promise that is resolved once the generate schema action has been performed. Success response returns a schema generated based on the json input.                 
             * @method
             * @param data Unordered collection of key value pairs used to specify dynamic schema definition.                         
             * @example DynamicResourceClient.schema.generate({ 
                            id : '<schema-Id>',   
                            description : '<description>' 
                        })
                        .then(function (data) {   
                            // perform success action here 
                        },
                        function (response, status, headers, config) {   
                            // perform error handling here 
                        });					    
            **/
            generate(data: any): PromiseLike<IHttpResponse<any>> {
                return baasicApp.dynamicResourceModule.schema.generate(data);
            }
        };
    }

    get acl(): IDynamicResourceACLClient {
        let baasicApp = this.baasicApp;
        return {
            /**                     
             * Returns a promise that is resolved once the get action has been performed. Success response returns a list of ACL policies established for the specified dynamic resource.                     
             * @method
             * @param options Options object.                           
             * @example DynamicResourceClient.acl.get({id: '<dynamic-resource-id>', schemaName: '<schema-name>'})
                            .then(function (data) {   
                                // perform success action here 
                            },
                            function (response, status, headers, config) {   
                                // perform error handling here 
                            });                     
            **/
            get(options: IDynamicACLOptions): PromiseLike<IHttpResponse<IACLPolicy[]>> {
                return baasicApp.dynamicResourceModule.acl.get(options);
            },

            /**                    
             * Returns a promise that is resolved once the update acl action has been performed; this action creates new ACL policy for the specified dynamic resource.                     
             * @method
             * @param options Options object.                        
             * @example DynamicResourceClient.acl.update({id: '<dynamic-resource-id>', schemaName: '<schema-name>'})
                            .then(function (data) {   
                                // perform success action here 
                            },
                            function (response, status, headers, config) {   
                                // perform error handling here 
                            }); 				    
            **/
            update(options: IDynamicACLOptions): PromiseLike<IHttpResponse<IACLPolicy[]>> {
                return baasicApp.dynamicResourceModule.acl.update(options);
            },

            /**                     
             * Returns a promise that is resolved once the removeByUser action has been performed. This action deletes ACL policy assigned to the specified user and dynamic resource.
             * @method
             * @param action Action abbreviation which identifies ACL policy assigned to the specified user and dynamic resource. 
             *               Supported Values: 
             *               "Create"
             *               "Delete"
             *               "Read"
             *               "Update"
             * @param user Username which uniquely identifies user for which ACL policy needs to be removed.
             * @param data ACL Policy whose security privileges need to be retrieved and updated.
             * @example // dynamicResource is a resource previously fetched using get action.					
                            DynamicResourceClient.acl.removeByUser('<access-action>', '<username>', dynamicResource)
                                .then(function (data) {   
                                    // perform success action here 
                                },
                                function (response, status, headers, config) {   
                                    // perform error handling here 
                                }); 				    
            **/
            removeByUser(action: string, user: string, data: IACLPolicy): PromiseLike<IHttpResponse<void>> {
                return baasicApp.dynamicResourceModule.acl.removeByUser(action, user, data);
            },

            /**                     
             * Returns a promise that is resolved once the removeByRole action has been performed. This action deletes ACL policy assigned to the specified role and dynamic resource.                     
             * @method
             * @param action Action abbreviation which identifies ACL policy assigned to the specified role and dynamic resource.
             *               Supported Values:
             *               "Create"
             *               "Delete"
             *               "Read"
             *               "Update"
             * @param role Role's name which uniquely identifies role for which ACL policy needs to be removed.
             * @param data ACL Policy whose security privileges need to be retrieved and updated.                     
             * @example // dynamicResource is a resource previously fetched using get action. 
                            DynamicResourceClient.acl.removeByRole('<access-action>', '<role-name>', dynamicResource)
                                .then(function (data) {   
                                    // perform success action here 
                                },
                                function (response, status, headers, config) {   
                                    // perform error handling here 
                                }); 				    
            **/
            removeByRole(action: string, role: string, data: IACLPolicy): PromiseLike<IHttpResponse<void>> {
                return baasicApp.dynamicResourceModule.acl.removeByRole(action, role, data);
            }
        };
    }
}