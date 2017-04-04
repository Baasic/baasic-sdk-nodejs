import { BaasicApp } from 'baasic-sdk-javascript'

import { IBaasicQueryModel, IGetRequestOptions, IHttpResponse, IOptions } from '../../infrastructure/common/contracts';
import {
    IAnonymousRegistration,
    IAnonymousSubscription,
    INotification,
    INotificationsPublishClient,
    INotificationsRegistrationsClient,
    INotificationsSettingsClient,
    INotificationsSubscriptionsClient,
    IUserRegistration,
    IUserSubscription
} from './contracts';

export class NotificationsClient {

    constructor(private baasicApp: BaasicApp) { }

    get publish(): INotificationsPublishClient {
        let baasicApp = this.baasicApp;
        return {
            /**                      
             * Returns a promise that is resolved once the create notification action has been performed; this action creates a new notification resource.                      
             * @method
             * @param data The notification.
             * @returns A promise that is resolved once the create notification action has been performed.                       
             * @example NotificationsClient.create({     
                            channels: ['<channel-name', '<channel-name>'],     
                            moduleName: '<module-name>',     
                            templateName: '<template-name>',     
                            templateContext: {         
                                prop1: '<prop1-value>',         
                                prop2: '<prop2-value>'     
                            } 
                        })
                        .then(function (data) {     
                            // perform success action here 
                        },
                        function (response, status, headers, config) {     
                            // perform error handling here 
                        });                      
            */
            create(data: INotification): PromiseLike<IHttpResponse<INotification>> {
                return baasicApp.notificationModule.publish.create(data);
            },

            batch: {
                /**         
                 * Returns a promise that is resolved once the create notification action has been performed; this action creates new notification resources.                          
                 * @method 
                 * @param data The notification collection.
                 * @returns A promise that is resolved once the create notification action has been performed.                              
                 * @example NotificationsClient.batch.create([{        
                                channels: ['<channel-name', '<channel-name>'],     
                                moduleName: '<module-name>',     
                                templateName: '<template-name>',     
                                templateContext: {         
                                    prop1: '<prop1-value>',         
                                    prop2: '<prop2-value>'     
                                } 
                            }])
                            .then(function (data) {     
                                // perform success action here 
                            },
                            function (response, status, headers, config) {     
                                // perform error handling here 
                            });                         
                */
                create(data: INotification[]): PromiseLike<IHttpResponse<INotification[]>> {
                    return baasicApp.notificationModule.publish.batch.create(data);
                }
            }
        };
    }

