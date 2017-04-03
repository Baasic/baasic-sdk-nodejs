import { BaasicAppClient } from '../index'

import { IBaasicQueryModel, IGetRequestOptions, IHttpResponse, IOptions } from '../../infrastructure/common/contracts';
import {
    IMediaEntry,
    IMediaVaultBatchClient,
    IMediaVaultProcessingProviderSettingsClient,
    IMediaVaultSettingsClient,
    IMediaVaultStreamsClient,
    IMediaVaultSettings,
    IPreprocessingProviderSettings
} from './contracts';

export class MediaVaultClient {

    constructor(private baasicApp: BaasicAppClient) { }

    /**                  
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of media vault resources matching the given criteria.                  
     * @method
     * @param options Query resource options object.
     * @returns A promise that is resolved once the find action has been performed.                          
     * @example MediaVaultClient.find({
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
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IMediaEntry>>> {
        return this.baasicApp.mediaVaultModule.find(options);
    }

    /**                 
    * Returns a promise that is resolved once the get action has been performed. Success response returns requested media vault resource.                 
    * @method
    * @param id Media vault id which uniquely identifies media vault resource that needs to be retrieved.
    * @param options Query resource options object.
    * @returns A promise that is resolved once the get action has been performed.                         
    * @example MediaVaultClient.get('<media-vault-id>')
                   .then(function (data) {   
                       // perform success action here 
                   },
                    function (response, status, headers, config) {   
                        // perform error handling here 
                   });                 
    **/
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IMediaEntry>> {
        return this.baasicApp.mediaVaultModule.get(id, options);
    }

    /**                  
     * Returns a promise that is resolved once the update media vault action has been performed; this action will update a media vault resource if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicMediaVaultRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.updateParams(mediaVaultEntry); 
     * let uri = params['model'].links('put').href; 
     * ```                  
     * @method
     * @param data A media vault object used to update specified media vault resource.
     * @returns A promise that is resolved once the update media vault action has been performed.                          
     * @example // mediaVaultEntry is a media vault resource previously fetched using get action. 
                    mediaVaultEntry.description = '<description>'; 
                    MediaVaultClient.update(mediaVaultEntry)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                             // perform error handling here 
                        }); 				
     **/
    update(data: IMediaEntry): PromiseLike<IHttpResponse<void>> {
        return this.baasicApp.mediaVaultModule.update(data);
    }

    /**                  
     * Returns a promise that is resolved once the remove action has been performed. This action will remove one or many media vault resources from the system if successfully completed. If derived resource's format is passed, such as `width` and `height` for the image type of media vault resource, the operation will remove just derived resource. Otherwise, specified media vault and all its accompanying derived resources will be removed from the system. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply baasicMediaVaultRouteClient route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(mediaVaultEntry); 
     * let uri = params['model'].links('delete').href; 
     * ```                  
     * @method 
     * @param data Media vault object used to delete specific Media vault resource from the system.
     * @param options Options object.                        
     * @example // mediaVaultEntry is a media vault resource previously fetched using get action. The following action will remove the original media vault resource and all accompanying derived media vault resources.		
                   MediaVaultClient.remove(mediaVaultEntry)
                       .then(function (data) {   
                           // perform success action here 
                       },
                        function (response, status, headers, config) {   
                            // perform error handling here 
                       }); 
               // mediaVaultEntry is a media vault resource previously fetched using get action. The following action will remove derived media vault resource only.		 
                   MediaVaultClient.remove(mediaVaultEntry, {width: <width>, height: <height>})
                       .then(function (data) {   
                           // perform success action here 
                       },
                        function (response, status, headers, config) {   
                            // perform error handling here 
                       });						
    **/
    remove(data: IMediaEntry, options: Object): PromiseLike<IHttpResponse<void>> {
        return this.baasicApp.mediaVaultModule.remove(data, options);
    }

