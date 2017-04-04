import { BaasicApp } from 'baasic-sdk-javascript'

import { IBaasicQueryModel, IGetRequestOptions, IHttpResponse, IOptions } from '../../infrastructure/common/contracts';
import {
    IAccessAction,
    IAccessPolicy,
    IAppUser,
    ILoginClient,
    ILoginSocialClient,
    ILookup,
    ILookupClient,
    INewPassword,
    INewUser,
    IPasswordRecoveryClient,
    IPermissionClient,
    IRegisterClient,
    IRegisterUser,
    IResetPassword,
    IRequestPasswordReset,
    IRole,
    IRoleClient,
    ISocialLogin,
    IUserInfo,
    IUserClient,
    IUserSocialLogin
} from './contracts';

export class MembershipClient {

    constructor(private baasicApp: BaasicApp) { }

    get login(): ILoginClient {
        let baasicApp = this.baasicApp;
        return {
            /**                  
             * Returns a promise that is resolved once the login action has been performed. This action logs user into the application and success response returns the token resource.                  
             * @method                         
             * @example baasicLoginClient.login({   
                            username : '<username>',   
                            password : '<password>',   
                            options : ['session', 'sliding'] 
                        })
                        .then(function (data) {   
                            // perform success actions here 
                        },
                        function (data, status) {   
                            // perform error handling here 
                        })
                        .finally (function () {});                        
            **/
            login(data: any): PromiseLike<any> {
                return baasicApp.membershipModule.login.login(data);
            },

            /** 				
             * Returns a promise that is resolved once the loadUserData action has been performed. This action retrieves the account information of the currently logged in user. Retrieved account information will contain permission collection which identifies access policies assigned to the user and application sections. 				
             * @method 				
             * @example MembershipClient.login.loadUserData()
                            .then(function (data) {   
                                // perform success actions here 
                            },
                            function (data) {   
                                // perform error handling here 
                            })
                            .finally (function () {});							
            */
            loadUserData(data: any): PromiseLike<IUserInfo> {
                return baasicApp.membershipModule.login.loadUserData(data);
            },

            /** 				
             * Returns a promise that is resolved once the logout action has been performed. This action invalidates user token logging the user out of the system. 				
             * @method
             * @param token Authentication token which uniquely identifies user that needs to be logged out from the system.
             * @param type Token type.
             * @returns A promise that is resolved once the logout action has been performed.  				
             * @example let token = baasicAuthorizationClient.getAccessToken(); 
                        MembershipClient.login.logout(token.access_token, token.token_type)
                        .then(function (data) {   
                            // perform success handling here 
                        }, function() {
                            // perform error handling here
                        }) 
                        .finally (function () {});								
            */
            logout(token: string, type: string): PromiseLike<void> {
                return baasicApp.membershipModule.login.logout(token, type);
            }
        };
    }

    get loginSocial(): ILoginSocialClient {
        let baasicApp = this.baasicApp;
        return {
            /**                     
             * Returns a promise that is resolved once the get action has been performed. Success response returns a resolved social login provider Url.                     
             * @method
             * @param provider Provider name or id for which the login URL should be generated.
             * @param returnUrl Redirect Uri for the provider which will be used when the user is redirected back to the application.
             * @returns A promise that is resolved once the get action has been performed.                     
             * @example MembershipClient.loginSocial.get('<provider>', '<returnUrl>')
                            .then(function (collection) {   
                                // perform success action here 
                            },
                            function (response, status, headers, config) {   
                                // perform error handling here 
                            });                     
            **/
            get(provider: string, returnUrl: string): PromiseLike<IHttpResponse<any>> {
                return baasicApp.membershipModule.loginSocial.get(provider, returnUrl);
            },

            /**                     
             * Returns a promise that is resolved once the post action has been performed. This action logs user into the application and success response returns the token resource.                     
             * @method
             * @param provider Provider name or Id which uniquely identifies social login for which access token should be issued.
             * @param data Object used to identify social login information.
             * @param options Comma separated list of additional options defining token behavior. Supported values are: "session" and "sliding".                     
             * @example let postData = {   
                            email : '<email>',   
                            code:'<code>',   
                            activationUrl : '<activationUrl>',   
                            oAuthToken : '<oAuthToken>',   
                            oAuthVerifier : '<oAuthVerifier>',   
                            password : '<password>',   
                            returnUrl : '<returnUrl>' 
                        };                    
                        MembershipClient.loginSocial.post('<provider>', postData)
                            .then(function (collection) {  
                                // perform success action here 
                            },
                            function (response, status, headers, config) {   
                                // perform error handling here 
                            });                     
            **/
            post(provider: string, data: ISocialLogin, options?: any): PromiseLike<void> {
                return baasicApp.membershipModule.loginSocial.post(provider, data, options);
            },

            parseResponse(provider: string, returnUrl: string): any {
                return baasicApp.membershipModule.loginSocial.parseResponse(provider, returnUrl);
            }
        };
    }

