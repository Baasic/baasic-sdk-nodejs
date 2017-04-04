import { BaasicApp } from 'baasic-sdk-javascript'

import { IACLOptions, IACLPolicy, IACLClient, IBaasicQueryModel, IGetRequestOptions, IHttpResponse, IOptions } from '../../infrastructure/common/contracts';
import { IFileEntry, IFilesBatchClient, IFilesStreamsClient } from './contracts';

export class FilesClient {

    constructor(private baasicApp: BaasicApp) { }

    /**                  
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of file resources matching the given criteria.                  
     * @method 
     * @param options Query resource options object.
     * @returns A promise that is resolved once the find action has been performed.                         
     * @example FilesClient.find({   
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
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IFileEntry>>> {
        return this.baasicApp.fileModule.find(options);
    }

    /**                 
     * Returns a promise that is resolved once the get action has been performed. Success response returns requested file resource.                 
     * @method  
     * @param id File id which uniquely identifies file resource that needs to be retrieved.
     * @param options Query resource options object. 
     * @returns A promise that is resolved once the get action has been performed.                      
     * @example FilesClient.get('<file-id>')
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    });                 
     **/
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IFileEntry>> {
        return this.baasicApp.fileModule.get(id, options);
    }

    /**                  
     * Returns a promise that is resolved once the update file action has been performed; this action will update a file resource if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicFilesRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.updateParams(fileEntry); 
     * let uri = params['model'].links('put').href; 
     * ```                  
     * @method
     * @param data A file entry object used to update specific file entry resource in the system.                          
     * @example // fileEntry is a file resource previously fetched using get action. 
                    fileEntry.description = '<description>'; 
                    FilesClient.update(fileEntry)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                             // perform error handling here 
                        }); 				
     **/
    update(data: IFileEntry): PromiseLike<IHttpResponse<void>> {
        return this.baasicApp.fileModule.update(data);
    }

    /**                  
     * Returns a promise that is resolved once the unlink action has been performed. This action will remove one or many file resources from the system if successfully completed. If derived resource's format is passed, such as `width` and `height` for the image type of file resource, the operation will remove just derived resource. Otherwise, specified file and all its accompanying derived resources will be removed from the system. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply baasicFilesRouteClient route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(fileEntry); 
     * let uri = params['model'].links('unlink').href; 
     * ```                  
     * @method 
     * @param data
     * @param options
     * @returns A promise that is resolved once the unlink action has been performed.                         
     * @example // fileEntry is a file resource previously fetched using get action. The following action will remove the original file resource and all accompanying derived file resources.			 
                    FilesClient.unlink(fileEntry) 
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                             // perform error handling here 
                        }); 
                // fileEntry is a file resource previously fetched using get action. The following action will remove derived file resource only.		 
                    FilesClient.unlink(fileEntry, {width: <width>, height: <height>})
                        .then(function (data) {   
                            // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    });						
     **/
    unlink(data: IFileEntry, options?: IOptions): PromiseLike<IHttpResponse<void>> {
        return this.baasicApp.fileModule.unlink(data, options);
    }

    /**                  
     * Returns a promise that is resolved once the link action has been performed; this action links file resource from other modules into the Files module (For example: file resources from the Media Vault module can be linked directly into the Files module).                  
     * @method
     * @param data A file object that need to be inserted into the system.
     * @returns A promise that is resolved once the link action has been performed.                      
     * @example FilesClient.link(fileObject)
                   .then(function (data) {   
                       // perform success action here 
                   },
                    function (response, status, headers, config) {   
                        // perform error handling here 
                   });                 
    **/
    link(data: IFileEntry): PromiseLike<IHttpResponse<IFileEntry>> {
        return this.baasicApp.fileModule.link(data);
    }