    get subscriptions(): INotificationsSubscriptionsClient {
        let baasicApp = this.baasicApp;
        return {
            anonymous: {
                /**                          
                 * Returns a promise that is resolved once the create anonymous subscription action has been performed; this action creates a new anonymous subscription resource.                          
                 * @method 
                 * @param data An AnonymousSubscription object that needs to be inserted into the system.
                 * @returns A promise that is resolved once the create anonymous subscription action has been performed.                          
                 * @example NotificationsClient.subscriptions.anonymous.create({     
                                channel: '<channel-name>',     
                                registrationId: '<registration-id>' 
                            })
                            .then(function (data) {     
                                // perform success action here 
                            },
                            function (response, status, headers, config) {     
                                // perform error handling here 
                            });                         
                */
                create(data: IAnonymousSubscription): PromiseLike<IHttpResponse<IAnonymousSubscription>> {
                    return baasicApp.notificationModule.subscriptions.anonymous.create(data);
                },

                /**                          
                 * Returns a promise that is resolved once the find action has been performed. Success response returns a list of anonymous subscription resources matching the given criteria.                          
                 * @method
                 * @param options Query resource options object.
                 * @returns A promise that is resolved once the find action has been performed.                              
                 * @example NotificationsClient.subscriptions.anonymous.find({     
                                pageNumber : 1,     
                                pageSize : 10,     
                                orderBy : '<field>',     
                                orderDirection : '<asc|desc>',     
                                search : '<search-phrase>',     
                                channels: '<channel-name1>,<channel-name2>',     
                                registrationIds: '<registration-id1>,<registration-id2>',     
                                embed: '<embed>' 
                            })
                            .then(function (collection) {     
                                // perform success action here 
                            },
                            function (response, status, headers, config) {     
                                // perform error handling here 
                            });                            
                */
                find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IAnonymousSubscription>>> {
                    return baasicApp.notificationModule.subscriptions.anonymous.find(options);
                },

                /**                          
                 * Returns a promise that is resolved once the get action has been performed. Success response returns the specified anonymous subscription resource.                          
                 * @method   
                 * @param id The subscription identifier which uniquely identifies AnonymousSubscription resource that needs to be retrieved.
                 * @param options Query resource options object.
                 * @returns A promise that is resolved once the get action has been performed.                             
                 * @example NotificationsClient.subscriptions.anonymous.get('<subscription-id>')
                                .then(function (data) {     
                                    // perform success action here 
                                },
                                function (response, status, headers, config) {     
                                    // perform error handling here 
                                });                         
                */
                get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IAnonymousSubscription>> {
                    return baasicApp.notificationModule.subscriptions.anonymous.get(id, options);
                },

                /**                          
                 * Returns a promise that is resolved once the remove anonymous subscription action has been performed. This action will remove a anonymous subscription resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicNotificationsSubscriptionsAnonymousRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
                 * ``` 
                 * let params = modelMapper.removeParams(subscription); 
                 * var uri = params['model'].links('delete').href; 
                 * ```                          
                 * @method 
                 * @param data The subscription identifier used to delete specific subscription resource in the system.
                 * @returns A promise that is resolved once the remove anonymous subscription action has been performed.                                 
                 * @example // subscription is a resource previously fetched using get action.				 
                                    NotificationsClient.subscriptions.anonymous.remove(subscription)
                                        .then(function (data) {     
                                            // perform success action here 
                                        },
                                        function (response, status, headers, config) {     
                                            // perform error handling here 
                                        });						        
                */
                remove(data: IAnonymousSubscription): PromiseLike<IHttpResponse<void>> {
                    return baasicApp.notificationModule.subscriptions.anonymous.remove(data);
                },

                /**                          
                 * Returns a promise that is resolved once the update anonymous subscription action has been performed; this action updates a anonymous subscription resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicNotificationsSubscriptionsAnonymousRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
                 * ``` 
                 * let params = modelMapper.updateParams(subscription); 
                 * let uri = params['model'].links('put').href; 
                 * ```                          
                 * @method
                 * @param data An object used to update specified AnonymousSubscription resource.
                 * @returns A promise that is resolved once the update anonymous subscription action has been performed.
                 * @example // subscription is a resource previously fetched using get action. 
                                subscription.channel = '<channel-name>'; 
                                NotificationsClient.subscriptions.anonymous.update(subscription) 
                                    .then(function (data) {         
                                        // perform success action here 
                                    },
                                    function (response, status, headers, config) {         
                                        // perform error handling here 
                                    }); 				        
                */
                update(data: IAnonymousSubscription): PromiseLike<IHttpResponse<void>> {
                    return baasicApp.notificationModule.subscriptions.anonymous.update(data);
                },

                batch: {
                    /**                              
                     * Returns a promise that is resolved once the create anonymous subscription action has been performed; this action creates new anonymous subscription resources.                              
                     * @method
                     * @param data AnonymousSubscription objects that need to be inserted into the system.
                     * @returns A promise that is resolved once the create anonymous subscription action has been performed.
                     * @example NotificationsClient.subscriptions.anonymous.batch.create([{     
                                    channel: '<channel-name>',     
                                    registrationId: '<registration-id>' ž
                                }])
                                .then(function (data) {     
                                    // perform success action here 
                                },
                                function (response, status, headers, config) {     
                                    // perform error handling here 
                                });                             
                    */
                    create(data: IAnonymousSubscription[]): PromiseLike<IHttpResponse<IAnonymousSubscription[]>> {
                        return baasicApp.notificationModule.subscriptions.anonymous.batch.create(data);
                    },

                    /**                              
                     * Returns a promise that is resolved once the remove action has been performed. This action will remove anonymous subscription resources from the system if successfully completed.                              
                     * @method
                     * @param ids The subscription ids which uniquely identify AnonymousSubscription resources that need to be deleted.
                     * @returns a promise that is resolved once the remove action has been performed.                                   
                     * @example NotificationsClient.subscriptions.anonymous.batch.remove(subscriptionIds)
                                 .then(function (data) {     
                                     // perform success action here 
                                 },
                                    function (response, status, headers, config) {     
                                        // perform error handling here 
                                });		                            
                    */
                    remove(ids: string[]): PromiseLike<IHttpResponse<void>> {
                        return baasicApp.notificationModule.subscriptions.anonymous.batch.remove(ids);
                    },

                    /**                              
                     * Returns a promise that is resolved once the update anonymous subscriptions action has been performed; this action updates specified anonymous subscription resources.                              
                     * @method
                     * @param data AnonymousSubscription objects used to update specified AnonymousSubscription resources.
                     * @returns A promise that is resolved once the update anonymous subscriptions action has been performed.                                     
                     * @example NotificationsClient.subscriptions.anonymous.batch.update(subscriptions)
                                    .then(function (data) {     
                                        // perform success action here 
                                    },
                                    function (response, status, headers, config) {     
                                        // perform error handling here 
                                    });                             
                    */
                    update(data: IAnonymousSubscription[]): PromiseLike<IHttpResponse<void>> {
                        return baasicApp.notificationModule.subscriptions.anonymous.batch.update(data);
                    }
                }
            },

            users: {
                /**                          
                 * Returns a promise that is resolved once the create user subscription action has been performed; this action creates a new user subscription resource.                          
                 * @method
                 * @param data An UserSubscription object that needs to be inserted into the system.
                 * @returns A promise that is resolved once the create user subscription action has been performed.                           
                 * @example NotificationsClient.subscriptions.users.create({     
                                channel: '<channel-name>',     
                                userId: '<user-id>' 
                            })
                            .then(function (data) {     
                                // perform success action here 
                            },
                            function (response, status, headers, config) {     
                                // perform error handling here 
                            });                         
                */
                create(data: IUserSubscription): PromiseLike<IHttpResponse<IUserSubscription>> {
                    return baasicApp.notificationModule.subscriptions.users.create(data);
                },

                /**                          
                 * Returns a promise that is resolved once the find action has been performed. Success response returns a list of user subscription resources matching the given criteria.                          
                 * @method
                 * @param options Query resource options object.
                 * @returns A promise that is resolved once the find action has been performed.                               
                 * @example NotificationsClient.subscriptions.users.find({     
                                pageNumber : 1,     
                                pageSize : 10,     
                                orderBy : '<field>',     
                                orderDirection : '<asc|desc>',     
                                search : '<search-phrase>',     
                                channels: '<channel-name1>,<channel-name2>',     
                                userIds: '<user-id1>,<user-id2>',     
                                embed: '<embed>' 
                            })
                            .then(function (collection) {     
                                // perform success action here 
                            },
                            function (response, status, headers, config) {     
                                // perform error handling here 
                            });                            
                */
                find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IUserSubscription>>> {
                    return baasicApp.notificationModule.subscriptions.users.find(options);
                },

                /**                          
                 * Returns a promise that is resolved once the get action has been performed. Success response returns the specified user subscription resource.                          
                 * @method
                 * @param id The subscription identifier which uniquely identifies UserSubscription resource that needs to be retrieved.
                 * @param options Query resource options object.
                 * @returns A promise that is resolved once the get action has been performed.                               
                 * @example NotificationsClient.subscriptions.users.get('<subscription-id>')
                             .then(function (data) {     
                                 // perform success action here 
                             },
                                function (response, status, headers, config) {     
                                    // perform error handling here 
                            });                         
                */
                get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IUserSubscription>> {
                    return baasicApp.notificationModule.subscriptions.users.get(id, options);
                },

                /**                          
                 * Returns a promise that is resolved once the remove user subscription action has been performed. This action will remove a user subscription resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicNotificationsSubscriptionsUsersRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
                 * ``` 
                 * let params = modelMapper.removeParams(subscription); 
                 * let uri = params['model'].links('delete').href; 
                 * ```                          
                 * @method
                 * @param data An object used to delete specified UserSubscription resource.
                 * @returns A promise that is resolved once the remove user subscription action has been performed.                                  
                 * @example // subscription is a resource previously fetched using get action.				 
                                NotificationsClient.subscriptions.users.remove(subscription)
                                    .then(function (data) {     
                                        // perform success action here 
                                    },
                                    function (response, status, headers, config) {     
                                        // perform error handling here 
                                    });		                        
                */
                remove(data: IUserSubscription): PromiseLike<IHttpResponse<void>> {
                    return baasicApp.notificationModule.subscriptions.users.remove(data);
                },

                /**                          
                 * Returns a promise that is resolved once the update user subscription action has been performed; this action updates a user subscription resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicNotificationsSubscriptionsUsersRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
                 * ``` 
                 * let params = modelMapper.updateParams(subscription); 
                 * let uri = params['model'].links('put').href; 
                 * ```                          
                 * @method
                 * @param data An object used to update specified UserSubscription resource.                                 
                 * @example // subscription is a resource previously fetched using get action. 
                                 subscription.channel = '<channel-name>'; 
                                 NotificationsClient.subscriptions.users.update(subscription)
                                     .then(function (data) {     
                                         // perform success action here 
                                     },
                                        function (response, status, headers, config) {     
                                            // perform error handling here 
                                    }); 				        
                */
                update(data: IUserSubscription): PromiseLike<IHttpResponse<void>> {
                    return baasicApp.notificationModule.subscriptions.users.update(data);
                },

                batch: {
                    /**                              
                     * Returns a promise that is resolved once the create user subscription action has been performed; this action creates new user subscription resources.                              
                     * @method
                     * @param data UserSubscription collection that need to be inserted into the system. 
                     * @returns A promise that is resolved once the create user subscription action has been performed.                                    
                     * @example NotificationsClient.subscriptions.users.batch.create([{     
                                    channel: '<channel-name>',     
                                    userId: '<user-id>' 
                                }])
                                .then(function (data) {     
                                    // perform success action here 
                                },
                                function (response, status, headers, config) {     
                                    // perform error handling here 
                                });                             
                    */
                    create(data: IUserSubscription[]): PromiseLike<IHttpResponse<IUserSubscription[]>> {
                        return baasicApp.notificationModule.subscriptions.users.batch.create(data);
                    },

                    /**                              
                     * Returns a promise that is resolved once the remove action has been performed. This action will remove user subscription resources from the system if successfully completed.                              
                     * @method 
                     * @param ids The subscription ids which uniquely identify UserSubscription resources that need to be deleted.
                     * @returns A promise that is resolved once the remove action has been performed.                                
                     * @example NotificationsClient.subscriptions.users.batch.remove(subscriptionIds)
                                    .then(function (data) {     
                                        // perform success action here 
                                    },
                                    function (response, status, headers, config) {     
                                        // perform error handling here 
                                    });		                            
                    */
                    remove(ids: string[]): PromiseLike<IHttpResponse<void>> {
                        return baasicApp.notificationModule.subscriptions.users.batch.remove(ids);
                    },

                    /**                              
                     * Returns a promise that is resolved once the update user subscriptions action has been performed; this action updates specified user subscription resources.                              
                     * @method 
                     * @param data UserSubscription objects used to update specified UserSubscription resources.
                     * @returns A promise that is resolved once the update user subscriptions action has been performed.                                   
                     * @example NotificationsClient.subscriptions.users.batch.update(subscriptions)
                                    .then(function (data) {     
                                        // perform success action here 
                                    },
                                    function (response, status, headers, config) {     
                                        // perform error handling here 
                                    });                             
                    */
                    update(data: IUserSubscription[]): PromiseLike<IHttpResponse<void>> {
                        return baasicApp.notificationModule.subscriptions.users.batch.update(data);
                    }
                }
            }
        };
    }