    get passwordRecovery(): IPasswordRecoveryClient {
        let baasicApp = this.baasicApp;
        return {
            /** 				
             * Returns a promise that is resolved once the password recovery requestReset action is completed. This action initiates the password recovery process for the user.			
             * @method
             * @param data A password recovery object which contains parameters required for the password retrieval request. 	 				
             * @example MembershipModule.passwordRecovery.requestReset({ 
                            challengeIdentifier : '<challenge-identifier>',   
                            challengeResponse : '<challenge-response>',   
                            recoverUrl : '<recover-url>',   
                            username : '<username>' 
                        })
                        .then(function () {   
                            // perform success action here 
                        },
                        function (data) {   
                            // perform error handling here 
                        })
                        .finally (function () {});								
            */
            requestReset(data: IRequestPasswordReset): PromiseLike<IHttpResponse<any>> {
                return baasicApp.membershipModule.passwordRecovery.requestReset(data);
            },

            /** 				
             * Returns a promise that is resolved once the password reset action is completed. This updates user's password selection. 		
             * @method
             * @param data Password recovery object used to update user's current password selection.		 				
             * @example MembershipModule.passwordRecovery.reset({   
                            newPassword : '<new-password>',   
                            passwordRecoveryToken : '<password-recovery-token>' 
                        })
                        .then(function () {   
                            // perform success action here 
                        },
                        function (data) {   
                            // perform error handling here 
                        })
                        .finally (function () {});							
            */
            reset(data: IResetPassword): PromiseLike<IHttpResponse<any>> {
                return baasicApp.membershipModule.passwordRecovery.reset(data);
            }
        };
    }

    get register(): IRegisterClient {
        let baasicApp = this.baasicApp;
        return {
            /**                 
             * Returns a promise that is resolved once the register create has been performed. This action will create a new user if completed successfully. Created user is not approved immediately, instead an activation e-mail is sent to the user. 
             * @param data A user account object that needs to be inserted into the system.                
             * @method                        
             * @example MembershipModule.register.create({   
                            activationUrl : '<activation-url>',   
                            challengeIdentifier : '<challenge-identifier>',   
                            challengeResponse : '<challenge-response>',   
                            confirmPassword : '<confirm-password>',   
                            email : '<email>',   
                            password : '<password>',   
                            username : '<username>' 
                        })
                        .success(function (data) {   
                            // perform success actions here 
                        }).error(function (data, status) {   
                            // perform error handling here 
                        })
                        .finally (function () {});                 
            **/
            create(data: IRegisterUser): PromiseLike<IHttpResponse<IAppUser>> {
                return baasicApp.membershipModule.register.create(data);
            },

            /**                 
             * Returns a promise that is resolved once the account activation action has been performed; this action activates a user account and success response returns the token resource.      
             * @param data Security code which uniquely identifies user account that needs to be activated.
             * @returns A promise that is resolved once the account activation action has been performed.           
             * @method                        
             * @example MembershipModule.register.activate({   
                         activationToken : '<activation-token>' 
                     })
                     .then(function (data) {   
                         // perform success actions here 
                     },
                        function (data, status) {   
                        // perform error handling here 
                    })
                    .finally (function () {});                 
            **/
            activate(data: string): PromiseLike<any> {
                return baasicApp.membershipModule.register.activate(data);
            }
        };
    }