    get batch(): IFilesBatchClient {
        let baasicApp = this.baasicApp;
        return {
            /**                   
             * Returns a promise that is resolved once the update action has been performed; this action updates specified file resources.                   
             * @method 
             * @param data A collection of file objects used to update specified file resources.
             * @returns A promise that is resolved once the update action has been performed.                      
             * @example FilesClient.batch.update(files)
                            .then(function (data) {   
                                // perform success action here 
                            },
                            function (response, status, headers, config) {   
                                // perform error handling here 
                            });                   
            **/
            update(data: IFileEntry[]): PromiseLike<IHttpResponse<void>> {
                return baasicApp.fileModule.batch.update(data);
            },

            /**                   
             * Returns a promise that is resolved once the link action has been performed; this action links file resources from other modules into the Files module (For example: file resources from the Media Vault module can be linked directly into the Files module).                   
             * @method
             * @param data A collection of file objects that need to be inserted into the system.
             * @returns A promise that is resolved once the link action has been performed.                       
             * @example FilesClient.batch.link(files)
                            .then(function (data) {   
                                // perform success action here 
                            },
                            function (response, status, headers, config) {   
                                // perform error handling here 
                            });                   
            **/
            link(data: IFileEntry[]): PromiseLike<IHttpResponse<any>> {
                return baasicApp.fileModule.batch.link(data);
            },

            /**                   
             * Returns a promise that is resolved once the unlink action has been performed. This action will remove file resources from the system if successfully completed. If derived resource's format is passed, such as `width` and `height` for the image type of file resource, the operation will remove just derived resource. Otherwise, specified file and all its accompanying derived resources will be removed from the system.                   
             * @method  
             * @param data Collection of file delete requests which uniquely identifies file resources that need to be deleted.                        
             * @returns A promise that is resolved once the unlink action has been performed. 
             * @example // Remove original file resources                
                            FilesClient.batch.unlink([{ id: '<file-id>' }])
                                .then(function (data) {   
                                    // perform success action here 
                                },
                                function (response, status, headers, config) {  
                                    // perform error handling here 
                                });		
                        // Remove derived file resources  
                            FilesClient.batch.unlink([{ id: '<file-id>', fileFormat: { width: <width>, height: <height> } }])
                                .then(function (data) {   
                                    // perform success action here 
                                },
                                function (response, status, headers, config) {   
                                    // perform error handling here 
                                });		                    
            **/
            unlink(data: Object[]): PromiseLike<IHttpResponse<void>> {
                return baasicApp.fileModule.batch.unlink(data);
            }
        };
    }

    get streams(): IFilesStreamsClient {
        let baasicApp = this.baasicApp;
        return {
            /**                     
             * Returns a promise that is resolved once the get action has been performed. Success response returns the file stream if successfully completed. If derived resource's format is passed, such as `width` and `height` for the image type of file resource, the operation will return a stream of the derived resource. Otherwise, stream of the original file resource will be retrieved.                     
             * @method
             * @param id File id of the original file resource used to identify stream that needs to be retrieved from the system.
             * @returns A promise that is resolved once the get action has been performed.                            
             * @example // Request the original file stream              
                                FilesClient.streams.get({id: '<path>'})
                                    .then(function (data) {     
                                        // perform success action here 
                                    },
                                    function (response, status, headers, config) {     
                                        // perform error handling here 
                                    });                    
                        // Request derived file stream                
                            FilesClient.streams.get({id: '<path>', width: <width>, height: <height>})
                                .then(function (data) {     
                                    // perform success action here 
                                },
                                function (response, status, headers, config) {    
                                    // perform error handling here 
                                });                     
            **/
            get(data: any): PromiseLike<IHttpResponse<any>> {
                return baasicApp.fileModule.streams.get(data);
            },

            /**                     
             * Returns a promise that is resolved once the get action has been performed. Success response returns the file stream as a blob. If derived resource's format is passed, such as `width` and `height` for the image type of file resource, the operation will return a blob of the derived file resource. Otherwise, blob of the original file resource will be retrieved. For more information on Blob objects please see [Blob Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Blob).                     
             * @method                       
             * @example // Request the original blob                
                            FilesClient.streams.getBlob('<path>')
                                .then(function (data) {     
                                    // perform success action here 
                                },
                                function (response, status, headers, config) {    
                                    // perform error handling here 
                                }); 
                        // Request derived blob                 
                            FilesClient.streams.getBlob({id: '<path>', width: <width>, height: <height>})
                                .then(function (data) {     
                                    // perform success action here 
                                },
                                function (response, status, headers, config) {     
                                    // perform error handling here 
                                });                     
            **/
            getBlob(data: any): PromiseLike<IHttpResponse<any>> {
                return baasicApp.fileModule.streams.getBlob(data);
            },

            /**                      
             * Returns a promise that is resolved once the update file stream action has been performed; this action will replace the existing stream with a new one. Alternatively, if a derived stream is being updated it will either create a new derived stream or replace the existing one. In order to update a derived stream, format needs to be passed (For example: `width` and `height` for the image type of file stream data type).                      
             * @method                     
             * @example // Update original file stream 
                            FilesClient.streams.update('<path>', <file-stream>)
                                .then(function (data) {   
                                    // perform success action here 
                                },
                                function (response, status, headers, config) {   
                                    // perform error handling here 
                                }); 
                        // Update derived file stream 
                            FilesClient.streams.update({id: '<path>', width: <width>, height: <height>}, <file-stream>)
                                .then(function (data) {   
                                    // perform success action here 
                                },
                                function (response, status, headers, config) {   
                                    // perform error handling here 
                                });                     
            **/
            update(data: any, stream: any): PromiseLike<IHttpResponse<any>> {
                return baasicApp.fileModule.streams.update(data, stream);
            },

            /**                      
             * Returns a promise that is resolved once the create file stream action has been performed; this action will upload the specified blob. For more information on Blob objects please see [Blob Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Blob).                      
             * @method                    
             * @example FilesClient.streams.create('<path>', <blob>)
                         .then(function (data) {   
                             // perform success action here 
                         },
                            function (response, status, headers, config) {   
                                // perform error handling here 
                        });                     
            **/
            create(data: any, stream: any): PromiseLike<IHttpResponse<any>> {
                return baasicApp.fileModule.streams.create(data, stream);
            }
        };
    }