    get registrations(): INotificationsRegistrationsClient {
        let baasicApp = this.baasicApp;
        return {
            anonymous: {
                /**                          
                 * Returns a promise that is resolved once the create anonymous registration action has been performed; this action creates a new anonymous registration resource.                          
                 * @method
                 * @param data An AnonymousRegistration object that needs to be inserted into the system.
                 * @returns A promise that is resolved once the create anonymous registration action has been performed.                        
                 * @example NotificationsClient.registrations.anonymous.create({     
                                provider: '<provider-name>',     
                                providerdata: <provider-data>,     
                                expirationData: '<expiration-date>' 
                            })
                            .then(function (data) {    
                                // perform success action here 
                            },
                            function (response, status, headers, config) {     
                                // perform error handling here 
                            });                         
                */
                create(data: IAnonymousRegistration): PromiseLike<IHttpResponse<IAnonymousRegistration>> {
                    return baasicApp.notificationModule.registrations.anonymous.create(data);
                },

                /**                          
                 * Returns a promise that is resolved once the find action has been performed. Success response returns a list of anonymous registration resources matching the given criteria.                          
                 * @method
                 * @param options Query resource options object.
                 * @returns A promise that is resolved once the find action has been performed.                                
                 * @example NotificationsClient.registrations.anonymous.find({     
                             pageNumber : 1,     
                             pageSize : 10,     
                             orderBy : '<field>',     
                             orderDirection : '<asc|desc>',     
                             search : '<search-phrase>',     
                             providers: '<provider-name1>,<provider-name2>',     
                             embed: '<embed>' 
                         })
                         .then(function (collection) {     
                             // perform success action here 
                         },
                            function (response, status, headers, config) {     
                                // perform error handling here 
                        });                            
                */
                find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IAnonymousRegistration>>> {
                    return baasicApp.notificationModule.registrations.anonymous.find(options);
                },

                /**                          
                 * Returns a promise that is resolved once the get action has been performed. Success response returns the specified anonymous registration resource.                          
                 * @method
                 * @param id The registration identifier which uniquely identifies AnonymousRegistration resource that needs to be retrieved.
                 * @param options Query resource options object. 
                 * @returns A promise that is resolved once the get action has been performed.                                
                 * @example NotificationsClient.registrations.anonymous.get('<registration-id>')
                                .then(function (data) {     
                                    // perform success action here 
                                },
                                function (response, status, headers, config) {     
                                    // perform error handling here 
                                });                         
                */
                get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IAnonymousRegistration>> {
                    return baasicApp.notificationModule.registrations.anonymous.get(id, options);
                },

                /**                          
                 * Returns a promise that is resolved once the remove anonymous registration action has been performed. This action will remove a anonymous registration resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicNotificationsRegistrationsAnonymousRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
                 * ``` 
                 * let params = modelMapper.removeParams(registration); 
                 * var uri = params['model'].links('delete').href; 
                 * ```                          
                 * @method
                 * @param data An object used to delete specified AnonymousRegistration resource. 
                 * @returns A promise that is resolved once the remove anonymous registration action has been performed.                                
                 * @example // registration is a resource previously fetched using get action.				 
                                NotificationsClient.registrations.anonymous.remove(registration) 
                                    .then(function (data) {     
                                        // perform success action here 
                                    },
                                    function (response, status, headers, config) {     
                                        // perform error handling here 
                                    });						        
                */
                remove(data: IAnonymousRegistration): PromiseLike<IHttpResponse<void>> {
                    return baasicApp.notificationModule.registrations.anonymous.remove(data);
                },

                /**                          
                 * Returns a promise that is resolved once the update anonymous registration action has been performed; this action updates a anonymous registration resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicNotificationsRegistrationsAnonymousRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
                 * ``` 
                 * let params = modelMapper.updateParams(registration); 
                 * var uri = params['model'].links('put').href; 
                 * ```                          
                 * @method
                 * @param data An object used to update specified AnonymousRegistration resource.
                 * @returns A promise that is resolved once the update anonymous registration action has been performed                                  
                 * @example // registration is a resource previously fetched using get action. 
                                    subscription.provider = '<provider-name>'; 
                                    NotificationsClient.registrations.anonymous.update(registration)
                                        .then(function (data) {         
                                            // perform success action here 
                                        },
                                        function (response, status, headers, config) {         
                                            // perform error handling here 
                                        }); 				        
                */
                update(data: IAnonymousRegistration): PromiseLike<IHttpResponse<void>> {
                    return baasicApp.notificationModule.registrations.anonymous.update(data);
                },

                batch: {
                    /**                              
                     * Returns a promise that is resolved once the create anonymous registration action has been performed; this action creates new anonymous registration resources.                              
                     * @method
                     * @param data AnonymousRegistration objects that need to be inserted into the system.
                     * @returns A promise that is resolved once the create anonymous registration action has been performed.                                     
                     * @example NotificationsClient.registrations.anonymous.batch.create([{     
                                    provider: '<provider-name>',     
                                    providerData: <provider-data>,     
                                    expirationDate: <expiration-date> 
                                }]) 
                                .then(function (data) {     
                                    // perform success action here 
                                },
                                function (response, status, headers, config) {     
                                    // perform error handling here 
                                });                             
                    */
                    create(data: IAnonymousRegistration[]): PromiseLike<IHttpResponse<IAnonymousRegistration[]>> {
                        return baasicApp.notificationModule.registrations.anonymous.batch.create(data);
                    },

                    /**                              
                     * Returns a promise that is resolved once the remove action has been performed. This action will remove anonymous registration resources from the system if successfully completed.                              
                     * @method
                     * @param ids The registration ids which uniquely identify AnonymousRegistration resources that need to be deleted.
                     * @returns A promise that is resolved once the remove action has been performed.                                    
                     * @example NotificationsClient.registrations.anonymous.batch.remove(subscriptionIds) 
                                 .then(function (data) {     
                                     // perform success action here 
                                 },
                                    function (response, status, headers, config) {     
                                        // perform error handling here 
                                });		                            
                    */
                    remove(ids: string[]): PromiseLike<IHttpResponse<void>> {
                        return baasicApp.notificationModule.registrations.anonymous.batch.remove(ids);
                    },

                    /**                              
                     * Returns a promise that is resolved once the update anonymous registration action has been performed; this action updates specified anonymous registration  resources.                              
                     * @method
                     * @param data AnonymousRegistration objects used to update specified AnonymousRegistration resources.
                     * @returns A promise that is resolved once the update anonymous registration action has been performed.                                     
                     * @example NotificationsClient.registrations.anonymous.batch.update(registrations)
                                    .then(function (data) {     
                                        // perform success action here 
                                    },
                                    function (response, status, headers, config) {     
                                        // perform error handling here 
                                    });                             
                    */
                    update(data: IAnonymousRegistration[]): PromiseLike<IHttpResponse<void>> {
                        return baasicApp.notificationModule.registrations.anonymous.batch.update(data);
                    }
                }
            },

            users: {
                /**                          
                 * Returns a promise that is resolved once the create user registration action has been performed; this action creates a new user registration resource.                          
                 * @method 
                 * @param data An UserRegistration object that needs to be inserted into the system.
                 * @returns A promise that is resolved once the create user registration action has been performed.
                 * @example NotificationClient.registrations.users.create({     
                                provider: '<provider-name>',     
                                providerData: <provider-data>,     
                                userId: '<user-id>' 
                            }) 
                            .then(function (data) {     
                                // perform success action here 
                            },
                            function (response, status, headers, config) {     
                                // perform error handling here 
                            });                         
                */
                create(data: IUserRegistration): PromiseLike<IHttpResponse<IUserRegistration>> {
                    return baasicApp.notificationModule.registrations.users.create(data);
                },

                /**                          
                 * Returns a promise that is resolved once the find action has been performed. Success response returns a list of user registrations resources matching the given criteria.                          
                 * @method
                 * @param options Query resource options object.
                 * @returns A promise that is resolved once the find action has been performed.                              
                 * @example NotificationClient.registrations.users.find({     
                             pageNumber : 1,     
                             pageSize : 10,     
                             orderBy : '<field>',     
                             orderDirection : '<asc|desc>',     
                             search : '<search-phrase>',     
                             providers: '<provider-name1>,<provider-name2>',     
                             userIds: '<user-id1>,<user-id2>',     
                             embed: '<embed>' 
                         })
                         .then(function (collection) {     
                             // perform success action here 
                         },
                            function (response, status, headers, config) {     
                                // perform error handling here 
                        });                            
                */
                find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IUserRegistration>>> {
                    return baasicApp.notificationModule.registrations.users.find(options);
                },

                /**                          
                 * Returns a promise that is resolved once the get action has been performed. Success response returns the specified user registrations resource.                          
                 * @method
                 * @param id The registration identifier which uniquely identifies UserRegistration resource that needs to be retrieved.
                 * @param options Query resource options object.                               
                 * @example NotificationClient.registrations.users.get('<registration-id>') 
                             .then(function (data) {     
                                 // perform success action here 
                             },
                                function (response, status, headers, config) {     
                                    // perform error handling here 
                            });                         
                */
                get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IUserRegistration>> {
                    return baasicApp.notificationModule.registrations.users.get(id, options);
                },

                /**                          
                 * Returns a promise that is resolved once the remove user registrations action has been performed. This action will remove a user registrations resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicNotificationsRegistrationsUsersRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
                 * ``` 
                 * let params = modelMapper.removeParams(registration); 
                 * let uri = params['model'].links('delete').href; 
                 * ```                          
                 * @method
                 * @param data An object used to delete specified UserRegistration resource.                                 
                 * @example // registration is a resource previously fetched using get action.				 
                                NotificationClient.registrations.users.remove(registration)
                                    .then(function (data) {     
                                        // perform success action here 
                                    },
                                    function (response, status, headers, config) {     
                                        // perform error handling here 
                                    });						        
                */
                remove(data: IUserRegistration): PromiseLike<IHttpResponse<void>> {
                    return baasicApp.notificationModule.registrations.users.remove(data);
                },

                /**                          
                * Returns a promise that is resolved once the update user registration action has been performed; this action updates a user registration resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicNotificationsRegistrationsUsersRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects:                             
                * ```                             
                * let params = modelMapper.updateParams(subsregistrationcription);                             
                * let uri = params['model'].links('put').href;                             
                * ```                          
                * @method 
                * @param data An object used to update specified UserRegistration resource.
                * @returns A promise that is resolved once the update user registration action has been performed.                                
                * @example // registration is a resource previously fetched using get action.                             
                               registration.provider = '<provider-name>';                             
                               NotificationClient.registrations.users.update(registration)                             
                                   .then(function (data) {                                  
                                       // perform success action here                            
                                   },
                                   function (response, status, headers, config) {                                  
                                       // perform error handling here                             
                                   }); 				        
               */
                update(data: IUserRegistration): PromiseLike<IHttpResponse<void>> {
                    return baasicApp.notificationModule.registrations.users.update(data);
                },

                batch: {
                    /**                              
                     * Returns a promise that is resolved once the create user registration action has been performed; this action creates new user registration resources.                              
                     * @method
                     * @param data UserRegistration collection that need to be inserted into the system.                                   
                     * @returns A promise that is resolved once the create user registration action has been performed. 
                     * @example NotificationsClient.registrations.users.batch.create([{     
                                    provider: '<provider-name>',     
                                    providerData: <provider-data>,     
                                    userId: '<user-id>' 
                                }])
                                .then(function (data) {     
                                    // perform success action here 
                                },
                                function (response, status, headers, config) {     
                                    // perform error handling here 
                                });                             
                    */
                    create(data: IUserRegistration[]): PromiseLike<IHttpResponse<IUserRegistration[]>> {
                        return baasicApp.notificationModule.registrations.users.batch.create(data);
                    },

                    /**                              
                     * Returns a promise that is resolved once the remove action has been performed. This action will remove user registration resources from the system if successfully completed.                              
                     * @method 
                     * @param ids The subscription ids which uniquely identify UserRegistration resources that need to be deleted.
                     * @returns A promise that is resolved once the remove action has been performed.                                    
                     * @example NotificationsClient.registrations.users.batch.remove(subscriptionIds)
                                    .then(function (data) {     
                                        // perform success action here 
                                    },
                                    function (response, status, headers, config) {     
                                        // perform error handling here 
                                    });		                            
                    */
                    remove(ids: string[]): PromiseLike<IHttpResponse<void>> {
                        return baasicApp.notificationModule.registrations.users.batch.remove(ids);
                    },

                    /**                              
                     * Returns a promise that is resolved once the update user registration action has been performed; this action updates specified user registration resources.                              
                     * @method
                     * @param data UserRegistration objects used to update specified UserRegistration resources.
                     * @returns A promise that is resolved once the update user registration action has been performed.                                
                     * @example NotificationsClient.registrations.users.batch.update(registrations)
                                    .then(function (data) {     
                                        // perform success action here 
                                    },
                                    function (response, status, headers, config) {     
                                        // perform error handling here 
                                    });                             
                    */
                    update(data: IUserRegistration[]): PromiseLike<IHttpResponse<void>> {
                        return baasicApp.notificationModule.registrations.users.batch.update(data);
                    }
                }
            }
        };
    }

