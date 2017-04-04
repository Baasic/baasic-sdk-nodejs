import { BaasicApp } from 'baasic-sdk-javascript'

import { IACLOptions, IACLPolicy, IBaasicQueryModel, IGetRequestOptions, IHttpResponse, IOptions } from '../../infrastructure/common/contracts';
import {
    ICompany,
    ICompanyClient,
    IOrganization,
    IOrganizationClient,
    IProfileAvatar,
    ISkill,
    ISkillClient,
    IUserEducation,
    IUserProfile,
    IUserProfileClient,
    IUserSkill,
    IUserWork
} from './contracts';

export class UserProfileClient {

    constructor(private baasicApp: BaasicApp) { }

    get profile(): IUserProfileClient {
        let baasicApp = this.baasicApp;
        return {
            /**                  
             * Returns a promise that is resolved once the find action has been performed. Success response returns a list of user profile resources matching the given criteria.                  
             * @method
             * @param options Query resource options object.
             * @returns A promise that is resolved once the find action has been performed.                          
             * @example UserProfileClient.profile.find({   
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
            find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IUserProfile>>> {
                return baasicApp.userProfileModule.profile.find(options);
            },

            /**                 
             * Returns a promise that is resolved once the get action has been performed. Success response returns the user profile resource.                 
             * @method 
             * @param id User profile id which uniquely identifies user profile resource that needs to be retrieved.
             * @param options Query resource options object.
             * @returns A promise that is resolved once the get action has been performed.                       
             * @example UserProfileClient.profile.get()
                            .then(function (data) {   
                                // perform success action here 
                            },
                            function (response, status, headers, config) {   
                                // perform error handling here 
                            });                 
            **/
            get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IUserProfile>> {
                return baasicApp.userProfileModule.profile.get(id, options);
            },

            /**                  
             * Returns a promise that is resolved once the create user profile action has been performed; this action creates a new user profile resource.                  
             * @method
             * @param data An user profile object that needs to be inserted into the system.
             * @returns A promise that is resolved once the create user profile action has been performed.                         
             * @example UserProfileClient.profile.create({   
                            firstName : '<first-name>',   
                            lastName : '<last-name>',   
                            displayName: '<nick-name>' 
                        }.then(function (data) {   
                            // perform success action here 
                        },
                        function (response, status, headers, config) {   
                            // perform error handling here 
                        });                  
            **/
            create(data: IUserProfile): PromiseLike<IHttpResponse<IUserProfile>> {
                return baasicApp.userProfileModule.profile.create(data);
            },

            /**                  
             * Returns a promise that is resolved once the update user profile action has been performed; this action updates a user profile resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicUserProfileRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
             * ``` 
             * let params = modelMapper.removeParams(userProfile); 
             * let uri = params['model'].links('put').href; 
             * ```                  
             * @method 
             * @param data An user profile object used to update specified user profile resource.
             * @returns A promise that is resolved once the update user profile action has been performed.                         
             * @example // userProfile is a resource previously fetched using get action. 
                             userProfile.displayName = '<nick-name>'; 
                             UserProfileClient.profile.update(userProfile)
                                 .then(function (data) {   
                                     // perform success action here 
                                 },
                                    function (response, status, headers, config) {   
                                        // perform error handling here 
                                }); 				
            **/
            update(data: IUserProfile): PromiseLike<IHttpResponse<void>> {
                return baasicApp.userProfileModule.profile.update(data);
            },

            /**                  
             * Returns a promise that is resolved once the remove action has been performed. This action will remove a user profile resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicUserProfileRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
             * ``` 
             * let params = modelMapper.removeParams(userProfile); 
             * let uri = params['model'].links('delete').href; 
             * ```                  
             * @method
             * @param data An user profile object used to delete specified user profile resource.     
             * @returns A promise that is resolved once the remove action has been performed.                        
             * @example // userProfile is a resource previously fetched using get action.				 
                            UserProfileClient.profile.remove(userProfile)
                                .then(function (data) {   
                                    // perform success action here 
                                }, 
                                function (response, status, headers, config) {   
                                    // perform error handling here 
                                });						
            **/
            remove(data: IUserProfile): PromiseLike<IHttpResponse<void>> {
                return baasicApp.userProfileModule.profile.remove(data);
            },

            acl: {
                /**                     
                 * Returns a promise that is resolved once the get action has been performed. Success response returns a list of ACL policies established for the specified user profile resource.                     
                 * @method
                 * @param options Query resource options object.
                 * @returns A promise that is resolved once the get action has been performed.                          
                 * @example UserProfileClient.profile.acl.get({id: '<profile-id>'})
                                .then(function (data) {   
                                    // perform success action here 
                                }, 
                                function (response, status, headers, config) {   
                                    // perform error handling here 
                                });                     
                **/
                get(options: IACLOptions): PromiseLike<IHttpResponse<IACLPolicy[]>> {
                    return baasicApp.userProfileModule.profile.acl.get(options);
                },

                /**                     
                 * Returns a promise that is resolved once the update acl action has been performed, this action creates new ACL policy for the specified user profile resource.                     
                 * @method
                 * @param options ACL options object.
                 * @returns A promise that is resolved once the update acl action has been performed.                          
                 * @example let options = {id : '<profile-id>'}; 
                            let aclObj =  {  actionId: '<action-id'>,  roleId: '<roleId>',  userId: '<userId>' }; 
                            options[baasicConstants.modelPropertyName] = aclObj; 
                            UserProfileClient.profile.acl.update(options)
                                .then(function (data) {   
                                    // perform success action here 
                                }, 
                                function (response, status, headers, config) {   
                                    // perform error handling here 
                                }); 				    
                **/
                update(options: IACLOptions[]): PromiseLike<IHttpResponse<IACLPolicy[]>> {
                    return baasicApp.userProfileModule.profile.acl.update(options);
                },

                /**                     
                 * Returns a promise that is resolved once the removeByUser action has been performed. This action deletes ACL policy assigned to the specified user and user profile resource.                     
                 * @method
                 * @param profileId User profile id which uniquely identifies user profile resource whose security privileges need to be retrieved and updated.
                 * @param action Action abbreviation which identifies ACL policy assigned to the specified user and user profile resource.
                 *               Supported Values:
                 *               "Create"
                 *               "Delete"
                 *               "Read"
                 *               "Update" 
                 * @param user A value that uniquely identifies user for which ACL policy needs to be removed.
                 * @param data ACL policy object used to delete specified ACL policy resource.
                 * @returns A promise that is resolved once the removeByUser action has been performed.                         
                 * @example UserProfileClient.profile.acl.removeByUser('<profile-id>', '<access-action>', '<username>')
                                .then(function (data) {   
                                    // perform success action here 
                                },
                                function (response, status, headers, config) {   
                                    // perform error handling here 
                                }); 				    
                **/
                removeByUser(profileId: string, action: string, user: string, data: IACLPolicy): PromiseLike<IHttpResponse<void>> {
                    return baasicApp.userProfileModule.profile.acl.removeByUser(profileId, action, user, data);
                },

                /**                     
                 * Returns a promise that is resolved once the removeByRole action has been performed. This action deletes ACL policy assigned to the specified role and user profile resource.                     
                 * @method 
                 * @param profileId User profile id which uniquely identifies user profile resource whose security privileges need to be retrieved and updated.
                 * @param action Action abbreviation which identifies ACL policy assigned to the specified user and user profile resource.
                 *               Supported Values:
                 *               "Create"
                 *               "Delete"
                 *               "Read"
                 *               "Update"
                 * @param role A value that uniquely identifies role for which ACL policy needs to be removed.
                 * @param data  ACL policy object used to delete specified ACL policy resource.
                 * @returns A promise that is resolved once the removeByRole action has been performed.                           
                 * @example UserProfileClient.profile.acl.removeByRole('<profile-id>', '<access-action>', '<role-name>')
                                .then(function (data) {   
                                    // perform success action here 
                                },
                                function (response, status, headers, config) {   
                                    // perform error handling here 
                                }); 				    
                **/
                removeByRole(profileId: string, action: string, role: string, data: IACLPolicy): PromiseLike<IHttpResponse<void>> {
                    return baasicApp.userProfileModule.profile.acl.removeByRole(profileId, action, role, data);
                }
            },

            education: {
                /**                  
                 * Returns a promise that is resolved once the find action has been performed. Success response returns a list of user education resources matching the given criteria.                  
                 * @method
                 * @param options Query resource options object.
                 * @returns A promise that is resolved once the find action has been performed.                         
                 * @example UserProfileClient.profile.education.find({   
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
                find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IUserEducation>>> {
                    return baasicApp.userProfileModule.profile.education.find(options);
                },

                /**                 
                 * Returns a promise that is resolved once the get action has been performed. Success response returns the user education resource.                 
                 * @method                        
                 * @example UserProfileClient.profile.education.get(id)
                                .then(function (data) {   
                                    // perform success action here 
                                }, 
                                function (response, status, headers, config) {   
                                    // perform error handling here 
                                });                 
                **/
                get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IUserEducation>> {
                    return baasicApp.userProfileModule.profile.education.get(id, options);
                },

                /**                  
                 * Returns a promise that is resolved once the create user education action has been performed; this action creates a new user education resource.                  
                 * @method 
                 * @param data An user education object that needs to be inserted into the system.
                 * @returns A promise that is resolved once the create user education action has been performed.
                 * @example UserProfileClient.profile.education.create({   
                                organizationName : '<organization-name>',   
                                summary: '<summary>',   
                                userId: '<user-id>' 
                            })
                            .then(function (data) {   
                                // perform success action here 
                            },
                            function (response, status, headers, config) {   
                                // perform error handling here 
                            });                 
                **/
                create(data: IUserEducation): PromiseLike<IHttpResponse<IUserEducation>> {
                    return baasicApp.userProfileModule.profile.education.create(data);
                },

                /**                  
                 * Returns a promise that is resolved once the update user education action has been performed; this action updates a user education resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicUserEducationRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
                 * ``` 
                 * let params = modelMapper.removeParams(education); 
                 * let uri = params['model'].links('put').href; 
                 * ```                  
                 * @method 
                 * @param data An user education object used to update specified user education resource.
                 * @returns A promise that is resolved once the update user education action has been performed.                       
                 * @example // education is a resource previously fetched using get action. 
                                education.degree = '<degree>'; 
                                UserProfileClient.profile.education.update(education)
                                    .then(function (data) {   
                                        // perform success action here 
                                    },
                                    function (response, status, headers, config) {   
                                        // perform error handling here 
                                    }); 				        
                **/
                update(data: IUserEducation): PromiseLike<IHttpResponse<void>> {
                    return baasicApp.userProfileModule.profile.education.update(data);
                },

                /**                  
                 * Returns a promise that is resolved once the remove action has been performed. This action will remove a user education resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicUserEducationRoutDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
                 * ``` 
                 * let params = modelMapper.removeParams(education); 
                 * let uri = params['model'].links('delete').href; 
                 * ```                  
                 * @method                         
                 * @example // education is a resource previously fetched using get action.				 
                                UserProfileClient.profile.education.remove(education)
                                    .then(function (data) {   
                                        // perform success action here 
                                    },
                                    function (response, status, headers, config) {   
                                        // perform error handling here 
                                    });						        
                **/
                remove(data: IUserEducation): PromiseLike<IHttpResponse<void>> {
                    return baasicApp.userProfileModule.profile.education.remove(data);
                }
            },

            avatar: {
                /**                 
                 * Returns a promise that is resolved once the get action has been performed. Success response returns requested file resource.                 
                 * @method
                 * @param id User Profile id which uniquely identifies user avatar resource that needs to be retrieved.
                 * @param options Query resource options object.
                 * @returns A promise that is resolved once the get action has been performed.                        
                 * @example UserProfileClient.profile.avatar.get('<file-id>')
                             .then(function (data) {   
                                 // perform success action here 
                             },
                                function (response, status, headers, config) {   
                                    // perform error handling here 
                            });                 
                **/
                get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IProfileAvatar>> {
                    return baasicApp.userProfileModule.profile.avatar.get(id, options);
                },

                /**                  
                 * Returns a promise that is resolved once the update file action has been performed; this action will update a file resource if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicUserProfileAvatarRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
                 * ``` 
                 * let params = modelMapper.updateParams(fileEntry); 
                 * let uri = params['model'].links('put').href; 
                 * ```                  
                 * @method
                 * @param data Avatar file object that need to be updated in the system.
                 * @returns A promise that is resolved once the update file action has been performed.                         
                 * @example // fileEntry is a file resource previously fetched using get action. 
                                 fileEntry.description = '<description>'; 
                                 UserProfileClient.profile.avatar.update(fileEntry)
                                     .then(function (data) {   
                                         // perform success action here 
                                     },
                                        function (response, status, headers, config) {   
                                    }); 				
                                            // perform error handling here 
                **/
                update(data: IProfileAvatar): PromiseLike<IHttpResponse<void>> {
                    return baasicApp.userProfileModule.profile.avatar.update(data);
                },

                /**                 
                 * Returns a promise that is resolved once the link action has been performed; this action links file resource from other modules into the Profile Files module (For example: file resources from the Media Vault module can be linked directly into the Profile Files module).                 
                 * @method
                 * @param id User Profile id which uniquely identifies user avatar resource that needs to be retrieved.
                 * @param data A profile avatar file object that need to be inserted into the system. 
                 * @returns A promise that is resolved once the link action has been performed.                       
                 * @example UserProfileClient.profile.avatar.link(fileObject)
                                .then(function (data) {  
                                    // perform success action here 
                                },
                                function (response, status, headers, config) {  
                                    // perform error handling here 
                                });                
                **/
                link(id: string, data: IProfileAvatar): PromiseLike<IHttpResponse<any>> {
                    return baasicApp.userProfileModule.profile.avatar.link(id, data);
                },

                /**                 
                 * Returns a promise that is resolved once the unlink action has been performed. This action will remove one or many file resources from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply baasicUserProfileAvatarRouteDefinition route template. Here is an example of how a route can be obtained from HAL enabled objects: 
                 * ``` 
                 * let params = modelMapper.removeParams(fileEntry); 
                 * let uri = params['model'].links('unlink').href; 
                 * ```                 
                 * @method
                 * @param data A profile avatar file object used to remove specific profile avatar from the system.
                 * @param options Query resource options object.
                 * @returns A promise that is resolved once the unlink action has been performed.                          
                 * @example // fileEntry is a file resource previously fetched using get action. The following action will remove the original file resource and all accompanying derived file resources.			 
                                UserProfileClient.profile.avatar.remove(fileEntry)
                                    .then(function (data) {  
                                        // perform success action here 
                                    },
                                    function (response, status, headers, config) {  
                                        // perform error handling here 
                                    });                
                **/
                unlink(data: IProfileAvatar, options?: any): PromiseLike<IHttpResponse<any>> {
                    return baasicApp.userProfileModule.profile.avatar.unlink(data, options);
                },

                streams: {
                    /**                     
                     * Returns a promise that is resolved once the get action has been performed. Success response returns the file stream if successfully completed. If derived resource's format is passed, such as `width` and `height` for the image type of file resource, the operation will return a stream of the derived resource. Otherwise, stream of the original file resource will be retrieved.                     
                     * @method 
                     * @param data User unique identifier.
                     * @returns A promise that is resolved once the get action has been performed.                           
                     * @example // Request the original file stream              
                                    UserProfileClient.profile.avatar.streams.get({id: '<file-id>'})
                                        .then(function (data) {     
                                            // perform success action here 
                                        },
                                        function (response, status, headers, config) {     
                                            // perform error handling here 
                                        });                    
                                    // Request derived file stream                
                                    UserProfileClient.profile.avatar.streams.get({id: '<file-id>', width: <width>, height: <height>})
                                        .then(function (data) {     
                                            // perform success action here 
                                        },
                                        function (response, status, headers, config) {     
                                            // perform error handling here 
                                        });                     
                    **/
                    get(data: any): PromiseLike<IHttpResponse<any>> {
                        return baasicApp.userProfileModule.profile.avatar.streams.get(data);
                    },

                    /**                     
                     * Returns a promise that is resolved once the get action has been performed. Success response returns the file stream as a blob. If derived resource's format is passed, such as `width` and `height` for the image type of file resource, the operation will return a blob of the derived file resource. Otherwise, blob of the original file resource will be retrieved. For more information on Blob objects please see [Blob Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Blob).                     
                     * @method                          
                     * @example // Request the original blob                
                                    UserProfileClient.profile.avatar.streams.getBlob('<file-id>')
                                        .then(function (data) {     
                                            // perform success action here 
                                        },
                                        function (response, status, headers, config) {     
                                            // perform error handling here 
                                        }); 
                                        // Request derived blob                 
                                        UserProfileClient.profile.avatar.streams.getBlob({id: '<file-id>', width: <width>, height: <height>})
                                            .then(function (data) {     
                                                // perform success action here 
                                            },
                                            function (response, status, headers, config) {     
                                                // perform error handling here 
                                            });                     
                    **/
                    getBlob(data: any): PromiseLike<IHttpResponse<any>> {
                        return baasicApp.userProfileModule.profile.avatar.streams.getBlob(data);
                    },

                    /**                     
                     * Returns a promise that is resolved once the create file stream action has been performed; this action will upload the specified blob. For more information on Blob objects please see [Blob Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Blob).                     
                     * @method
                     * @param id
                     * @param data
                     * @param stream
                     * @returns A promise that is resolved once the create file stream action has been performed.                    
                     * @example UserProfileClient.profile.avatar.streams.create('<file-id>', '<filename'>, <blob>)
                                    .then(function (data) {  
                                        // perform success action here 
                                    },
                                    function (response, status, headers, config) {  
                                        // perform error handling here 
                                    });                    
                    **/
                    create(id: string, data: any, stream: any): PromiseLike<IHttpResponse<any>> {
                        return baasicApp.userProfileModule.profile.avatar.streams.create(id, data, stream);
                    },

                    /**                     
                     * Returns a promise that is resolved once the update file stream action has been performed; this action will replace the existing stream with a new one. Alternatively, if a derived stream is being updated it will either create a new derived stream or replace the existing one. In order to update a derived stream, format needs to be passed (For example: `width` and `height` for the image type of file stream data type).                     
                     * @method
                     * @param data
                     * @param stream
                     * @returns A promise that is resolved once the update file stream action has been performed.                     
                     * @example // Update original file stream 
                                    UserProfileClient.profile.avatar.streams.update('<file-id>', <file-stream>)
                                        .then(function (data) {  
                                            // perform success action here 
                                        },
                                        function (response, status, headers, config) {  
                                            // perform error handling here 
                                        }); 
                                        // Update derived file stream 
                                        UserProfileClient.profile.avatar.streams.update({id: '<file-id>', width: <width>, height: <height>}, <file-stream>)
                                            .then(function (data) {  
                                                // perform success action here 
                                            },
                                            function (response, status, headers, config) {  
                                                // perform error handling here 
                                            });                    
                    **/
                    update(data: any, stream: any): PromiseLike<IHttpResponse<any>> {
                        return baasicApp.userProfileModule.profile.avatar.streams.update(data, stream);
                    }
                }
            },

            skill: {
                /**                  
                 * Returns a promise that is resolved once the find action has been performed. Success response returns a list of user skill resources matching the given criteria.                  
                 * @method 
                 * @param options Query resource options object.
                 * @returns A promise that is resolved once the find action has been performed.                         
                 * @example UserProfileClient.profile.skill.find({   
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
                find(options: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IUserSkill>>> {
                    return baasicApp.userProfileModule.profile.skill.find(options);
                },

                /**                 
                 * Returns a promise that is resolved once the get action has been performed. Success response returns the user skill resource.                 
                 * @method
                 * @param id User profile id or display name which uniquely identifies user profile whose skill resources need to be retrieved.
                 * @param options Query resource options object.
                 * @returns A promise that is resolved once the get action has been performed.                        
                 * @example UserProfileClient.profile.skill.get()
                                .then(function (data) {   
                                    // perform success action here 
                                }, 
                                function (response, status, headers, config) {   
                                    // perform error handling here 
                                });                 
                **/
                get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IUserSkill>> {
                    return baasicApp.userProfileModule.profile.skill.get(id, options);
                },

                /**                  
                 * Returns a promise that is resolved once the create user skill action has been performed; this action creates a new user skill resource.                  
                 * @method 
                 * @param data An user skill object that needs to be inserted into the system.
                 * @returns A promise that is resolved once the create user skill action has been performed.                       
                 * @example UserProfileClient.profile.skill.create({ skillName : '<skill-name>', userId: '<user-id>' })
                                .then(function (data) {   
                                    // perform success action here 
                                },
                                function (response, status, headers, config) {   
                                    // perform error handling here 
                                });                 
                **/
                create(data: IUserSkill): PromiseLike<IHttpResponse<IUserSkill>> {
                    return baasicApp.userProfileModule.profile.skill.create(data);
                },

                /**                  
                 * Returns a promise that is resolved once the update user skill action has been performed; this action updates a user skill resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicUserSkillRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
                 * ``` 
                 * let params = modelMapper.removeParams(skill); 
                 * let uri = params['model'].links('put').href; 
                 * ```                  
                 * @method
                 * @param data An user skill object used to update specified user skill resource.
                 * @returns A promise that is resolved once the update user skill action has been performed.
                 * @example // skill is a resource previously fetched using get action. 
                                 skill.description = '<description>'; 
                                 UserProfileClient.profile.skill.update(skill)
                                     .then(function (data) {   
                                         // perform success action here 
                                     },
                                        function (response, status, headers, config) {   
                                            // perform error handling here 
                                    }); 				        
                **/
                update(data: IUserSkill): PromiseLike<IHttpResponse<void>> {
                    return baasicApp.userProfileModule.profile.skill.update(data);
                },

                /**                  
                 * Returns a promise that is resolved once the remove action has been performed. This action will remove a user skill resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicUserSkillRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
                 * ``` 
                 * let params = modelMapper.removeParams(skill); 
                 * let uri = params['model'].links('delete').href; 
                 * ```                  
                 * @method
                 * @param data An user skill object used to delete specific user skill resource in the system.
                 * @returns A promise that is resolved once the remove action has been performed.                          
                 * @example // skill is a resource previously fetched using get action.				 
                                UserProfileClient.profile.skill.remove(skill)
                                    .then(function (data) {   
                                        // perform success action here 
                                    },
                                    function (response, status, headers, config) {   
                                        // perform error handling here 
                                    });						        
                **/
                remove(data: IUserSkill): PromiseLike<IHttpResponse<void>> {
                    return baasicApp.userProfileModule.profile.skill.remove(data);
                }
            },

            work: {
                /**                  
                 * Returns a promise that is resolved once the find action has been performed. Success response returns a list of user work resources matching the given criteria.                  
                 * @method
                 * @param options Query resource options object.
                 * @returns A promise that is resolved once the find action has been performed.                         
                 * @example UserProfileClient.profile.work.find({   
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
                find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IUserWork>>> {
                    return baasicApp.userProfileModule.profile.work.find(options);
                },

                /**                 
                 * Returns a promise that is resolved once the get action has been performed. Success response returns the user work resource.                 
                 * @method
                 * @param id User work id which uniquely identifies resource that needs to be retrieved.
                 * @param options Query resource options object.                        
                 * @example UserProfileClient.profile.work.get()
                                .then(function (data) {   
                                    // perform success action here 
                                }, 
                                function (response, status, headers, config) {   
                                    // perform error handling here 
                                });                 
                **/
                get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IUserWork>> {
                    return baasicApp.userProfileModule.profile.work.get(id, options);
                },

                /**                  
                 * Returns a promise that is resolved once the create user work action has been performed; this action creates a new user work resource.                  
                 * @method
                 * @param data An user work object that needs to be inserted into the system.
                 * @returns A promise that is resolved once the create user work action has been performed.
                 * @example UserProfileClient.profile.work.create({ companyName : '<company-name>', userId: '<user-id>' })
                                .then(function (data) {   
                                    // perform success action here 
                                },
                                function (response, status, headers, config) {   
                                    // perform error handling here 
                                });                 
                **/
                create(data: IUserWork): PromiseLike<IHttpResponse<IUserWork>> {
                    return baasicApp.userProfileModule.profile.work.create(data);
                },

                /**                 
                 * Returns a promise that is resolved once the update user work action has been performed; this action updates a user work resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicUserWorkRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
                 * ``` 
                 * let params = modelMapper.updateParams(work); 
                 * let uri = params['model'].links('put').href; 
                 * ```                  
                 * @method
                 * @param data An user work object used to update specified user work resource.
                 * @returns A promise that is resolved once the update user work action has been performed.                         
                 * @example // work is a resource previously fetched using get action. 
                                work.companyName = '<company-name>'; 
                                UserProfileClient.profile.work.update(work)
                                    .then(function (data) {   
                                        // perform success action here 
                                    },
                                    function (response, status, headers, config) {   
                                        // perform error handling here 
                                    }); 				        
                **/
                update(data: IUserWork): PromiseLike<IHttpResponse<void>> {
                    return baasicApp.userProfileModule.profile.work.update(data);
                },

                /**                  
                 * Returns a promise that is resolved once the remove action has been performed. This action will remove a user work resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicUserWorkRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
                 * ``` 
                 * let params = modelMapper.removeParams(work); 
                 * let uri = params['model'].links('delete').href; 
                 * ```                  
                 * @method                         
                 * @example // work is a resource previously fetched using get action.				 
                                 UserProfileClient.profile.work.remove(work)
                                     .then(function (data) {   
                                         // perform success action here 
                                     },
                                        function (response, status, headers, config) {   
                                            // perform error handling here 
                                    });						        
                **/
                remove(data: IUserWork): PromiseLike<IHttpResponse<void>> {
                    return baasicApp.userProfileModule.profile.work.remove(data);
                }
            }
        };
    }