    get acl(): IACLClient {
        let baasicApp = this.baasicApp;
        return {
            /**                     
             * Returns a promise that is resolved once the get action has been performed. Success response returns a list of ACL policies established for the specified file resource.                     
             * @method
             * @param options ACL options object.
             * @returns A promise that is resolved once the get action has been performed.                           
             * @example baasicFilesACLClient.get({id: '<file-id>'})
                            .then(function (data) {   
                                // perform success action here 
                            },
                            function (response, status, headers, config) {   
                                // perform error handling here 
                            });                     
            **/
            get(options?: IACLOptions): PromiseLike<IHttpResponse<IACLPolicy[]>> {
                return baasicApp.fileModule.acl.get(options);
            },

            /**                     
             * Returns a promise that is resolved once the update acl action has been performed, this action creates new ACL policy for the specified file resource.                     
             * @method
             * @param options An ACL policy object that needs to be inserted into the system. This object specifies parameters necessary for establishing user and/or role set of rights.                          
             * @example let options = {id : '<file-id>'}; 
                        let aclObj =  {  actionId: '<action-id>',  roleId: '<role-id>',  userId: '<user-id>' }; 
                        options[baasicConstants.modelPropertyName] = aclObj; 
                        baasicFilesACLClient.update(options)
                            .then(function (data) {   
                                // perform success action here 
                            },
                            function (response, status, headers, config) {   
                                // perform error handling here
                            }); 				    
            **/
            update(options: IACLOptions[]): PromiseLike<IHttpResponse<IACLPolicy[]>> {
                return baasicApp.fileModule.acl.update(options);
            },

            /**                     
             * Returns a promise that is resolved once the removeByUser action has been performed. This action deletes ACL policy assigned to the specified user and file resource.                     
             * @method
             * @param id File id which uniquely identifies file resource whose security privileges need to be retrieved and updated.
             * @param action Action abbreviation which identifies ACL policy assigned to the specified user and file resource.
             *               Supported Values:
             *               "Create"
             *               "Delete"
             *               "Read"
             *               "Update"
             * @param user A value that uniquely identifies user for which ACL policy needs to be removed.
             * @returns A promise that is resolved once the removeByUser action has been performed.             
             * @example baasicFilesACLClient.removeByUser('<file-id>', '<access-action>', '<username>')
                            .then(function (data) {   
                                // perform success action here 
                            },
                            function (response, status, headers, config) {   
                                // perform error handling here 
                            }); 				    
            **/
            removeByUser(id: string, action: string, user: string, data: IACLPolicy): PromiseLike<IHttpResponse<void>> {
                return baasicApp.fileModule.acl.removeByUser(id, action, user, data);
            },

            /**                     
             * Returns a promise that is resolved once the removeByRole action has been performed. This action deletes ACL policy assigned to the specified role and file resource.                     
             * @method                         
             * @example baasicFilesACLClient.removeByRole('<file-id>', '<access-action>', '<role-name>')
                            .then(function (data) {   
                                // perform success action here 
                            },
                            function (response, status, headers, config) {   
                                // perform error handling here 
                            }); 				    
            **/
            removeByRole(id: string, action: string, role: string, data: IACLPolicy): PromiseLike<IHttpResponse<void>> {
                return baasicApp.fileModule.acl.removeByRole(id, action, role, data);
            }
        };
    }
}