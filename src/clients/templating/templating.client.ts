import { BaasicAppClient } from '../index'

import { IBaasicResponse, IBaasicQueryModel, IGetRequestOptions, IHttpResponse, IOptions } from '../../infrastructure/common/contracts';
import { ITemplate, ITemplatingBatchClient } from './contracts';

export class TemplatingClient {

    constructor(private baasicApp: BaasicAppClient) { }

    /**                 
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of template resources matching the given criteria.                 
     * @method
     * @param options Query resource options.
     * @returns A promise that is resolved once the find action has been performed.                        
     * @example TemplatingClient.find({  
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
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<ITemplate>>> {
        return this.baasicApp.templatingModule.find(options);
    }

    /**                 
     * Returns a promise that is resolved once the get action has been performed. Success response returns the specified template resource.                 
     * @method
     * @param id Template id which uniquely identifies Template resource that needs to be retrieved.
     * @param options Query resource options object.                        
     * @example TemplatingClient.get('<template-id>')
                   .then(function (data) {  
                       // perform success action here 
                   },
                    function (response, status, headers, config) {  
                        // perform error handling here 
                   });                 
    **/
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<ITemplate>> {
        return this.baasicApp.templatingModule.get(id, options);
    }

    /**                 
     * Returns a promise that is resolved once the create template action has been performed; this action creates a new template resource.                 
     * @method
     * @param data An Template object that needs to be inserted into the system.
     * @returns A promise that is resolved once the create template action has been performed.                       
     * @example TemplatingClient.create({  content : '<content>',  templateId : '<template-id>' })
                    .then(function (data) {  
                        // perform success action here 
                    },
                     function (response, status, headers, config) {  
                         // perform error handling here 
                    });                 
     **/
    create(data: ITemplate): PromiseLike<IHttpResponse<ITemplate>> {
        return this.baasicApp.templatingModule.create(data);
    }

    /**                 
     * Returns a promise that is resolved once the update template action has been performed; this action updates a template resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicTemplatingRouteClient` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(template); 
     * let uri = params['model'].links('put').href; 
     * ```                 
     * @method 
     * @param data An template object used to update specified Template resource.
     * @returns A promise that is resolved once the update template action has been performed.                       
     * @example // template is a resource previously fetched using get action. 
                    template.content = '<new-content>'; 
                    TemplatingClient.update(template)
                        .then(function (data) {  
                            // perform success action here 
                        },
                         function (response, status, headers, config) {  
                             // perform error handling here 
                        });                
     **/
    update(data: ITemplate): PromiseLike<IHttpResponse<any>> {
        return this.baasicApp.templatingModule.update(data);
    }

    /**                 
     * Returns a promise that is resolved once the remove action has been performed. This action will remove a template resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicTemplatingRouteDefiniton` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(template); 
     * let uri = params['model'].links('delete').href; 
     * ```                 
     * @method 
     * @param data An template object used to delete specified Template resource.
     * @returns A promise that is resolved once the remove action has been performed.                       
     * @example // template is a resource previously fetched using get action.				 
                    TemplatingClient.remove(template)
                        .then(function (data) {  
                            // perform success action here 
                        },
                         function (response, status, headers, config) {  
                             // perform error handling here 
                        });		               
     **/
    remove(data: ITemplate): PromiseLike<IHttpResponse<any>> {
        return this.baasicApp.templatingModule.remove(data);
    }

    get batch(): ITemplatingBatchClient {
        let baasicApp = this.baasicApp;
        return {
            /**                     
             * Returns a promise that is resolved once the create action has been performed; this action creates new template resources.                     
             * @method
             * @param data An Template objects that need to be inserted into the system.
             * @returns A promise that is resolved once the create action has been performed.
             * @example TemplatingClient.batch.create([{ content : '<content>', templateId : '<template-id>' }])
                            .then(function (data) {       
                                // perform success action here     
                            },
                            function (response, status, headers, config) {       
                                // perform error handling here     
                            });                     
            **/
            create(data: ITemplate[]): PromiseLike<IHttpResponse<IBaasicResponse[]>> {
                return baasicApp.templatingModule.batch.create(data);
            },

            /**                     
             * Returns a promise that is resolved once the update action has been performed; this action updates specified template resources.                     
             * @method 
             * @param data An Template objects that need to be inserted into the system.
             * @returns A promise that is resolved once the update action has been performed.                         
             * @example TemplatingClient.batch.update(templates)
                            .then(function (data) {       
                                // perform success action here     
                            },
                            function (response, status, headers, config) {       
                                // perform error handling here     
                            });                     
            **/
            update(data: ITemplate[]): PromiseLike<IHttpResponse<IBaasicResponse[]>> {
                return baasicApp.templatingModule.batch.update(data);
            },

            /**                     
             * Returns a promise that is resolved once the remove action has been performed. This action will remove template resources from the system if successfully completed.                     
             * @method 
             * @param ids Template ids which uniquely identify Template resources that need to be deleted.
             * @returns A promise that is resolved once the update action has been performed.                           
             * @example TemplatingClient.batch.remove(companyIds)
                            .then(function (data) {       
                                // perform success action here     
                            },
                            function (response, status, headers, config) {       
                                // perform error handling here     
                            });		                    
            **/
            remove(ids: string[]): PromiseLike<IHttpResponse<void>> {
                return baasicApp.templatingModule.batch.remove(ids);
            }
        };
    }
}