    get role(): IRoleClient {
        let baasicApp = this.baasicApp;
        return {
            /**                  
             * Returns a promise that is resolved once the find action has been performed. Success response returns a list of role resources matching the given criteria.              
             * @method
             * @param options Query resource options object. 
             * @returns A promise that is resolved once the find action has beend performed.                            
             * @example MembershipClient.role.find({   
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
            find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IRole>>> {
                return baasicApp.membershipModule.role.find(options);
            },

            /**                  
             * Returns a promise that is resolved once the get action has been performed. Success response returns the specified role resource.    
             * @param id Role unique indentifer.
             * @param options Query resource options object.
             * @returns A promise that is resolved once the get action has been performed.              
             * @method                         
             * @example MembershipClient.role.get('<role-id>')
                            .then(function (data) {   
                                // perform success action here 
                            },
                            function (response, status, headers, config) {   
                                // perform error handling here 
                            });                  
            **/
            get(id: string, options?: IOptions): PromiseLike<IHttpResponse<IRole>> {
                return baasicApp.membershipModule.role.get(id, options);
            },

            /**                  
             * Returns a promise that is resolved once the create action has been performed; this action creates a role.         
             * @method
             * @param data A role object that needs to be inserted into the system.
             * @returns A promise that is resolved once the create action has beend performed.                                  
             * @example MembershipClient.role.create({ 
                            description : '<description>',   
                            name : '<name>' 
                        })
                        .then(function (data) {   
                            // perform success action here 
                        },
                        function (response, status, headers, config) {   
                            // perform error handling here 
                        });                  
            **/
            create(data: IRole): PromiseLike<IHttpResponse<IRole>> {
                return baasicApp.membershipModule.role.create(data);
            },

            /**                  
             * Returns a promise that is resolved once the update role action has been performed; this action updates a role. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicRoleClient` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
             * ``` 
             * let params = modelMapper.removeParams(role); 
             * let uri = params['model'].links('put').href; 
             * ```        
             * @method
             * @param data A role object used to update specified role resource.
             * @returns A promise that is resolved once the update role action has been performed.                              
             * @example // role is a resource previously fetched using get action. 
                            role.name = '<new-name>'; 
                            MembershipClient.role.update(role)
                                .then(function (data) {   
                                    // perform success action here 
                                },
                                function (response, status, headers, config) {   
                                    // perform error handling here 
                                }); 				
            **/
            update(data: IRole): PromiseLike<IHttpResponse<IRole>> {
                return baasicApp.membershipModule.role.update(data);
            },

            /**                  
             * Returns a promise that is resolved once the remove role action has been performed. This action will remove a role from the system, if completed successfully. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicRoleClient` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
             * ``` 
             * let params = modelMapper.removeParams(role); 
             * let uri = params['model'].links('delete').href; ```  
             * @param data A role object used to delete specified role resource.
             * @returns A promise that is resolved once the remove action has been performed.                
             * @method                         
             * @example // Role is a resource previously fetched using get action.				 
                            MembershipClient.role.remove(role)
                                .then(function (data) {   
                                    // perform success action here 
                                },
                                function (response, status, headers, config) {   
                                    // perform error handling here 
                                });						
            **/
            remove(data: IRole): PromiseLike<IHttpResponse<any>> {
                return baasicApp.membershipModule.role.remove(data);
            }
        };
    }