    get settings(): INotificationsSettingsClient {
        let baasicApp = this.baasicApp;
        return {
            /**                      
             * Returns a promise that is resolved once the get action has been performed. Success response returns the specified setting resource.                      
             * @method                            
             * @param provider The notification provider name.
             * @returns A promise that is resolved once the get action has been performed. 
             * @example NotificationsClient.settings.get('<provider-name>')
                            .then(function (data) {     
                                // perform success action here 
                            },
                            function (response, status, headers, config) {     
                                // perform error handling here 
                            });                     
            */
            get(provider: string): PromiseLike<IHttpResponse<any>> {
                return baasicApp.notificationModule.settings.get(provider);
            },

            /**                      
             * Returns a promise that is resolved once the update settings action has been performed; this action updates a settings resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicNotificationsSettingsRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
             * ``` 
             * let params = modelMapper.updateParams(settings); 
             * let uri = params['model'].links('put').href; 
             * ```                         
             * @method 
             * @param data The notification settings.
             * @returns A promise that is resolved once the update settings action has been performed.                               
             * @example // settings is a resource previously fetched using get action. 
                            NotificationsClient.settings.update(settings) 
                                .then(function (data) {         
                                    // perform success action here 
                                },
                                function (response, status, headers, config) {         
                                    // perform error handling here 
                                });                     
            */
            update(data: Object): PromiseLike<IHttpResponse<void>> {
                return baasicApp.notificationModule.settings.update(data);
            }
        };
    }
}