    get batch(): IMediaVaultBatchClient {
        let baasicApp = this.baasicApp;
        return {
            /**                   
             * Returns a promise that is resolved once the update action has been performed; this action updates specified media vault resources.                   
             * @method
             * @param data A collection of media vault objects used to update specified media vault resources.
             * @returns A promise that is resolved once the update action has been performed.                          
             * @example MediaVaultClient.batch.update(files)
                         .then(function (data) {   
                             // perform success action here 
                         },
                            function (response, status, headers, config) {   
                                // perform error handling here 
                        });                   
            **/
            update(data: IMediaEntry[]): PromiseLike<IHttpResponse<void>> {
                return baasicApp.mediaVaultModule.batch.update(data);
            },

            /**                   
             * Returns a promise that is resolved once the remove action has been performed. This action will remove media vault resources from the system if successfully completed. If derived resource's format is passed, such as `width` and `height` for the image type of media vault resource, the operation will remove just derived resource. Otherwise, specified media vault and all its accompanying derived resources will be removed from the system.                   
             * @method
             * @param data Collection of media vault delete requests which uniquely identifies media vault resources that need to be deleted.                         
             * @example // Remove original media vault resources		 
                                MediaVaultClient.batch.remove([{ id: '<media-vault-id>' }])
                                    .then(function (data) {   
                                        // perform success action here 
                                    },
                                    function (response, status, headers, config) {   
                                        // perform error handling here 
                                    });	
                        // Remove derived media vault resources		 
                                MediaVaultClient.batch.remove([{ id: '<media-vault-id>', fileFormat: { width: <width>, height: <height> } }])
                                    .then(function (data) {   
                                        // perform success action here 
                                    },
                                    function (response, status, headers, config) {   
                                        // perform error handling here 
                                    });	  	                  
            **/
            remove(data: any[]): PromiseLike<IHttpResponse<void>> {
                return baasicApp.mediaVaultModule.batch.remove(data);
            }
        };
    }

    get streams(): IMediaVaultStreamsClient {
        let baasicApp = this.baasicApp;
        return {
            /**                     
             * Returns a promise that is resolved once the get action has been performed. Success response returns the media vault stream if successfully completed. If derived resource's format is passed, such as `width` and `height` for the image type of media vault resource, the operation will return a stream of the derived resource. Otherwise, stream of the original media vault resource will be retrieved.                     
             * @method                            
             * @example // Request the original media vault stream   
                                MediaVaultClient.streams.get('<path>')
                                    .then(function (data) {     
                                        // perform success action here 
                                    },
                                    function (response, status, headers, config) {     
                                        // perform error handling here 
                                    }); 
                        // Request derived media vault stream 
                                MediaVaultClient.streams.get({id: '<path>', width: <width>, height: <height>})
                                    .then(function (data) {     
                                        // perform success action here 
                                    },
                                    function (response, status, headers, config) {     
                                        // perform error handling here 
                                    });                     
            **/
            get(data: any): PromiseLike<IHttpResponse<any>> {
                return baasicApp.mediaVaultModule.streams.get(data);
            },

            /**                     
             * Returns a promise that is resolved once the get action has been performed. Success response returns the media vault stream as a blob. If derived resource's format is passed, such as `width` and `height` for the image type of media vault resource, the operation will return a blob of the derived media vault resource. Otherwise, blob of the original media vault resource will be retrieved. For more information on Blob objects please see [Blob Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Blob).                     
             * @method                            
             * @example // Request the original blob   
                                MediaVaultClient.streams.getBlob('<path>')
                                    .then(function (data) {   
                                        // perform success action here 
                                    },
                                    function (response, status, headers, config) {     
                                        // perform error handling here 
                                    }); 
                        // Request derived blob   
                                MediaVaultClient.streams.getBlob({id: '<path>', width: <width>, height: <height>})
                                    .then(function (data) {     
                                        // perform success action here 
                                    },
                                    function (response, status, headers, config) {     
                                        // perform error handling here 
                                    });                     
            **/
            getBlob(data: any): PromiseLike<IHttpResponse<any>> {
                return baasicApp.mediaVaultModule.streams.getBlob(data);
            },

            /**                      
             * Returns a promise that is resolved once the create media vault stream action has been performed; this action will upload the specified blob. For more information on Blob objects please see [Blob Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Blob).                      
             * @method                   
             * @example MediaVaultClient.streams.create('<path>', <blob>)
                            .then(function (data) {   
                                // perform success action here 
                            },
                            function (response, status, headers, config) {   
                                // perform error handling here
                            });                     
            **/
            create(data: any, stream: any): PromiseLike<IHttpResponse<any>> {
                return baasicApp.mediaVaultModule.streams.create(data, stream);
            },

            /**                      
             * Returns a promise that is resolved once the update media vault stream action has been performed; this action will replace the existing stream with a new one. Alternatively, if a derived stream is being updated it will either create a new derived stream or replace the existing one. In order to update a derived stream, format needs to be passed (For example: `width` and `height` for the image type of media vault stream data type).                      
             * @method                      
             * @example // Update existing original media vault stream 
                                MediaVaultClient.streams.update('<path>', <media-vault-stream>)
                                    .then(function (data) {   
                                        // perform success action here 
                                    },
                                    function (response, status, headers, config) {   
                                        // perform error handling here 
                                    }); 
                        // Update derived media vault stream 
                            MediaVaultClient.streams.update({id: '<path>', width: <width>, height: <height>}, <media-vault-stream>)
                                .then(function (data) {   
                                    // perform success action here 
                                },
                                function (response, status, headers, config) {   
                                    // perform error handling here 
                                });                     
            **/
            update(data: any, stream: any): PromiseLike<IHttpResponse<any>> {
                return baasicApp.mediaVaultModule.streams.update(data, stream);
            }
        };
    }