    get user(): IUserClient {
        let baasicApp = this.baasicApp;
        return {
            /**                  
             * Returns a promise that is resolved once the exists action has been performed. This action checks if user exists in the application.            
             * @method
             * @param username A username which uniquely identifies an application user.                           
             * @example MembershipClient.user.exists('<username>')
                            .then(function (data) {   
                                // perform success action here 
                            },
                            function (response, status, headers, config) {   
                                // perform error handling here 
                            });                   
            **/
            exists(username: string, options?: any): PromiseLike<IHttpResponse<any>> {
                return baasicApp.membershipModule.user.exists(username, options);
            },

            /**                  
             * Returns a promise that is resolved once the find action has been performed. Success response returns a list of user resources matching the given criteria.                  
             * @method
             * @param options Query resource options object.                         
             * @example MembershipClient.user.find({   
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
            find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IAppUser>>> {
                return baasicApp.membershipModule.user.find(options);
            },

            /**                  
             * Returns a promise that is resolved once the get action has been performed. Success response returns the specified user resource.               
             * @method
             * @param id A username or id which uniquely identifies an application user whose account information needs to be retrieved.
             * @param options Query resources options.
             * @returns A promise that is resolved once the get action has been performed.                           
             * @example MembershipClient.user.get({   
                            username : '<username>',   
                            embed : '<embedded-resource>' 
                        })
                        .then(function (data) {   
                            // perform success action here 
                        },
                        function (response, status, headers, config) {   
                            // perform error handling here 
                        });                  
            **/
            get(id: string, options?: IOptions): PromiseLike<IHttpResponse<IAppUser>> {
                return baasicApp.membershipModule.user.get(id, options);
            },

            /**                  
             * Returns a promise that is resolved once the create user action has been performed; this action creates a new user.   
             * @method
             * @param data An user object that needs to be inserted into the system.
             * @returns A promise that is resolved once the create user action has been performed.                                        
             * @example MembershipClient.user.create({   
                            confirmPassword : '<password>',   
                            email : '<email>',   
                            password : '<password>',   
                            sendEmailNotification : true,   
                            username : '<username>',   
                            roles: ['<role-name>'],   
                            additionalProperty: '<additional-property>'  
                        })
                        .then(function (data) {   
                            // perform success action here 
                        },
                        function (response, status, headers, config) {   
                            // perform error handling here 
                        });                  
            **/
            create(data: INewUser): PromiseLike<IHttpResponse<IAppUser>> {
                return baasicApp.membershipModule.user.create(data);
            },

            /**                  
             * Returns a promise that is resolved once the update user action has been performed; this action updates a user. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicUserRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
             * ``` 
             * let params = modelMapper.removeParams(user); 
             * let uri = params['model'].links('put').href; 
             * ```
             * @param data A user object used to update specified user resource.
             * @returns A promise that is resolved once the update user action has been performed.                  
             * @method                         
             * @example // user is a resource previously fetched using get action. 
                            user.roles = ['<role-name>', '<new-role-name>']; 
                            user.email = '<new-email>'; 
                            MembershipClient.user.update(user)
                                .then(function (data) {   
                                    // perform success action here 
                                },
                                function (response, status, headers, config) {   
                                    // perform error handling here 
                                }); 				
            **/
            update(data: IAppUser): PromiseLike<IHttpResponse<any>> {
                return baasicApp.membershipModule.user.update(data);
            },

            /**                  
             * Returns a promise that is resolved once the remove user action has been performed. This action will remove a user from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicUserRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
             * ``` 
             * let params = modelMapper.removeParams(user); 
             * let uri = params['model'].links('delete').href; 
             * ```             
             * @method
             * @param data  A user object used to delete specified user resource.
             * @returns A promise that is resolved once the remove user action has been performed.                           
             * @example // user is a resource previously fetched using get action.				 
                            MembershipClient.user.remove(user)
                                .then(function (data) {   
                                    // perform success action here 
                                },
                                function (response, status, headers, config) {   
                                    // perform error handling here 
                                });						
            **/
            remove(data: IAppUser): PromiseLike<IHttpResponse<any>> {
                return baasicApp.membershipModule.user.remove(data);
            },

            /**                  
             * Returns a promise that is resolved once the unlock user action has been performed. This action will unlock the user resource which was previously locked either manually or automatically by the system. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicUserRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
             * ``` 
             * let params = modelMapper.removeParams(user); 
             * let uri = params['model'].links('unlock').href; 
             * ```           
             * @method
             * @param data A user object used to unlock specified user resource.
             * @returns A promise that is resolved once the unlock user action has been performed.                            
             * @example //  user is a resource previously fetched using get action.				 
                                MembershipClient.user.unlock(user)
                                    .then(function (data) {   
                                        // perform success action here 
                                    },
                                    function (response, status, headers, config) {   
                                        // perform error handling here 
                                    });						
            **/
            unlock(data: IAppUser): PromiseLike<IHttpResponse<any>> {
                return baasicApp.membershipModule.user.unlock(data);
            },

            /**                 
             * Returns a promise that is resolved once the lock user action has been performed. This action will lock the user resource out of the system. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicUserRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
             * ``` 
             * let params = modelMapper.removeParams(user); 
             * let uri = params['model'].links('lock').href; 
             * ```              
             * @method
             * @param data A user object used to lock specified user resource.
             * @returns A promise that is resolved once the lock user action has been performed.                          
             * @example // user is a resource previously fetched using get action.				 
                            MembershipClient.user.lock(user)
                                .then(function (data) {   
                                    // perform success action here 
                                },
                                function (response, status, headers, config) {   
                                    // perform error handling here 
                                });						
            **/
            lock(data: IAppUser): PromiseLike<IHttpResponse<any>> {
                return baasicApp.membershipModule.user.lock(data);
            },

            /**                  
             * Returns a promise that is resolved once the approve user action has been performed. This action will mark the user resource as 'approved' in the system. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicUserRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
             * ``` 
             * let params = modelMapper.removeParams(user); 
             * let uri = params['model'].links('approve').href; 
             * ```                 
             * @method
             * @param data A user object used to approve specified user resource. 
             * @returns A promise that is resolved once the approve user action has been performed.                         
             * @example // user is a resource previously fetched using get action.				 
                            MembershipClient.user.approve(user)
                                .then(function (data) {   
                                    // perform success action here 
                                })
                                function (response, status, headers, config) {   
                                    // perform error handling here 
                                });						
            **/
            approve(data: IAppUser): PromiseLike<IHttpResponse<any>> {
                return baasicApp.membershipModule.user.approve(data);
            },

            /**                  
             * Returns a promise that is resolved once the disapprove user action has been performed. This action will mark the user resource as 'not approved' in the system. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicUserRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
             * ``` 
             * let params = modelMapper.removeParams(user); 
             * let uri = params['model'].links('disapprove').href; 
             * ```                  
             * @method                         
             * @example // user is a resource previously fetched using get action.				 
                            MembershipClient.user.disapprove(user).then(function (data) {   
                                // perform success action here 
                            },
                            function (response, status, headers, config) {   
                                // perform error handling here 
                            });						
            **/
            disapprove(data: IAppUser): PromiseLike<IHttpResponse<any>> {
                return baasicApp.membershipModule.user.disapprove(data);
            },

            /**                  
             * Returns a promise that is resolved once the changePassword action has been performed. This action will update user's password selection.           
             * @method 
             * @param username A username or id which uniquely identifies user resource.
             * @param data A new password object used to update specified user password resource.
             * @returns A promise that is resolved once the changedPassword action has been performed.     
             * @example MembershipClient.user.changePassword('<username>', {   
                            newPassword : '<new-password>',   
                            sendMailNotification : false 
                        })
                        .then(function () {   
                            // perform success action here 
                        },
                        function (data, status, headers, config) {   
                            // perform error handling here 
                        })
                        .finally (function () {}); 
            **/
            changePassword(username: string, data: INewPassword): PromiseLike<IHttpResponse<any>> {
                return baasicApp.membershipModule.user.changePassword(username, data);
            },

            socialLogin: {
                /**                     
                 * Returns a promise that is resolved once the get action has been performed. Success response returns a list user resource connected social login providers.
                 * @param username A username or id which uniquely identifies user resource whose social login connections need to be retrieved.
                 * @returns A promise that is resolved once the get action has been performed.                     
                 * @method                    
                 * @example MembershipClient.user.socialLogin.get('<username>')
                                .then(function (collection) {   
                                    // perform success action here 
                                },
                                function (response, status, headers, config) {   
                                    // perform error handling here 
                                });                     
                **/
                get(username: string): PromiseLike<IHttpResponse<IBaasicQueryModel<IUserSocialLogin>>> {
                    return baasicApp.membershipModule.user.socialLogin.get(username);
                },

                /**                     
                 * Returns a promise that is resolved once the remove action has been performed. This action removes the user resource social login connection from the specified provider.
                 * @param username A username or id which uniquely identifies user resource whose social login connection needs to be removed.    
                 * @param provider A value which uniquely identifies provider from which the user resource needs to be disconnected.
                 * @returns A promise that is resolved once the remove action has been performed.                 
                 * @method                 
                 * @example MembershipClient.user.socialLogin.remove('<username>', '<provider>')
                                .then(function (collection) {   
                                    // perform success action here 
                                },
                                function (response, status, headers, config) {   
                                    // perform error handling here 
                                });                     
                **/
                remove(username: string, provider: any): PromiseLike<IHttpResponse<any>> {
                    return baasicApp.membershipModule.user.socialLogin.remove(username, provider);
                }
            }
        };
    }