    get company(): ICompanyClient {
        let baasicApp = this.baasicApp;
        return {
            /**                  
             * Returns a promise that is resolved once the find action has been performed. Success response returns a list of company resources matching the given criteria.                  
             * @method
             * @param options Query resource options object.
             * @returns A promise that is resolved once the find action has been performed.                      
             * @example UserProfileClient.company.find({   
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
            find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<ICompany>>> {
                return baasicApp.userProfileModule.company.find(options);
            },

            /**                 
             * Returns a promise that is resolved once the get action has been performed. Success response returns the company resource.                 
             * @method
             * @param id Company id which uniquely identifies resource that needs to be retrieved.
             * @returns A promise that is resolved once the get action has been performed.
             * @param options Query resource options object.                        
             * @example UserProfileClient.company.get()
                            .then(function (data) {   
                                // perform success action here 
                            },
                            function (response, status, headers, config) {   
                                // perform error handling here 
                            });                 
            **/
            get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<ICompany>> {
                return baasicApp.userProfileModule.company.get(id, options);
            },

            /**                  
             * Returns a promise that is resolved once the create company action has been performed; this action creates a new company resource.                  
             * @method
             * @param data A company object that needs to be inserted into the system.
             * @returns A promise that is resolved once the create company action has been performed.                         
             * @example UserProfileClient.company.create({   
                            description : '<description>',   
                            name : '<name>',   
                            slug: '<slug>' 
                        })
                        .then(function (data) {   
                            // perform success action here 
                        },
                        function (response, status, headers, config) {   
                            // perform error handling here 
                        });                 
            **/
            create(data: ICompany): PromiseLike<IHttpResponse<ICompany>> {
                return baasicApp.userProfileModule.company.create(data);
            },

            /**                  
             * Returns a promise that is resolved once the update company action has been performed; this action updates a company resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicCompanyRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
             * ``` 
             * let params = modelMapper.removeParams(company); 
             * let uri = params['model'].links('put').href; 
             * ```                  
             * @method
             * @param data A company object used to update specified company resource.
             * @returns A promise that is resolved once the update company action has been performed.                        
             * @example // company is a resource previously fetched using get action. 
                            company.description = '<description>'; 
                            UserProfileClient.company.update(company)
                                .then(function (data) {   
                                    // perform success action here 
                                },
                                function (response, status, headers, config) {   
                                    // perform error handling here 
                                }); 				        
            **/
            update(data: ICompany): PromiseLike<IHttpResponse<void>> {
                return baasicApp.userProfileModule.company.update(data);
            },

            /**                  
             * Returns a promise that is resolved once the remove action has been performed. This action will remove a company resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicCompanyRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
             * ``` 
             * let params = modelMapper.removeParams(company); 
             * let uri = params['model'].links('delete').href; 
             * ```                  
             * @method
             * @param data A company object used to delete specified company resource.
             * @returns A promise that is resolved once the remove action has been performed.                          
             * @example // company is a resource previously fetched using get action.				 
                            UserProfileClient.company.remove(company)
                                .then(function (data) {   
                                    // perform success action here 
                                },
                                function (response, status, headers, config) {   
                                    // perform error handling here 
                            });						        
            **/
            remove(data: ICompany): PromiseLike<IHttpResponse<void>> {
                return baasicApp.userProfileModule.company.remove(data);
            },

            batch: {
                /**                   
                 * Returns a promise that is resolved once the create company action has been performed; this action creates new company resources.                   
                 * @method
                 * @param data A collection of company objects that need to be inserted into the system.
                 * @returns A promise that is resolved once the create company action has been performed.                          
                 * @example  UserProfileClient.company.batch.create([{     
                                description : '<description>',     
                                name : '<name>',     
                                slug: '<slug>'   
                            }])
                            .then(function (data) {     
                                // perform success action here   
                            },
                            function (response, status, headers, config) {     
                                // perform error handling here   
                            });                   
                **/
                create(data: ICompany[]): PromiseLike<IHttpResponse<any>> {
                    return baasicApp.userProfileModule.company.batch.create(data);
                },

                /**                   
                 * Returns a promise that is resolved once the update company action has been performed; this action updates specified company resources.                   
                 * @method
                 * @param data A collection of company objects used to update specified company resources.
                 * @returns A promise that is resolved once the update company action has been performed.                         
                 * @example   UserProfileClient.company.batch.update(companies)
                                .then(function (data) {     
                                    // perform success action here   
                                },
                                function (response, status, headers, config) {     
                                    // perform error handling here   
                                });                   
                **/
                update(data: ICompany[]): PromiseLike<IHttpResponse<any>> {
                    return baasicApp.userProfileModule.company.batch.update(data);
                },

                /**                   
                 * Returns a promise that is resolved once the remove action has been performed. This action will remove company resources from the system if successfully completed.                   
                 * @method
                 * @param ids Collection of company ids which uniquely identifies company resources that need to be deleted.
                 * @returns A promise that is resolved once the remove action has been performed.                          
                 * @example UserProfileClient.company.batch.remove(companyIds)
                             .then(function (data) {     
                                 // perform success action here   
                             }, 
                                function (response, status, headers, config) {     
                                    // perform error handling here   
                            });		                  
                **/
                remove(ids: string[]): PromiseLike<IHttpResponse<any>> {
                    return baasicApp.userProfileModule.company.batch.remove(ids);
                }
            }
        };
    }