    get settings(): IMediaVaultSettingsClient {
        let baasicApp = this.baasicApp;
        return {
            /**                     
            * Returns a promise that is resolved once the get action has been performed. Success response returns media vault settings resource.                     
            * @method    
            * @returns A promise that is resolved once the get action has been performed.                        
            * @example MediaVaultClient.settings.get()
                           .then(function (data) {     
                               // perform success action here 
                           },
                           function (response, status, headers, config) {     
                               // perform error handling here 
                           });                     
           **/
            get(): PromiseLike<IHttpResponse<IMediaVaultSettings>> {
                return baasicApp.mediaVaultModule.settings.get();
            },

            /**                   
             * Returns a promise that is resolved once the update action has been performed; this action updates the media vault settings resource.                   
             * @method    
             * @param data A media vault settings object used to update media vault settings in the system.
             * @returns A promise that is resolved once the update action has been performed.                    
             * @example MediaVaultClient.settings.update(mediaVaultSettings)
                            .then(function (data) {   
                                // perform success action here 
                            },
                            function (response, status, headers, config) {   
                                // perform error handling here 
                            });                   
            **/
            update(data: IMediaVaultSettings): PromiseLike<IHttpResponse<void>> {
                return baasicApp.mediaVaultModule.settings.update(data);
            }
        };
    }

    get processingProviderSettings(): IMediaVaultProcessingProviderSettingsClient {
        let baasicApp = this.baasicApp;
        return {
            /**                    
             * Returns a promise that is resolved once the find action has been performed. Success response returns a list of media vault processing providers matching the given criteria.                    
             * @method 
             * @param options Query resource options object.
             * @returns A promise that is resolved once the find action has been performed.                          
             * @example MediaVaultClient.processingProviderSettings.find({   
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
            find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IPreprocessingProviderSettings>>> {
                return baasicApp.mediaVaultModule.processingProviderSettings.find(options);
            },

            /**                   
             * Returns a promise that is resolved once the get action has been performed. Success response returns the media vault processing provider resource.                   
             * @method       
             * @param id Preprocessing provider id which uniquely identifies preprocessing provider whose settings need to be retrieved.
             * @param options Query resource options object.
             * @returns A promise that is resolved once the get action has been performed.                   
             * @example MediaVaultClient.processingProviderSettings.get('<id>')
                            .then(function (data) {   
                                // perform success action here 
                            },
                            function (response, status, headers, config) {   
                                // perform error handling here 
                            });                   
            **/
            get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IPreprocessingProviderSettings>> {
                return baasicApp.mediaVaultModule.processingProviderSettings.get(id, options);
            },

            /**                   
             * Returns a promise that is resolved once the update action has been performed; this action updates a media vault processing provider setting resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicMediaVaultProcessingProviderSettingsRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
             * ``` 
             * let params = modelMapper.updateParams(processingProviderSetting); 
             * let uri = params['model'].links('put').href; 
             * ```                   
             * @method
             * @param data A media vault preprocessing provider settings object used to update specified media vault preprocessing provider settings in the system.
             * @returns A promise that is resolved once the update action has been performed.                          
             * @example // processingProviderSettings is a resource previously fetched using get action. 
                            processingProviderSettings.settings.faceDetection = true; 
                            MediaVaultClient.processingProviderSettings.update(processingProviderSetting)
                                .then(function (data) {   
                                    // perform success action here 
                                },
                                function (response, status, headers, config) {   
                                    // perform error handling here 
                                }); 			
            **/
            update(data: IPreprocessingProviderSettings): PromiseLike<IHttpResponse<void>> {
                return baasicApp.mediaVaultModule.processingProviderSettings.update(data);
            }
        };
    }
}