    get permissions(): IPermissionClient {
        let baasicApp = this.baasicApp;
        return {
            /**                  
             * Returns a promise that is resolved once the find action has been performed. Success response returns a list of role resources matching the given criteria.              
             * @method
             * @param options Query resource options object. 
             * @returns A promise that is resolved once the find action has beend performed.                            
             * @example MembershipClient.permissions.find({   
                            section : '<access-section>',   
                            search : '<search-phrase>' 
                        })
                        .then(function (collection) {   
                            // perform success action here 
                        },
                        function (response, status, headers, config) {   
                            // perform error handling here 
                        });                     
            **/
            find(section: string, options?: any): PromiseLike<IHttpResponse<IAccessPolicy[]>> {
                return baasicApp.membershipModule.permissions.find(section, options);
            },

            /**
            * Returns a promise that is resolved once the getActions action has been performed. Success response returns a list of access policies that match the specified search parameters.
            * @method        
            * @example 
                    MembershipClient.permissions.getActions({
                    search : '<search-phrase>'
                    })
                    .success(function (collection) {
                    // perform success action here
                    })
                    .error(function (response, status, headers, config) {
                    // perform error handling here
                    });    
            **/
            getActions(options?: any): PromiseLike<IHttpResponse<IAccessAction[]>> {
                return baasicApp.membershipModule.permissions.getActions(options);
            },

            /**
            * Returns a promise that is resolved once the getPermissionSubjects action has been performed. Success response returns a list of matching user and role resources.
            * @method        
            * @example 
                    MembershipClient.permissions.getPermissionSubjects({
                    orderBy : '<field>',
                    orderDirection : '<asc|desc>',
                    search : '<search-phrase>'
                    })
                    .success(function (collection) {
                    // perform success action here
                    })
                    .error(function (response, status, headers, config) {
                    // perform error handling here
                    }); 
            **/
            getPermissionSubjects(options: any): PromiseLike<any> {
                return baasicApp.membershipModule.permissions.getPermissionSubjects(options);
            },

            /**
             * Returns a promise that is resolved once the create action has been performed; this action creates a new permission resource.
             * @method        
             * @example 
                    // readAction and updateActions are resources previously fetched using getActions.
                    MembershipClient.permissions.create({
                    actions : [readAction, updateAction],
                    section : '<section-name>',
                    userName : '<userName>'
                    })
                    .success(function (data) {
                    // perform success action here
                    })
                    .error(function (response, status, headers, config) {
                    // perform error handling here
                    });
            **/
            create(data: IAccessPolicy): PromiseLike<IHttpResponse<IAccessPolicy[]>> {
                return baasicApp.membershipModule.permissions.create(data);
            },

            /**
            * Returns a promise that is resolved once the remove action has been performed. If the action is successfully complete, an access policy assigned to the specified role and section will be removed. 
            * @method        
            * @example 
                    // permission is a resource previously fetched using get action.				 
                    MembershipClient.permissions.remove(permission)
                    .success(function (data) {
                    // perform success action here
                    })
                    .error(function (response, status, headers, config) {
                    // perform error handling here
                    });		
            **/
            remove(data: IAccessPolicy): PromiseLike<IHttpResponse<any>> {
                return baasicApp.membershipModule.permissions.remove(data);
            },

            /**
            * Creates a new in-memory permission object.
            * @method        
            * @example 
                    // action collection are lookup items fetched using baasicLookupClient.get action.
                    var actionCollection;
                    return baasicLookupClient.get()
                    .success(function (data) {
                    actionCollection = data;
                    })
                    .error(function (data, status, headers, config) {});
                    // subjectItem is an item fetched using MembershipClient.permission.getPermissionSubjects action.
                    MembershipClient.permissions.createPermission('<section-Name>', actionCollection, subjectItem);
            **/
            createPermission(section: string, actions: IAccessAction[], membershipItem: any): any {
                return baasicApp.membershipModule.permissions.createPermission(section, actions, membershipItem);
            },

            /**
            * Finds a permission in a given permission collection.
            * @method        
            * @example MembershipClient.permissions.findPermission(permissionObj, permissionCollection);
            **/
            findPermission(permission: Object, permissionCollection: any): any {
                return baasicApp.membershipModule.permissions.findPermission(permission, permissionCollection);
            },

            /**
            * Checks if a permission object exists in a given permission collection.
            * @method        
            * @example MembershipClient.permissions.exists(permissionObj, permissionCollection);
            **/
            exists(permission: Object, permissionCollection: any): any {
                return baasicApp.membershipModule.permissions.exists(permission, permissionCollection);
            },

            /**
            * Returns a promise that is resolved once the togglePermission action has been completed. The action will internally either call a `remove` or `create` action based on given criteria.
            * @method        
            * @example MembershipClient.permissions.togglePermission(permissionObj, action);
            **/
            togglePermission(permission: Object, action: string): any {
                return baasicApp.membershipModule.permissions.togglePermission(permission, action);
            },

            /**
            * Fetches and returns and object containing all existing module permissions.
            * @method        
            * @example MembershipClient.permissions.getModulePermissions('<section-name>');
            **/
            getModulePermissions(section: any): any {
                return baasicApp.membershipModule.permissions.getModulePermissions(section);
            },

            resetPermission(): void {
                return baasicApp.membershipModule.permissions.resetPermissions();
            },

            /**
            * Checks if current user has permissions to perform a certain action. To optimize performance this information is cached and can be reset using the resetPermissions action. Permissions cache should be reset when updated user information is set.
            * @method        
            * @example MembershipClient.permissions.hasPermission("<baasic-Section>.<action>");				
            **/
            hasPermission(authorization: string): boolean {
                return baasicApp.membershipModule.permissions.hasPermission(authorization);
            }
        };
    }

    get lookups(): ILookupClient {
        let baasicApp = this.baasicApp;
        return {
            /**                  
            * Returns a promise that is resolved once the get action has been performed. Success response returns the lookup resources.                  
            * @method
            * @param options Options object that contains comma separated list of related resources to be contained within the current representation.                         
            * @returns A promise that is resolved once the get action has been performed. 
            * @example MembershipClient.lookups.get()
                           .then(function (data) {   
                               // perform success action here 
                           },
                           function (response, status, headers, config) {   
                               // perform error handling here 
                           });                  
           **/
            get(options?: IGetRequestOptions): PromiseLike<IHttpResponse<ILookup>> {
                return baasicApp.membershipModule.lookups.get(options);
            }
        };
    }
}