    get organization(): IOrganizationClient {
        let baasicApp = this.baasicApp;
        return {
            /**                  
             * Returns a promise that is resolved once the find action has been performed. Success response returns a list of organization resources matching the given criteria.                  
             * @method
             * @param options Query resource options object. 
             * @returns A promise that is resolved once the find action has been performed.                      
             * @example UserProfileClient.organization.find({   
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
            find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IOrganization>>> {
                return baasicApp.userProfileModule.organization.find(options);
            },

            /**                 
             * Returns a promise that is resolved once the get action has been performed. Success response returns the organization resource.                 
             * @method
             * @param id Organization id which uniquely identifies resource that needs to be retrieved.
             * @param options Query resource options object.
             * @returns A promise that is resolved once the get action has been performed.                       
             * @example UserProfileClient.organization.get(id, options)
                            .then(function (data) {   
                                // perform success action here 
                            },
                            function (response, status, headers, config) {   
                                // perform error handling here 
                            });                 
            **/
            get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IOrganization>> {
                return baasicApp.userProfileModule.organization.get(id, options);
            },

            /**                  
             * Returns a promise that is resolved once the create organization action has been performed; this action creates a new organization resource.                  
             * @method
             * @param data An organization object that needs to be inserted into the system.
             * @returns A promise that is resolved once the create organization action has been performed.                          
             * @example UserProfileClient.organization.create({   
                            description : '<description>',   
                            name : '<name>',   
                            slug: '<slug>' 
                        })
                        .then(function (data) {   
                            // perform success action here 
                        },
                        function (response, status, headers, config) {   
                            // perform error handling here 
                        });                 
            **/
            create(data: IOrganization): PromiseLike<IHttpResponse<IOrganization>> {
                return baasicApp.userProfileModule.organization.create(data);
            },

            /**                  
             * Returns a promise that is resolved once the update organization action has been performed; this action updates an organization resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicOrganizationRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
             * ``` 
             * let params = modelMapper.removeParams(organization); 
             * let uri = params['model'].links('put').href; 
             * ```                  
             * @method
             * @param data An organization object used to update specified organization resource.
             * @returns A promise that is resolved once the update organization action has been performed.                         
             * @example // organization is a resource previously fetched using get action. 
                            organization.description = '<description>'; 
                            UserProfileClient.organization.update(organization)
                                .then(function (data) {   
                                    // perform success action here 
                                }, 
                                function (response, status, headers, config) {   
                                    // perform error handling here 
                                }); 				        
            **/
            update(data: IOrganization): PromiseLike<IHttpResponse<void>> {
                return baasicApp.userProfileModule.organization.update(data);
            },

            /**                  
             * Returns a promise that is resolved once the remove action has been performed. This action will remove an organization resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicOrganizationRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
             * ``` 
             * let params = modelMapper.removeParams(organization); 
             * let uri = params['model'].links('delete').href; 
             * ```                  
             * @method
             * @param data An organization object used to delete specified organization resource.
             * @returns A promise that is resolved once the remove action has been performed.                         
             * @example // organization is a resource previously fetched using get action.				 
                             UserProfileClient.organization.remove(organization)
                                 .then(function (data) {   
                                     // perform success action here 
                                 },
                                    function (response, status, headers, config) {   
                                        // perform error handling here 
                                });						        
            **/
            remove(data: IOrganization): PromiseLike<IHttpResponse<void>> {
                return baasicApp.userProfileModule.organization.remove(data);
            },

            batch: {
                /**                   
                 * Returns a promise that is resolved once the create organization action has been performed; this action creates new organization resources.                   
                 * @method
                 * @param data A collection of organization objects that need to be inserted into the system.
                 * @returns A promise that is resolved once the create organization action has been performed.                          
                 * @example   UserProfileClient.organization.batch.create([{     
                                description : '<description>',     
                                name : '<name>',     
                                slug: '<slug>'   
                            }])
                            .then(function (data) {     
                                // perform success action here   
                            }, 
                                function (response, status, headers, config) {     
                                    // perform error handling here   
                            });                   
                **/
                create(data: IOrganization[]): PromiseLike<IHttpResponse<any>> {
                    return baasicApp.userProfileModule.organization.batch.create(data);
                },

                /**                   
                 * Returns a promise that is resolved once the update organization action has been performed; this action updates specified organization resources.                   
                 * @method
                 * @param data A collection of organization objects used to update specified organization resources.
                 * @returns A promise that is resolved once the update organization action has been performed.                         
                 * @example   UserProfileClient.organization.batch.update(organizations)
                                .then(function (data) {     
                                    // perform success action here   
                                }, 
                                function (response, status, headers, config) {     
                                    // perform error handling here   
                                });                   
                **/
                update(data: IOrganization[]): PromiseLike<IHttpResponse<void>> {
                    return baasicApp.userProfileModule.organization.batch.update(data);
                },

                /**                   
                 * Returns a promise that is resolved once the remove action has been performed. This action will remove organization resources from the system if successfully completed.                   
                 * @method                         
                 * @example UserProfileClient.organization.batch.remove(organizationIds)
                                .then(function (data) {     
                                    // perform success action here   
                                },
                                function (response, status, headers, config) {     
                                    // perform error handling here   
                                });		                  
                **/
                remove(ids: string[]): PromiseLike<IHttpResponse<void>> {
                    return baasicApp.userProfileModule.organization.batch.remove(ids);
                }
            }
        };
    }

    get skill(): ISkillClient {
        let baasicApp = this.baasicApp;
        return {
            /**                  
             * Returns a promise that is resolved once the find action has been performed. Success response returns a list of skill resources matching the given criteria.                  
             * @method
             * @param options Query resource options object.
             * @returns A promise that is resolved once the find action has been performed.                         
             * @example UserProfileClient.skill.find({   
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
            find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<ISkill>>> {
                return baasicApp.userProfileModule.skill.find(options);
            },

            /**                 
             * Returns a promise that is resolved once the get action has been performed. Success response returns the skill resource.                 
             * @method
             * @param id Skill id which uniquely identifies skill resource that needs to be retrieved.
             * @param options Query resource options object.                        
             * @example UserProfileClient.skill.get(id, options)
                            .then(function (data) {   
                                // perform success action here 
                            },
                            function (response, status, headers, config) {   
                                // perform error handling here 
                            });                 
            **/
            get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<ISkill>> {
                return baasicApp.userProfileModule.skill.get(id, options);
            },

            /**                  
             * Returns a promise that is resolved once the create skill action has been performed; this action creates a new skill resource.                  
             * @method
             * @param data A skill object that needs to be inserted into the system.
             * @returns A promise that is resolved once the create skill action has been performed.                         
             * @example UserProfileClient.skill.create({   
                            description : '<description>',   
                            name : '<name>',   
                            slug: '<slug>' 
                        })
                        .then(function (data) {   
                            // perform success action here 
                        },
                        function (response, status, headers, config) {   
                            // perform error handling here 
                        });                 
            **/
            create(data: ISkill): PromiseLike<IHttpResponse<ISkill>> {
                return baasicApp.userProfileModule.skill.create(data);
            },

            /**                  
             * Returns a promise that is resolved once the update skill action has been performed; this action updates a skill resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicSkillRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
             * ``` 
             * let params = modelMapper.removeParams(skill); 
             * let uri = params['model'].links('put').href; 
             * ```                  
             * @method
             * @param data A skill object used to update specified skill resource.
             * @returns A promise that is resolved once the update skill action has been performed.                          
             * @example // skill is a resource previously fetched using get action. 
                            skill.description = '<description>'; 
                            UserProfileClient.skill.update(skill)
                                .then(function (data) {   
                                    // perform success action here 
                                },
                                function (response, status, headers, config) {   
                                    // perform error handling here 
                                }); 				       
            **/
            update(data: ISkill): PromiseLike<IHttpResponse<void>> {
                return baasicApp.userProfileModule.skill.update(data);
            },

            /**                  
             * Returns a promise that is resolved once the remove action has been performed. This action will remove a skill resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicSkillRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
             * ``` 
             * let params = modelMapper.removeParams(skill); 
             * let uri = params['model'].links('delete').href; 
             * ```                  
             * @method
             * @param A skill object used to delete specified skill resource.
             * @returns A promise that is resolved once the remove action has been performed.                          
             * @example // skill is a resource previously fetched using get action.				 
                             UserProfileClient.skill.remove(skill)
                                 .then(function (data) {   
                                     // perform success action here 
                                 }, 
                                    function (response, status, headers, config) {   
                                        // perform error handling here 
                                });						        
            **/
            remove(data: ISkill): PromiseLike<IHttpResponse<void>> {
                return baasicApp.userProfileModule.skill.remove(data);
            },

            batch: {
                /**                   
                 * Returns a promise that is resolved once the create skill action has been performed; this action creates new skill resources.                   
                 * @method
                 * @param data A collection of skill objects that need to be inserted into the system.
                 * @returns A promise that is resolved once the create skill action has been performed.                         
                 * @example   UserProfileClient.skill.batch.create([{     
                                description : '<description>',     
                                name : '<name>',     
                                slug: '<slug>'   
                            }])
                            .then(function (data) {     
                                // perform success action here   
                            }, 
                                function (response, status, headers, config) {     
                                    // perform error handling here   
                            });                   
                **/
                create(data: ISkill[]): PromiseLike<IHttpResponse<any>> {
                    return baasicApp.userProfileModule.skill.batch.create(data);
                },

                /**                   
                 * Returns a promise that is resolved once the update skill action has been performed; this action updates specified skill resources.                   
                 * @method
                 * @param data A collection of skill objects used to update specified skill resources.
                 * @returns A promise that is resolved once the update skill action has been performed.                         
                 * @example   UserProfileClient.skill.batch.update(companies)
                                .then(function (data) {     
                                    // perform success action here   
                                }, 
                                function (response, status, headers, config) {     
                                    // perform error handling here   
                                });                   
                **/
                update(data: ISkill[]): PromiseLike<IHttpResponse<void>> {
                    return baasicApp.userProfileModule.skill.batch.update(data);
                },

                /**                   
                 * Returns a promise that is resolved once the remove action has been performed. This action will remove skill resources from the system if successfully completed.                   
                 * @method
                 * @param ids Collection of skill ids which uniquely identifies skill resources that need to be deleted.
                 * @returns A promise that is resolved once the remove action has been performed.                        
                 * @example UserProfileClient.skill.batch.remove(skillIds)
                                .then(function (data) {     
                                    // perform success action here   
                                }, 
                                function (response, status, headers, config) {     
                                    // perform error handling here   
                                });		                  
                **/
                remove(ids: string[]): PromiseLike<IHttpResponse<void>> {
                    return baasicApp.userProfileModule.skill.batch.remove(ids);
                }
            }
        };
    }
}