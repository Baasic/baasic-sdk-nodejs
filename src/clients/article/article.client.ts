import { BaasicAppClient } from '../index'

import { IACLOptions, IACLPolicy, IBaasicQueryModel, IGetRequestOptions, IHttpResponse, IOptions } from '../../infrastructure/common/contracts';
import {
    IArticle,
    IArticleComment,
    IArticleCommentReply,
    IArticleCommentClient,
    IArticleFile,
    IArticleFilesClient,
    IArticleInstanceClient,
    IArticleRatingsClient,
    IArticleOptions,
    IArticleSettings,
    IArticleSettingsClient,
    IArticleSubscription,
    IArticleSubscriptionsClient,
    IArticleInstanceSubscriptionsClient,
    IArticleTag,
    IArticleTagsClient,
    INotificationConfiguration,
    IRating
} from './contracts';

export class ArticleClient {

    constructor(private baasicApp: BaasicAppClient) { }

    get articles(): IArticleInstanceClient {
        let baasicApp = this.baasicApp;
        return {
            /**                 
            * Returns a promise that is resolved once the find action has been performed. Success response returns a list of article resources matching the given criteria.                 
            * @method
            * @param options A promise that is resolved once the find action has been performed.
            * @returns A promise that is resolved once the find action has been performed.                         
            * @example ArticleClient.articles.find({  
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
            find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IArticle>>> {
                return baasicApp.articleModule.articles.find(options);
            },

            /**                 
             * Returns a promise that is resolved once the get action has been performed. Success response returns a single article resource.                 
             * @method 
             * @param id Article slug or id which uniquely identifies article resource that needs to be retrieved.
             * @param options Options object that contains embed items.
             * @returns a promise that is resolved once the get action has been performed.                       
             * @example ArticleClient.articles.get('<article-id>')
                            .then(function (data) {  
                                // perform success action here 
                            },
                            function (response, status, headers, config) {  
                                // perform error handling here 
                            });                
            **/
            get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IArticle>> {
                return baasicApp.articleModule.articles.get(id, options);
            },

            /**                 
             * Returns a promise that is resolved once the create article action has been performed, this action creates a new article resource.                 
             * @method 
             * @param data An article object that needs to be inserted into the system.
             * @returns a promise that is resolved once the create article action has been performed.                        
             * @example ArticleClient.articles.create({  
                            publishDate : new Date(),  
                            title : '<title>',  
                            content : '<content>',  
                            slug : '',  
                            status : baasicArticleClient.statuses.draft,  
                            $tags : ['<tag1>', '<tag2>'] 
                        })
                        .then(function (data) {  
                            // perform success action here 
                        },
                        function (response, status, headers, config) {  
                            // perform error handling here 
                        });                 
            **/
            create(data: IArticle): PromiseLike<IHttpResponse<IArticle>> {
                return baasicApp.articleModule.articles.create(data);
            },

            /**                 
             * Returns a promise that is resolved once the update article action has been performed; this action updates an article resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicArticleRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
             * ``` 
             * let params = modelMapper.updateParams(article); 
             * let uri = params['model'].links('put').href; 
             * ```                 
             * @method 
             * @param data An article object that needs to be updated into the system.                     
             * @returns A promise that is resolved once the update article action has been performed.
             * @example // article is a resource previously fetched using get action. 
                            article.title = '<title>'; 
                            ArticleClient.articles.update(article)
                                .then(function (data) {  
                                    // perform success action here 
                                },
                                function (response, status, headers, config) {  
                                    // perform error handling here 
                                });                
            **/
            update(data: IArticle): PromiseLike<IHttpResponse<void>> {
                return baasicApp.articleModule.articles.update(data);
            },

            /**                 
             * Returns a promise that is resolved once the saveDraft article action has been performed. This action saves an article with "draft" status. If an article does not exist it will create a new article resource otherwise it will update an existing article resource.                 
             * @method
             * @param data An article object that needs to be inserted into the system.                        
             * @returns A promise that is resolved once the saveDraft article action has been performed.
             * @example // article is a resource previously fetched using get action. 
                                ArticleClient.articles.saveDraft(article)
                                    .then(function (data) {  
                                        // perform success action here 
                                    },
                                    function (response, status, headers, config) {  
                                        // perform error handling here 
                                    });                
            **/
            saveDraft(data: IArticle): PromiseLike<IHttpResponse<any>> {
                return baasicApp.articleModule.articles.saveDraft(data);
            },

            /**                 
             * Returns a promise that is resolved once the remove article action has been performed. If the action is successfully completed, the article resource will be permanently removed from the system. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicArticleRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
             * ``` 
             * let params = modelMapper.removeParams(article); 
             * let uri = params['model'].links('delete').href; 
             * ```                 
             * @method
             * @param data An article object that needs to be removed from the system.
             * @returns A promise that is resolved once the remove article action has been performed.                          
             * @example // article is a resource previously fetched using get action.				 
                            ArticleClient.articles.remove(article)
                                .then(function (data) {  
                                    // perform success action here 
                                },
                                function (response, status, headers, config) {  
                                    // perform error handling here 
                                });		               
            **/
            remove(data: IArticle): PromiseLike<IHttpResponse<void>> {
                return baasicApp.articleModule.articles.remove(data);
            },

            /**                 
             * Returns a promise that is resolved once the archive article action has been performed. This action sets the status of an article from "published" to "archive". This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicArticleRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
             * ``` 
             * let params = modelMapper.updateParams(article); 
             * let uri = params['model'].links('archive').href; 
             * ```                 
             * @method 
             * @param data An article object.                    
             * @param options Notification options.
             * @returns A promise that is resolved once the archive article action has been performed. 
             * @example // article is a resource previously fetched using get action.				 
                            ArticleClient.articles.archive(article, articleOptions)
                                .then(function (data) {  
                                    // perform success action here 
                                },
                                 function (response, status, headers, config) {  
                                     // perform error handling here 
                                });		               
             **/
            archive(data: IArticle, options: IArticleOptions): PromiseLike<IHttpResponse<void>> {
                return baasicApp.articleModule.articles.archive(data, options);
            },

            /**                 
             * Returns a promise that is resolved once the restore article action has been performed. This action sets the status of an article from "archive" to "published". This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicArticleRouteClient` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
             * ``` 
             * let params = modelMapper.updateParams(article); 
             * let uri = params['model'].links('restore').href; 
             * ```                 
             * @method
             * @param data Article object.
             * @returns A promise that is resolved once the restore article action has been performed.                         
             * @example // article is a resource previously fetched using get action.				 
                                ArticleClient.articles.restore(article)
                                    .then(function (data) {  
                                        // perform success action here 
                                    },
                                     function (response, status, headers, config) {  
                                         // perform error handling here 
                                    });		               
             **/
            restore(data: IArticle): PromiseLike<IHttpResponse<void>> {
                return baasicApp.articleModule.articles.restore(data);
            },

            /**                 
             * Returns a promise that is resolved once the unpublish article action has been performed. This action sets the status of an article from "published" to "draft". This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicArticleRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
             * ``` 
             * let params = modelMapper.updateParams(article); 
             * let uri = params['model'].links('unpublish').href; 
             * ```                 
             * @method 
             * @param data An article object.
             * @returns A promise that is resolved once the unpublish article action has been performed.                       
             * @example 	// article is a resource previously fetched using get action.				 
                                ArticleClient.articles.unpublish(article)
                                    .then(function (data) {  
                                        // perform success action here 
                                    },
                                     function (response, status, headers, config) {  
                                         // perform error handling here 
                                    });		               
             **/
            unpublish(data: IArticle): PromiseLike<IHttpResponse<void>> {
                return baasicApp.articleModule.articles.unpublish(data);
            },

            /**                 
             * Returns a promise that is resolved once the publish article action has been performed. This action sets the status of an article from "draft" to "published".                 
             * @method 
             * @param data An article object.
             * @param articleOptions Notification options.
             * @returns A promise that is resolved once the unpublish article action has been performed.                              
             * @example ArticleClient.articles.publish(article, articleOptions)
                            .then(function (data) {  
                                // perform success action here 
                            },
                             function (response, status, headers, config) {  
                                 // perform error handling here 
                            });		               
             **/
            publish(data: IArticle, articleOptions: IArticleOptions): PromiseLike<IHttpResponse<void>> {
                return baasicApp.articleModule.articles.publish(data, articleOptions);
            },

            /**                 
             * Returns a promise that is resolved once the purge articles action has been performed. Please note that all article resources will be deleted from the system once the action is successfully completed and therefore it can only be executed by user assigned to account owner role.                 
             * @method                        
             * @example ArticleClient.articles.purge({})
                            .then(function (data) {  
                                // perform success action here 
                            },
                             function (response, status, headers, config) {  
                                 // perform error handling here 
                            });		               
             **/
            purge(options: Object): PromiseLike<IHttpResponse<void>> {
                return baasicApp.articleModule.articles.purge(options);
            },

            acl: {
                /**                     
                 * Returns a promise that is resolved once the get action has been performed. Success response returns a list of ACL policies established for the specified article resource.                     
                 * @method                         
                 * @example baasicArticleACLClient.get({id: '<article-id>'})
                                .then(function (data) {   
                                    // perform success action here 
                                },
                                function (response, status, headers, config) {   
                                    // perform error handling here 
                                });                     
                **/
                get(options: IACLOptions): PromiseLike<IHttpResponse<IACLPolicy[]>> {
                    return baasicApp.articleModule.articles.acl.get(options);
                },

                /**                     
                 * Returns a promise that is resolved once the update acl action has been performed, this action creates new ACL policy for the specified article resource.                     
                 * @method
                 * @param options An ACL policy object that needs to be updated in the system. This object specifies parameters necessary for establishing user and/or role set of rights.
                 * @returns A promise that is resolved once the update acl action has been performed.
                 * @example let options = {id : '<article-id>'}; 
                            let aclObj =  {  
                                actionId: '<action-id'>,  
                                roleId: '<roleId>',  
                                userId: '<userId>' 
                            }; 
                            options[baasicConstants.modelPropertyName] = aclObj; 
                            baasicArticleACLClient.update(options)
                                .then(function (data) {   
                                    // perform success action here 
                                },
                                function (response, status, headers, config) {   
                                    // perform error handling here 
                                }); 				    
                **/
                update(options: IACLOptions): PromiseLike<IHttpResponse<IACLPolicy[]>> {
                    return baasicApp.articleModule.articles.acl.update(options);
                },

                /**                     
                 * Returns a promise that is resolved once the removeByUser action has been performed. This action deletes ACL policy assigned to the specified user and article resource.                     
                 * @method
                 * @param articleId Article id which uniquely identifies article resource whose security privileges need to be retrieved and updated.
                 * @param action Action abbreviation which identifies ACL policy assigned to the specified user and article resource.
                 *               Supported Values:
                 *               "Create"
                 *               "Delete"
                 *               "Read"
                 *               "Update"
                 * @param user A value that uniquely identifies user for which ACL policy needs to be removed.
                 * @param data An ACL policy object that needs to be updated in the system. 
                 * @returns A promise that is resolved once the removeByUser action has been performed.                        
                 * @example baasicArticleACLClient.removeByUser('<article-id>', '<access-action>', '<username>')
                                .then(function (data) {   
                                    // perform success action here 
                                },
                                function (response, status, headers, config) {   
                                    // perform error handling here 
                                }); 				    
                **/
                removeByUser(articleId: string, action: string, user: string, data: IACLPolicy): PromiseLike<IHttpResponse<void>> {
                    return baasicApp.articleModule.articles.acl.removeByUser(articleId, action, user, data);
                },

                /**                     
                 * Returns a promise that is resolved once the removeByRole action has been performed. This action deletes ACL policy assigned to the specified role and article resource.                     
                 * @method 
                 * @param articleId Article id which uniquely identifies article resource whose security privileges need to be retrieved and updated.
                 * @param action Action abbreviation which identifies ACL policy assigned to the specified user and article resource.
                 *               Supported Values:
                 *               "Create"
                 *               "Delete"
                 *               "Read"
                 *               "Update"
                 * @param role A value that uniquely identifies role for which ACL policy needs to be removed.
                 * @param data An ACL policy object that needs to be updated in the system. 
                 * @returns A promise that is resolved once the removeByRole action has been performed.                     
                 * @example baasicArticleACLClient.removeByRole('<article-id>', '<access-action>', '<role-name>')
                                .then(function (data) {   
                                    // perform success action here 
                                },
                                function (response, status, headers, config) {   
                                    // perform error handling here 
                                }); 				    
                **/
                removeByRole(articleId: string, action: string, role: string, data: IACLPolicy): PromiseLike<IHttpResponse<void>> {
                    return baasicApp.articleModule.articles.acl.removeByRole(articleId, action, role, data);
                }
            },

            comments: {
                /**
                 * Returns a promise that is resolved once the approve article comment action has been performed. This action sets the state of an article comment to "approved". This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicarticleCommentsRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
                 * ``` 
                 * let params = modelMapper.updateParams(articleComment); 
                 * let uri = params['model'].links('comment-approve').href; 
                 * ```
                 * @method
                 * @param data Article Comment object.
                 * @param options Notification configuration used to control the article comment recourse access when managing notification distribution.
                 * @returns A promise that is resolved once the approve article comment action has been performed. 
                 * @example // articleComment is a resource previously fetched using get action. 
                                ArticleClient.articles.comments.approve(articleComment, commentOptions)
                                    .then(function (data) { 
                                        // perform success action here 
                                    },
                                    function (response, status, headers, config) { 
                                        // perform error handling here 
                                    });
                **/
                approve(data: IArticleComment, options: INotificationConfiguration): PromiseLike<IHttpResponse<void>> {
                    return baasicApp.articleModule.articles.comments.approve(data, options);
                },

                /**
                 * Returns a promise that is resolved once the unapprove article comment action has been performed. This action sets the state of an article comment to "unapproved". This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicarticleCommentsRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
                 * ``` 
                 * let params = modelMapper.updateParams(articleComment); 
                 * let uri = params['model'].links('comment-unapprove').href; 
                 * ```
                 * @method
                 * @param data Article Comment object.
                 * @returns A promise that is resolved once the unapprove article comment action has been performed.  
                 * @example // articleComment is a resource previously fetched using get action. 
                                ArticleClient.articles.comments.unapprove(articleComment)
                                    .then(function (data) { 
                                        // perform success action here 
                                    },
                                    function (response, status, headers, config) { 
                                        // perform error handling here 
                                    });
                **/
                unapprove(data: IArticleComment): PromiseLike<IHttpResponse<void>> {
                    return baasicApp.articleModule.articles.comments.unapprove(data);
                },

                /**
                 * Returns a promise that is resolved once the create article comment action has been performed; this action creates a new comment for an article.
                 * @method
                 * @param data An article comment object that needs to be inserted into the system.
                 * @returns A promise that is resolved once the create article comment action has been performed.  
                 * @example ArticleClient.articles.comments.create({ 
                                    articleId : '<article-id>', 
                                    comment : <comment>, 
                                    userId : '<user-id>' })
                                .then(function (data) { 
                                    // perform success action here 
                                },
                                function (response, status, headers, config) { 
                                    // perform error handling here 
                                });
                **/
                create(data: IArticleComment): PromiseLike<IHttpResponse<IArticleComment>> {
                    return baasicApp.articleModule.articles.comments.create(data);
                },

                /**
                 * Returns a promise that is resolved once the find action has been performed. Success response returns a list of article comment resources matching the given criteria.
                 * @method
                 * @param articleId Article slug or id which uniquely identifies article whose comment resources need to be retrieved.
                 * @param options Query resource options object.
                 * @returns A promise that is resolved once the find action has been performed. 
                 * @example ArticleClient.articles.comments.find({ 
                                pageNumber : 1, 
                                pageSize : 10, 
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
                find(articleId: string, options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IArticleComment>>> {
                    return baasicApp.articleModule.articles.comments.find(articleId, options);
                },

                /**
                 * Returns a promise that is resolved once the flag article comment action has been performed. This action sets the state of an article comment to "flagged". This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicarticleCommentsRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
                 * ``` 
                 * let params = modelMapper.updateParams(articleComment); 
                 * let uri = params['model'].links('comment-flag').href; 
                 * ```                     
                 * @method
                 * @param data Article Comment object.
                 * @returns A promise that is resolved once the flag article comment action has been performed. 
                 * @example // articleComment is a resource previously fetched using get action. 
                                ArticleClient.articles.comments.flag(articleComment)
                                    .then(function (data) { 
                                        // perform success action here 
                                    },
                                    function (response, status, headers, config) { 
                                        // perform error handling here 
                                    });		                
                **/
                flag(data: IArticleComment): PromiseLike<IHttpResponse<void>> {
                    return baasicApp.articleModule.articles.comments.flag(data);
                },

                /**
                 * Returns a promise that is resolved once the unflag article comment action has been performed. This action removes the "flagged" comment mark. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicarticleCommentsRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
                 * ``` 
                 * let params = modelMapper.updateParams(articleComment); 
                 * let uri = params['model'].links('comment-unflag').href; 
                 * ```
                 * @method
                 * @param data Article Comment object.
                 * @returns A promise that is resolved once the unflag article comment action has been performed. 
                 * @example // articleComment is a resource previously fetched using get action. 
                                ArticleClient.articles.comments.unflag(articleComment)
                                    .then(function (data) { 
                                        // perform success action here 
                                    },
                                    function (response, status, headers, config) { 
                                        // perform error handling here 
                                    });
                **/
                unflag(data: IArticleComment): PromiseLike<IHttpResponse<void>> {
                    return baasicApp.articleModule.articles.comments.unflag(data);
                },

                /**
                 * Returns a promise that is resolved once the get action has been performed. Success response returns the specified article comment resource.
                 * @method 
                 * @param articleId Article slug or id which uniquely identifies article whose comment resource needs to be retrieved.
                 * @param commentId Id which identifies article comment resource that needs to be retrieved.
                 * @param options Options object that contains embed data.
                 * @returns A promise that is resolved once the get action has been performed. 
                 * @example ArticleClient.articles.comments.get('<article-id>', '<comment-id>')
                             .then(function (data) { 
                                 // perform success action here 
                             },
                                function (response, status, headers, config) { 
                                // perform error handling here 
                            });
                **/
                get(articleId: string, commentId: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IArticleComment>> {
                    return baasicApp.articleModule.articles.comments.get(articleId, commentId, options);
                },

                /**
                 * Returns a promise that is resolved once the remove article comment action has been performed. If the action is successfully completed, the article comment resource and its replies will be permanently removed from the system. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicArticleCommentsRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
                 ``` 
                 let params = modelMapper.removeParams(articleComment); 
                 let uri = params['model'].links('delete').href; 
                 ```
                 * @method
                 * @param data An article comment object used to delete specified article comment resource.
                 * @returns A promise that is resolved once the remove article comment action has been performed.
                 * @example // articleComment is a resource previously fetched using get action. 
                                 ArticleClient.articles.comments.remove(articleComment)
                                     .then(function (data) { 
                                         // perform success action here 
                                     }, 
                                        function (response, status, headers, config) { 
                                        // perform error handling here 
                                    });
                **/
                remove(data: IArticleComment): PromiseLike<IHttpResponse<void>> {
                    return baasicApp.articleModule.articles.comments.remove(data);
                },

                /**                     
                 * Returns a promise that is resolved once the removeAll article comment action has been performed. This action will remove all comments and comment replies from an article if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicArticleInstanceRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
                 * ``` 
                 * let params = modelMapper.removeParams(articleComment); 
                 * let uri = params['model'].links('delete-comments-by-article').href; 
                 * ```                     
                 * @method
                 * @param data An article object used to delete specified article comment resource.
                 * @returns A promise that is resolved once the removeAll article comment action has been performed.                      
                 * @example // articleComment is a resource previously fetched using get action.					
                                ArticleClient.articles.comments.removeAll(articleComment)
                                    .then(function (data) {   
                                        // perform success action here 
                                    },
                                    function (response, status, headers, config) {   
                                        // perform error handling here 
                                    });						    
                **/
                removeAll(data: IArticle): PromiseLike<IHttpResponse<void>> {
                    return baasicApp.articleModule.articles.comments.removeAll(data);
                },

                /** 
                 * Returns a promise that is resolved once the report article comment action has been performed. This action sets the state of an article comment to "reported". This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicarticleCommentsRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
                 * ``` 
                 * let params = modelMapper.updateParams(articleComment); 
                 * let uri = params['model'].links('comment-report').href; 
                 * ```
                 * @method
                 * @param data Article Comment object.
                 * @param options Notification configuration used to control the article comment recourse access when managing notification distribution.
                 * @returns A promise that is resolved once the report article comment action has been performed.  
                 * @example // articleComment is a resource previously fetched using get action.
                                ArticleClient.articles.comments.report(articleComment, commentOptions)
                                    .success(function (data) { 
                                        // perform success action here 
                                    })
                                    .error(function (response, status, headers, config) { 
                                        // perform error handling here 
                                    });
                **/
                report(data: IArticleComment, options: INotificationConfiguration): PromiseLike<IHttpResponse<void>> {
                    return baasicApp.articleModule.articles.comments.report(data, options);
                },

                /**
                 * Returns a promise that is resolved once the unreport article comment action has been performed. This action removes the "reported" comment mark. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicarticleCommentsRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
                 * ``` 
                 * let params = modelMapper.updateParams(articleComment); 
                 * let uri = params['model'].links('comment-unreport').href; 
                 * ```
                 * @method
                 * @param data Article Comment object.
                 * @returns A promise that is resolved once the unreport article comment action has been performed.  
                 * @example // articleComment is a resource previously fetched using get action. 
                                ArticleClient.articles.comments.unreport(articleComment)
                                    .then(function (data) { 
                                        // perform success action here 
                                    },
                                    function (response, status, headers, config) { 
                                        // perform error handling here 
                                    });
                **/
                unreport(data: IArticleComment): PromiseLike<IHttpResponse<void>> {
                    return baasicApp.articleModule.articles.comments.unreport(data);
                },

                /**                 
                 * Returns a promise that is resolved once the update article comment action has been performed; this action updates an article comment resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicarticleCommentsRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
                 * ``` 
                 * let params = modelMapper.updateParams(articleComment); 
                 * let uri = params['model'].links('put').href; 
                 * ```                     
                 * @method
                 * @param data An article comments object used to update specified article comment resource.
                 * @returns A promise that is resolved once the update article comment action has been performed.                      
                 * @example // articleComment is a resource previously fetched using get action.				 
                                ArticleClient.article.comments.update(articleComment)
                                    .then(function (data) { 
                                        // perform success action here 
                                    },
                                    function (response, status, headers, config) { 
                                        // perform error handling here 
                                    });		                
                **/
                update(data: IArticleComment): PromiseLike<IHttpResponse<void>> {
                    return baasicApp.articleModule.articles.comments.update(data);
                },

                /**                     
                 * Returns a promise that is resolved once the mark as spam article comment action has been performed. This action sets the state of an article comment to "spam". This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicArticleInstanceRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
                 * ``` 
                 * let params = modelMapper.updateParams(articleComment); 
                 * let uri = params['model'].links('comment-spam').href; 
                 * ```                      
                 * @method
                 * @param data Article Comment object.
                 * @returns A promise that is resolved once the mark as spam article comment action has been performed.                             
                 * @example // articleComment is a resource previously fetched using get action.				 
                                ArticleClient.articles.comments.spam(articleComment)
                                    .then(function (data) {   
                                        // perform success action here 
                                    },
                                    function (response, status, headers, config) {   
                                        // perform error handling here 
                                    });						    
                **/
                spam(data: IArticleComment): PromiseLike<IHttpResponse<void>> {
                    return baasicApp.articleModule.articles.comments.spam(data);
                },

                /**                     
                 * Returns a promise that is resolved once the unspam article comment action has been performed. This action removes the "spam" comment state. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicArticleInstanceRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
                 * ``` 
                 * let params = modelMapper.updateParams(articleComment); 
                 * let uri = params['model'].links('comment-unspam').href; 
                 * ```                      
                 * @method
                 * @param data Article Comment object.
                 * @returns A promise that is resolved once the unspam article comment action has been performed.                           
                 * @example // articleComment is a resource previously fetched using get action.				 
                                     ArticleClient.articles.comments.unspam(articleComment)
                                        .then(function (data) {   
                                            // perform success action here 
                                        },
                                        function (response, status, headers, config) {   
                                            // perform error handling here 
                                        });						    
                **/
                unspam(data: IArticleComment): PromiseLike<IHttpResponse<void>> {
                    return baasicApp.articleModule.articles.comments.unspam(data);
                },

                replies: {
                    /**
                    * Returns a promise that is resolved once the approve article comment reply action has been performed. This action sets the state of an article comment reply to "approved". This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicArticleCommentRepliesRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
                    * ``` 
                    * let params = modelMapper.updateParams(articleCommentReply); 
                    * let uri = params['model'].links('comment-approve').href; 
                    * ```
                    * @method
                    * @param data Article Comment Reply object.
                    * @param options Notification configuration used to control the article comment recourse access when managing notification distribution.
                    * @example // articleCommentReply is a resource previously fetched using get action. 
                                   ArticleClient.articles.comments.replies.approve(articleCommentReply, commentOptions)
                                       .then(function (data) { 
                                           // perform success action here 
                                       },
                                       function (response, status, headers, config) { 
                                           // perform error handling here 
                                       });
                   **/
                    approve(data: IArticleCommentReply, options: IOptions): PromiseLike<IHttpResponse<void>> {
                        return baasicApp.articleModule.articles.comments.replies.approve(data, options);
                    },

                    /**
                     * Returns a promise that is resolved once the unapprove article comment reply action has been performed. This action sets the state of an article comment reply to "unapproved". This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicarticleCommentRepliesRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
                     * ``` 
                     * let params = modelMapper.updateParams(articleCommentReply); 
                     * let uri = params['model'].links('comment-unapprove').href; 
                     * ```
                     * @method
                     * @param data Article Comment Reply object.
                     * @returns A promise that is resolved once the unapprove article comment reply action has been performed.  
                     * @example // articleCommentReply is a resource previously fetched using get action.
                                    ArticleClient.articles.comments.replies.unapprove(articleCommentReply)
                                        .then(function (data) { 
                                            // perform success action here 
                                        },
                                        function (response, status, headers, config) { 
                                            // perform error handling here 
                                        });
                    **/
                    unapprove(data: IArticleCommentReply): PromiseLike<IHttpResponse<void>> {
                        return baasicApp.articleModule.articles.comments.replies.unapprove(data);
                    },

                    /**
                     * Returns a promise that is resolved once the create article comment reply action has been performed; this action creates a new comment reply for an article.
                     * @method
                     * @param articleId Article id which uniquely identifies article that needs to be updated with new comment reply resource.
                     * @param data An article comment reply object that needs to be inserted into the system.
                     * @returns A promise that is resolved once the create article comment reply action has been performed. 
                     * @example ArticleClient.articles.comments.replies.create('<article-id>', { 
                                    commentId : '<comment-id>', 
                                    comment : <comment>, 
                                    userId : '<user-id>' })
                                .then(function (data) { 
                                    // perform success action here 
                                },
                                function (response, status, headers, config) { 
                                    // perform error handling here 
                                });
                    **/
                    create(articleId: string, data: IArticleCommentReply): PromiseLike<IHttpResponse<IArticleCommentReply>> {
                        return baasicApp.articleModule.articles.comments.replies.create(articleId, data);
                    },

                    /**
                     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of article comment reply resources matching the given criteria.
                     * @method
                     * @param articleId Article id which uniquely identifies article whose comment reply resources need to be retrieved.
                     * @param commentId Comment id which uniquely identifies comment whose reply resources need to be retrieved.
                     * @param options Query resource options.
                     * @returns A promise that is resolved once the find action has been performed. 
                     * @example ArticleClient.articles.comments.replies.find({ 
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
                    find(articleId: string, commentId: string, options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IArticleCommentReply>>> {
                        return baasicApp.articleModule.articles.comments.replies.find(articleId, commentId, options);
                    },

                    /**
                     * Returns a promise that is resolved once the flag article comment reply action has been performed. This action sets the state of an article comment reply to "flagged". This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicarticleCommentRepliesRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
                     * ``` 
                     * let params = modelMapper.updateParams(articleCommentReply); 
                     * let uri = params['model'].links('comment-flag').href; 
                     * ```
                     * @method
                     * @param data Article Comment Reply object.
                     * @returns A promise that is resolved once the flag article comment reply action has been performed. 
                     * @example     // articleCommentReply is a resource previously fetched using get action.
                                        ArticleClient.articles.comments.replies.flag(articleCommentReply)
                                            .then(function (data) { 
                                                // perform success action here 
                                            },
                                            function (response, status, headers, config) { 
                                                // perform error handling here 
                                            });
                    **/
                    flag(data: IArticleCommentReply): PromiseLike<IHttpResponse<void>> {
                        return baasicApp.articleModule.articles.comments.replies.flag(data);
                    },

                    /**
                     * Returns a promise that is resolved once the unflag article comment reply action has been performed. This action removes the "flagged" comment reply state. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicarticleCommentRepliesRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
                     * ``` 
                     * let params = modelMapper.updateParams(articleCommentReply); 
                     * let uri = params['model'].links('comment-unflag').href; 
                     * ```
                     * @method 
                     * @param data Article Comment Reply object.
                     * @returns A promise that is resolved once the unflag article comment reply action has been performed. 
                     * @example // articleCommentReply is a resource previously fetched using get action. 
                                    ArticleClient.articles.comments.replies.unflag(articleCommentReply)
                                        .success(function (data) { 
                                            // perform success action here 
                                        }).error(function (response, status, headers, config) { 
                                            // perform error handling here 
                                        });
                    **/
                    unflag(data: IArticleCommentReply): PromiseLike<IHttpResponse<void>> {
                        return baasicApp.articleModule.articles.comments.replies.unflag(data);
                    },

                    /**
                     * Returns a promise that is resolved once the get action has been performed. Success response returns the specified article comment reply resource.
                     * @method
                     * @param articleId Article id which uniquely identifies article whose comment reply resource needs to be retrieved.
                     * @param commentId Comment id which uniquely identifies comment whose reply resource needs to be retrieved.
                     * @param replyId Id which uniquely identifies article comment reply resource that needs to be retrieved.
                     * @param options Options object that contains embed data.
                     * @returns A promise that is resolved once the get action has been performed. 
                     * @example ArticleClient.articles.comments.replies.get('<comment-reply-id>')
                                    .then(function (data) { 
                                        // perform success action here 
                                    },
                                    function (response, status, headers, config) {
                                        // perform error handling here 
                                    });
                    **/
                    get(articleId: string, commentId: string, replyId: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IArticleCommentReply>> {
                        return baasicApp.articleModule.articles.comments.replies.get(articleId, commentId, replyId, options);
                    },

                    /**
                     * Returns a promise that is resolved once the remove article comment reply action has been performed. If the action is successfully completed, the article comment reply resource will be permanently removed from the system. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicarticleCommentRepliesRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
                     * ``` 
                     * let params = baasicApiClient.removeParams(articleCommentReply); 
                     * let uri = params['model'].links('delete').href; 
                     * ```
                     * @method
                     * @param data An article comment object used to delete specified article comment reply resource.
                     * @returns A promise that is resolved once the remove article comment reply action has been performed. 
                     * @example // articleCommentReply is a resource previously fetched using get action. 
                                    ArticleClient.articles.comments.replies.remove(articleCommentReply)
                                        .then(function (data) { 
                                            // perform success action here 
                                        },
                                        function (response, status, headers, config) { 
                                            // perform error handling here 
                                        });
                    **/
                    remove(data: IArticleCommentReply): PromiseLike<IHttpResponse<void>> {
                        return baasicApp.articleModule.articles.comments.replies.remove(data);
                    },

                    /**                         
                     * Returns a promise that is resolved once the removeAll article comment reply action has been performed. This action will remove all comment replies from an article comment if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicArticleInstanceCommentsRepliesRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
                     * ``` 
                     * let params = modelMapper.removeParams(articleCommentReply); 
                     * let uri = params['model'].links('delete-comments-by-article').href; 
                     * ```                         
                     * @method
                     * @param data Article object used to delete all article comments in the system.
                     * @returns a promise that is resolved once the removeAll article comment reply action has been performed.                           
                     * @example // articleCommentReply is a resource previously fetched using get action.					
                                    ArticleClient.articles.comments.replies.removeAll(articleCommentReply)
                                        .then(function (data) {   
                                            // perform success action here 
                                        },
                                        function (response, status, headers, config) {   
                                            // perform error handling here 
                                        });		                        
                    **/
                    removeAll(data: IArticle): PromiseLike<IHttpResponse<void>> {
                        return baasicApp.articleModule.articles.comments.replies.removeAll(data);
                    },

                    /**
                     * Returns a promise that is resolved once the report article comment reply action has been performed. This action sets the state of an article comment reply to "reported". This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicarticleCommentRepliesRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
                     * ``` 
                     * let params = modelMapper.updateParams(articleCommentReply); 
                     * let uri = params['model'].links('comment-report').href; 
                     * ```
                     * @method 
                     * @param data Article Comment Reply object.
                     * @param options Notification configuration used to control the article comment recourse access when managing notification distribution.
                     * @returns A promise that is resolved once the report article comment reply action has been performed. 
                     * @example // articleCommentReply is a resource previously fetched using get action. 
                                    ArticleClient.articles.comments.replies.report(articleCommentReply, commentOptions)
                                        .then(function (data) { 
                                            // perform success action here 
                                        },
                                        function (response, status, headers, config) { 
                                            // perform error handling here 
                                        });
                    **/
                    report(data: IArticleCommentReply, options?: INotificationConfiguration): PromiseLike<IHttpResponse<void>> {
                        return baasicApp.articleModule.articles.comments.replies.report(data, options);
                    },

                    /**
                     * Returns a promise that is resolved once the unreport article comment reply action has been performed. This action removes the "reported" comment reply state. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicarticleCommentRepliesRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
                     * ``` 
                     * let params = modelMapper.updateParams(articleCommentReply); 
                     * let uri = params['model'].links('comment-unreport').href; 
                     * ```
                     * @method
                     * @param data Article Comment Reply object.
                     * @returns A promise that is resolved once the unreport article comment reply action has been performed. 
                     * @example // articleCommentReply is a resource previously fetched using get action. 
                                    ArticleClient.articles.comments.replies.unreport(articleCommentReply)
                                        .then(function (data) { 
                                            // perform success action here 
                                        },
                                        function (response, status, headers, config) { 
                                            // perform error handling here 
                                        });
                    **/
                    unreport(data: IArticleCommentReply): PromiseLike<IHttpResponse<void>> {
                        return baasicApp.articleModule.articles.comments.replies.unreport(data);
                    },

                    /**
                     * Returns a promise that is resolved once the mark as spam article comment reply action has been performed. This action sets the state of an article comment reply to "spam". This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicarticleCommentRepliesRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
                     * ``` 
                     * let params = modelMapper.updateParams(articleCommentReply); 
                     * let uri = params['model'].links('comment-spam').href; 
                     * ```
                     * @method
                     * @param data Article Comment Reply object.
                     * @returns A promise that is resolved once the mark as spam article comment reply action has been performed. 
                     * @example // articleCommentReply is a resource previously fetched using get action. 
                                    ArticleClient.articles.comments.replies.spam(articleCommentReply)
                                        .then(function (data) { 
                                            // perform success action here 
                                        },
                                        function (response, status, headers, config) { 
                                            // perform error handling here 
                                        });
                    **/
                    spam(data: IArticleCommentReply): PromiseLike<IHttpResponse<void>> {
                        return baasicApp.articleModule.articles.comments.replies.spam(data);
                    },

                    /**
                     * Returns a promise that is resolved once the unspam article comment reply action has been performed. This action removes the "spam" comment reply state. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicarticleCommentRepliesRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
                     * ``` 
                     * let params = modelMapper.updateParams(articleCommentReply); 
                     * let uri = params['model'].links('comment-unspam').href; 
                     * ```
                     * @method 
                     * @param data Article Comment Reply object.
                     * @returns a promise that is resolved once the unspam article comment reply action has been performed. 
                     * @example // articleCommentReply is a resource previously fetched using get action. 
                                     ArticleClient.articles.comments.replies.unspam(articleCommentReply)
                                        .then(function (data) { 
                                            // perform success action here 
                                        },
                                        function (response, status, headers, config) { 
                                            // perform error handling here 
                                        });
                    **/
                    unspam(data: IArticleCommentReply): PromiseLike<IHttpResponse<void>> {
                        return baasicApp.articleModule.articles.comments.replies.unspam(data);
                    }
                }
            },

            files: {
                /**                  
                 * Returns a promise that is resolved once the find action has been performed. Success response returns a list of file resources matching the given criteria.                  
                 * @method
                 * @param articleId Article slug or id which uniquely identifies article whose article files need to be retrieved.
                 * @param options Query resource options object.
                 * @returns A promise that is resolved once the find action has been performed.                         
                 * @example ArticleClient.articles.files.find({   
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
                find(articleId: string, options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IArticleFile>>> {
                    return baasicApp.articleModule.articles.files.find(articleId, options);
                },

                /**                 
                 * Returns a promise that is resolved once the get action has been performed. Success response returns requested file resource.                 
                 * @method
                 * @param articleId Article slug or id which uniquely identifies article whose article files need to be retrieved.
                 * @param id Article file id which uniquely identifies article file that needs to be retrieved.
                 * @param options options object that contains embed data.
                 * @returns A promise that is resolved once the get action has been performed.                         
                 * @example ArticleClient.articles.files.get('<file-id>')
                             .then(function (data) {   
                                 // perform success action here 
                             },
                                function (response, status, headers, config) {   
                                // perform error handling here 
                            });                 
                **/
                get(articleId: string, id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IArticleFile>> {
                    return baasicApp.articleModule.articles.files.get(articleId, id, options);
                },

                /**                  
                 * Returns a promise that is resolved once the unlink action has been performed. This action will remove one or many file resources from the system if successfully completed. Specified file and all its accompanying derived resources will be removed from the system. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply baasicArticleFilesRouteClient route template. Here is an example of how a route can be obtained from HAL enabled objects: 
                 * ``` 
                 * let params = modelMapper.removeParams(fileEntry); 
                 * let uri = params['model'].links('unlink').href; 
                 * ```                  
                 * @method
                 * @param articleId Article slug or id which uniquely identifies article whose article files need to be deleted.
                 * @param data Article file used to identify article files on which delete action should be performed.
                 * @param options
                 * @returns A promise that is resolved once the unlink action has been performed.                          
                 * @example // fileEntry is a file resource previously fetched using get action. The following action will remove the original file resource and all accompanying derived file resources.			 
                                ArticleClient.articles.files.remove(fileEntry)
                                    .then(function (data) {   
                                        // perform success action here 
                                    },
                                    function (response, status, headers, config) {   
                                        // perform error handling here 
                                    }); 				
                **/
                unlink(articleId: string, data: any, options: Object): PromiseLike<IHttpResponse<void>> {
                    return baasicApp.articleModule.articles.files.unlink(articleId, data, options);
                },

                /**                      
                 * Returns a promise that is resolved once the unlink by article action has been performed. This action will remove all file resources from the system related to the requested article if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply baasicArticleClient route template. Here is an example of how a route can be obtained from HAL enabled objects: 
                 * ``` 
                 * let params = modelMapper.removeParams(fileEntry); 
                 * let uri = params['model'].links('unlink-by-article').href; 
                 * ```                     
                 * @method
                 * @param articleId Article slug or id which uniquely identifies article whose article files need to be deleted.
                 * @param data Article file used to identify article files on which delete action should be performed.
                 * @param options
                 * @returns A promise that is resolved once the unlink by article action has been performed.                              
                 * @example // fileEntry is a file resource previously fetched using get action.		 
                                ArticleClient.articles.files.unlinkByArticle(fileEntry)
                                    .then(function (data) { 
                                        // perform success action here 
                                    },
                                    function (response, status, headers, config) { 
                                        // perform error handling here 
                                    });                     
                **/
                unlinkByArticle(articleId: string, data: any, options: Object): PromiseLike<IHttpResponse<void>> {
                    return baasicApp.articleModule.articles.files.unlinkByArticle(articleId, data, options);
                },

                /**                  
                 * Returns a promise that is resolved once the update file action has been performed; this action will update a file resource if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicArticleFilesRouteClient` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
                 ``` 
                 let params = modelMapper.updateParams(fileEntry); 
                 let uri = params['model'].links('put').href; 
                 ```                  
                 * @method
                 * @param articleId Article slug or id which uniquely identifies article whose article file need to be updated.
                 * @param data A article file object used to update specified article file.
                 * @returns A promise that is resolved once the update file action has been performed                            
                 * @example // fileEntry is a file resource previously fetched using get action. 
                             fileEntry.description = '<description>'; 
                             ArticleClient.articles.files.update(fileEntry)
                                 .then(function (data) {   
                                     // perform success action here 
                                 },
                                    function (response, status, headers, config) {   
                                    // perform error handling here 
                                }); 				
                **/
                update(articleId: string, data: IArticleFile): PromiseLike<IHttpResponse<void>> {
                    return baasicApp.articleModule.articles.files.update(articleId, data);
                },

                /** 
                 * Returns a promise that is resolved once the link action has been performed; this action links file resource from other modules into the Article Files module (For example: file resources from the Media Vault module can be linked directly into the Article Files module).                  
                 * @method
                 * @param articleId Article slug or id which uniquely identifies article whose article files need to be linked.
                 * @param data A article file object that need to be inserted into the system.
                 * @returns A promise that is resolved once the link action has been performed.                          
                 * @example ArticleClient.articles.files.link(fileObject)
                                .then(function (response, status, headers, config) {   
                                    // perform success handling here 
                                },
                                    function (response, status, headers, config) {   
                                    // perform error handling here 
                                });                 
                **/
                link(articleId: string, data: IArticleFile): PromiseLike<IHttpResponse<IArticleFile>> {
                    return baasicApp.articleModule.articles.files.link(articleId, data);
                },

                batch: {
                    /**                   
                     * Returns a promise that is resolved once the unlink action has been performed. This action will remove file resources from the system if successfully completed. If derived resource's format is passed, such as `width` and `height` for the image type of file resource, the operation will remove just derived resource. Otherwise, specified file and all its accompanying derived resources will be removed from the system.                   
                     * @method
                     * @param articleId Article file id of the original article file used to identify article files on which delete action should be performed.
                     * @param data Collection of article delete requests which uniquely identifies article files that need to be deleted.
                     * @returns A promise that is resolved once the unlink action has been performed.                          
                     * @example // Remove original file resources                
                                 baasicArticleInstanceFilesBatchClient.unlink([{ id: '<file-id>' }])
                                     .then(function (data) {   
                                         // perform success action here 
                                     },
                                        function (response, status, headers, config) {   
                                        // perform error handling here 
                                    });		
                            // Remove derived file resources  
                                ArticleClient.articles.files.batch.unlink([{ id: '<file-id>', fileFormat: { width: <width>, height: <height> } }])
                                    .then(function (data) {   
                                        // perform success action here 
                                    },
                                        function (response, status, headers, config) {   
                                        // perform error handling here 
                                    });		                    
                    **/
                    unlink(articleId: string, data: IArticleFile[]): PromiseLike<IHttpResponse<void>> {
                        return baasicApp.articleModule.articles.files.batch.unlink(articleId, data);
                    },

                    /**                   
                     * Returns a promise that is resolved once the update action has been performed; this action updates specified file resources.                  
                     * @method
                     * @param articleId Article slug or id which uniquely identifies article whose article file need to be updated.
                     * @param data Article file object that need to be updated in the system.
                     * @returns A promise that is resolved once the update action has been performed.                           
                     * @example ArticleClient.articles.files.batch.update(files)
                                    .then(function (data) {   
                                        // perform success action here 
                                    },
                                    function (response, status, headers, config) {   
                                        // perform error handling here 
                                    });                   
                    **/
                    update(articleId: string, data: IArticleFile[]): PromiseLike<IHttpResponse<void>> {
                        return baasicApp.articleModule.articles.files.batch.update(articleId, data);
                    },

                    /**                   
                     * Returns a promise that is resolved once the link action has been performed; this action links file resources from other modules into the Files module (For example: file resources from the Media Vault module can be linked directly into the Files module).                   
                     * @method
                     * @param articleId Article slug or id which uniquely identifies article whose article files need to be linked.
                     * @param data A collection of article file objects that need to be inserted into the system.
                     * @returns A promise that is resolved once the link action has been performed.                          
                     * @example ArticleClient.articles.files.batch.link(files)
                                    .then(function (data) {   
                                        // perform success action here 
                                    },
                                    function (response, status, headers, config) {   
                                        // perform error handling here 
                                    });                   
                    **/
                    link(articleId: string, data: IArticleFile[]): PromiseLike<IHttpResponse<any>> {
                        return baasicApp.articleModule.articles.files.batch.link(articleId, data);
                    }
                },

                streams: {
                    /**                     
                     * Returns a promise that is resolved once the get action has been performed. Success response returns the file stream if successfully completed. If derived resource's format is passed, such as `width` and `height` for the image type of file resource, the operation will return a stream of the derived resource. Otherwise, stream of the original file resource will be retrieved.                     
                     * @method
                     * @param articleId Article slug or id which uniquely identifies article whose article file need to be retrieved.
                     * @param data Article File object used to identify stream that needs to be retrieved from the system.                             
                     * @returns A promise that is resolved once the get action has been performed.                           
                     * @example // Request the original file stream              
                                    ArticleClient.articles.files.streams.get({id: '<file-id>'})
                                        .then(function (data) {     
                                            // perform success action here 
                                        },
                                        function (response, status, headers, config) {     
                                            // perform error handling here 
                                        });

                                // Request derived file stream                
                                        ArticleClient.articles.files.streams.get({id: '<file-id>', width: <width>, height: <height>})
                                            .then(function (data) {     
                                                // perform success action here 
                                            },
                                            function (response, status, headers, config) {    
                                                // perform error handling here 
                                            });                     
                    **/
                    get(articleId: string, data: any): PromiseLike<IHttpResponse<any>> {
                        return baasicApp.articleModule.articles.files.streams.get(articleId, data);
                    },

                    /**                     
                    * Returns a promise that is resolved once the get action has been performed. Success response returns the file stream as a blob. If derived resource's format is passed, such as `width` and `height` for the image type of file resource, the operation will return a blob of the derived file resource. Otherwise, blob of the original file resource will be retrieved. For more information on Blob objects please see [Blob Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Blob).                     
                    * @method
                    * @param articleId Article slug or id which uniquely identifies article whose article file need to be retrieved.
                    * @param data Article File object used to identify stream that needs to be retrieved from the system.    
                    * @returns A promise that is resolved once the get action has been performed.                             
                    * @example // Request the original blob                
                                ArticleClient.articles.files.streams.getBlob('<file-id>')
                                    .then(function (data) {     
                                        // perform success action here 
                                    },
                                    function (response, status, headers, config) {     
                                        // perform error handling here 
                                    }); 
                                    
                            // Request derived blob                 
                                    ArticleClient.articles.files.streams.getBlob({
                                        id: '<file-id>', 
                                        width: <width>, 
                                        height: <height>
                                    })
                                    .then(function (data) {     
                                        // perform success action here 
                                    },
                                    function (response, status, headers, config) {     
                                        // perform error handling here 
                                    });                     
                     **/
                    getBlob(articleId: string, data: any): PromiseLike<IHttpResponse<any>> {
                        return baasicApp.articleModule.articles.files.streams.getBlob(articleId, data);
                    },

                    /**                      
                     * Returns a promise that is resolved once the update file stream action has been performed; this action will replace the existing stream with a new one. Alternatively, if a derived stream is being updated it will either create a new derived stream or replace the existing one. In order to update a derived stream, format needs to be passed (For example: `width` and `height` for the image type of file stream data type).                      
                     * @method
                     * @param articleId Article slug or id which uniquely identifies article whose article file need to be updated.
                     * @param data Article File object used to identify stream that needs to be updated.
                     * @param stream                     
                     * @returns A promise that is resolved once the update file stream action has been performed.                     
                     * @example // Update original file stream 
                                    ArticleClient.articles.files.streams.update('<file-id>', <file-stream>)
                                        .then(function (data) {   
                                            // perform success action here 
                                        },
                                        function (response, status, headers, config) {   
                                            // perform error handling here 
                                        }); 
                                // Update derived file stream 
                                    ArticleClient.articles.files.streams.update({id: '<file-id>', width: <width>, height: <height>}, <file-stream>)
                                        .then(function (data) {   
                                            // perform success action here 
                                        },
                                        function (response, status, headers, config) {   
                                            // perform error handling here 
                                        });                     
                    **/
                    update(articleId: string, data: any, stream: any): PromiseLike<IHttpResponse<any>> {
                        return baasicApp.articleModule.articles.files.streams.update(articleId, data, stream);
                    },

                    /**                      
                     * Returns a promise that is resolved once the create file stream action has been performed; this action will upload the specified blob. For more information on Blob objects please see [Blob Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Blob).                      
                     * @method
                     * @param articleId Article slug or id which uniquely identifies article whose article file need to be inserted.
                     * @param data Article File object that need to be inserted into the system.
                     * @param stream
                     * @returns A promise that is resolved once the create file stream action has been performed.                        
                     * @example ArticleClient.articles.files.streams.create('<file-id>', <blob>)
                                 .then(function (data) {  
                                        // perform success action here 
                                },
                                    function (response, status, headers, config) {   
                                    // perform error handling here 
                                });                     
                    **/
                    create(articleId: string, data: IArticleFile, stream: any): PromiseLike<IHttpResponse<any>> {
                        return baasicApp.articleModule.articles.files.streams.create(articleId, data, stream);
                    }
                }
            },

            ratings: {
                /**       
                 * Returns a promise that is resolved once the create article rating action has been performed; this action creates a new rating for an article.                   
                 * @method
                 * @param data An article rating object that needs to be inserted into the system.
                 * @returns A promise that is resolved once the create article rating action has been performed.                        
                 * @example ArticleClient.articles.ratings.create({ articleId : '<article-id>', rating : 5, userId : '<user-id>' })
                                .then(function (data) { 
                                    // perform success action here 
                                },
                                function (response, status, headers, config) { 
                                    // perform error handling here 
                                });                   
                **/
                create(data: IRating): PromiseLike<IHttpResponse<IRating>> {
                    return baasicApp.articleModule.articles.ratings.create(data);
                },

                /**                  
                 * Returns a promise that is resolved once the find action has been performed. Success response returns a list of article rating resources matching the given criteria.                  
                 * @method
                 * @param articleId Article slug or id which uniquely identifies article whose rating resources need to be retrieved.
                 * @param options Query resource options object.
                 * @returns A promise that is resolved once the find action has been performed.                           
                 * @example ArticleClient.articles.ratings.find({ 
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
                find(articleId: string, options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IRating>>> {
                    return baasicApp.articleModule.articles.ratings.find(articleId, options);
                },

                /**                  
                 * Returns a promise that is resolved once the findByUser action has been performed. Success response returns a list of article rating resources filtered by username.                  
                 * @method
                 * @param articleId Article slug or id which uniquely identifies article whose rating resources need to be retrieved.
                 * @param username Username which uniquely identifies a user which has created an article rating.
                 * @param options Query resource options object.
                 * @returns A promise that is resolved once the findByUser action has been performed.                         
                 * @example ArticleClient.articles.ratings.find('<username>', {   
                                pageNumber : 1,   
                                pageSize : 10,   
                                orderBy : '<field>',   
                                orderDirection : '<asc|desc>'
                            })
                            .then(function (collection) {   
                                // perform success action here 
                            },
                            function (response, status, headers, config) {   
                                // perform error handling here 
                            });                     
                **/
                findByUser(articleId: string, username: string, options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IRating>>> {
                    return baasicApp.articleModule.articles.ratings.findByUser(articleId, username, options);
                },

                /**                  
                 * Returns a promise that is resolved once the get action has been performed. Success response returns the specified article rating resource.                  
                 * @method
                 * @param articleId Article slug or id which uniquely identifies article whose rating resources need to be retrieved.
                 * @param id Article slug or id which uniquely identifies article resource that needs to be retrieved.
                 * @param options Options object that contains embed data.
                 * @returns A promise that is resolved once the get action has been performed.                          
                 * @example ArticleClient.articles.ratings.get('<articleRating-id>')
                                .then(function (data) {   
                                    // perform success action here 
                                },
                                function (response, status, headers, config) {   
                                    // perform error handling here 
                                });                 
                **/
                get(articleId: string, id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IRating>> {
                    return baasicApp.articleModule.articles.ratings.get(articleId, id, options);
                },

                /**                  
                 * Returns a promise that is resolved once the update article rating action has been performed; this action updates an article rating. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicArticleRatingsRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
                 * ``` 
                 * let params = modelMapper.removeParams(articleRating); 
                 * let uri = params['model'].links('put').href; 
                 * ```                  
                 * @method
                 * @param data An article object used to update specified article resource.
                 * @returns A promise that is resolved once the update article rating action has been performed.                          
                 * @example // articleRating is a resource previously fetched using get action. 
                                articleRating.rating = 4; 
                                ArticleClient.articles.ratings.update(articleRating)
                                    .then(function (data) {   
                                        // perform success action here 
                                    },
                                    function (response, status, headers, config) {   
                                        // perform error handling here 
                                    }); 				
                **/
                update(data: IRating): PromiseLike<IHttpResponse<void>> {
                    return baasicApp.articleModule.articles.ratings.update(data);
                },

                /**                 
                 * Returns a promise that is resolved once the remove article rating action has been performed. If the action is successfully completed, the article rating resource will be permanently removed from the system. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicArticleRatingsRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
                 * ``` 
                 * let params = modelMapper.removeParams(articleRating); 
                 * let uri = params['model'].links('delete').href; 
                 * ```                 
                 * @method
                 * @param data Rating resource resource that needs to be deleted.                        
                 * @returns a promise that is resolved once the remove article rating action has been performed.                        
                 * @example // articleRating is a resource previously fetched using get action.				 
                                ArticleClient.articles.ratings.remove(articleRating)
                                    .then(function (data) {   
                                        // perform success action here 
                                    },
                                    function (response, status, headers, config) {   
                                        // perform error handling here 
                                    });						
                **/
                remove(data: IRating): PromiseLike<IHttpResponse<void>> {
                    return baasicApp.articleModule.articles.ratings.remove(data);
                },

                /**                     
                 * Returns a promise that is resolved once the removeAll article rating action has been performed. If the action is successfully completed, the article rating resources will be permanently removed from the system for a specified article resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicArticleInstanceRouteClient` route template. Here is an example of how a route can be obtained from HAL enabled objects:
                 *  ``` 
                 * let params = modelMapper.removeParams(article); 
                 * let uri = params['model'].links('delete-ratings-by-article').href; 
                 * ```                     
                 * @method
                 * @param data Article object whose ratings needs to be deleted.
                 * @returns A promise that is resolved once the removeAll article rating action has been performed.                        
                 * @example // article is a resource previously fetched using get action.					
                                ArticleClient.articles.ratings.removeAll(article)
                                    .then(function (data) {   
                                        // perform success action here 
                                    },
                                    function (response, status, headers, config) {   
                                        // perform error handling here 
                                    });						    
                **/
                removeAll(data: IArticle): PromiseLike<IHttpResponse<void>> {
                    return baasicApp.articleModule.articles.ratings.removeAll(data);
                }
            },

            subscriptions: {
                commentReported: {
                    /**                         
                     * Returns a promise that is resolved once the subscribe action has been performed.                         
                     * @method
                     * @param data The subscribe information.
                     * @returns A promise that is resolved once the subscribe action has been performed.                              
                     * @example ArticleClient.articles.subscriptions.commentReported.subscribe(data)
                                    .then(function (data) { 
                                        // perform success action here 
                                    },
                                    function (response, status, headers, config) { 
                                        // perform error handling here 
                                    });                         
                    **/
                    subscribe(data: IArticleSubscription): PromiseLike<IHttpResponse<any>> {
                        return baasicApp.articleModule.articles.subscriptions.commentReported.subscribe(data);
                    },

                    /**                         
                     * Returns a promise that is resolved once the isSubscribed action has been performed.                         
                     * @method
                     * @param data The subscribe information.
                     * @returns A promise that is resolved once the isSubscribed action has been performed.                           
                     * @example ArticleClient.articles.subscriptions.commentReported.isSubscribed(data)
                                    .then(function (data) { 
                                        // perform success action here 
                                    },
                                    function (response, status, headers, config) { 
                                        // perform error handling here 
                                    });                          
                    **/
                    isSubscribed(data: IArticleSubscription): PromiseLike<IHttpResponse<any>> {
                        return baasicApp.articleModule.articles.subscriptions.commentReported.isSubscribed(data);
                    },

                    /**                         
                     * Returns a promise that is commentReported once the unSubscribe action has been performed.                         
                     * @method
                     * @param data The unsubscribe information.
                     * @returns A promise that is commentReported once the unSubscribe action has been performed.                         
                     * @example ArticleClient.articles.subscriptions.commentReported.isSubscribed(data)
                                    .then(function (data) { 
                                        // perform success action here 
                                    },
                                    function (response, status, headers, config) { 
                                        // perform error handling here 
                                    });                           
                    **/
                    unSubscribe(data: IArticleSubscription): PromiseLike<IHttpResponse<void>> {
                        return baasicApp.articleModule.articles.subscriptions.commentReported.unSubscribe(data);
                    }
                },

                article: {
                    /**                         
                     * Returns a promise that is resolved once the subscribe action has been performed. This action subscribes an user to the specified article.                         
                     * @method
                     * @param article The article identifier.
                     * @param data The subscribe information.
                     * @returns A promise that is resolved once the subscribe action has been performed.                         
                     * @example ArticleClient.articles.subscriptions.article.subscribe(article, user)
                                    .then(function (data) { 
                                        // perform success action here 
                                    },
                                    function (response, status, headers, config) { 
                                        // perform error handling here 
                                    });                         
                    **/
                    subscribe(article: IArticle, data: IArticleSubscription): PromiseLike<IHttpResponse<any>> {
                        return baasicApp.articleModule.articles.subscriptions.article.subscribe(article, data);
                    },

                    /**                         
                     * Returns a promise that is resolved once the isSubscribed action has been performed. This action checks if a user is subscribed to the specified article.                         
                     * @method
                     * @param article The article identifier.
                     * @param data The subscriber identifier.
                     * @returns A promise that is resolved once the isSubscribed action has been performed.                        
                     * @example ArticleClient.articles.subscriptions.article.subscribe(article, user)
                                    .then(function (data) { 
                                        // perform success action here 
                                    },
                                    function (response, status, headers, config) { 
                                        // perform error handling here 
                                    });                          
                    **/
                    isSubscribed(article: IArticle, data: IArticleSubscription): PromiseLike<IHttpResponse<any>> {
                        return baasicApp.articleModule.articles.subscriptions.article.isSubscribed(article, data);
                    },

                    /**                         
                     * Returns a promise that is resolved once the unSubscribe action has been performed. This action unsubscribes a user from the specified article.                         
                     * @method
                     * @param article The article identifier.
                     * @param data The unsubscribe information.
                     * @returns A promise that is resolved once the unSubscribe action has been performed.                        
                     * @example ArticleClient.articles.subscriptions.article.subscribe(article, user)
                                    .then(function (data) { 
                                        // perform success action here 
                                    },
                                    function (response, status, headers, config) { 
                                        // perform error handling here 
                                    });                         
                    **/
                    unSubscribe(article: IArticle, data: IArticleSubscription): PromiseLike<IHttpResponse<void>> {
                        return baasicApp.articleModule.articles.subscriptions.article.unSubscribe(article, data);
                    }
                },

                commentRequiresModeration: {
                    /**                         
                     * Returns a promise that is resolved once the subscribe action has been performed.                         
                     * @method
                     * @param data The subscribe information.
                     * @returns A promise that is resolved once the subscribe action has been performed.                         
                     * @example ArticleClient.articles.subscriptions.commentRequiresModeration.subscribe(data)
                                    .then(function (data) { 
                                        // perform success action here 
                                    },
                                    function (response, status, headers, config) { 
                                        // perform error handling here 
                                    });                         
                    **/
                    subscribe(data: IArticleSubscription): PromiseLike<IHttpResponse<any>> {
                        return baasicApp.articleModule.articles.subscriptions.commentRequiresModeration.subscribe(data);
                    },

                    /**                         
                     * Returns a promise that is resolved once the isSubscribed action has been performed.                         
                     * @method
                     * @param data The subscribe information.
                     * @returns A promise that is resolved once the isSubscribed action has been performed.                           
                     * @example ArticleClient.articles.subscriptions.commentRequiresModeration.isSubscribed(data)
                                    .then(function (data) { 
                                        // perform success action here 
                                    },
                                    function (response, status, headers, config) { 
                                        // perform error handling here 
                                    });                         
                    **/
                    isSubscribed(data: IArticleSubscription): PromiseLike<IHttpResponse<any>> {
                        return baasicApp.articleModule.articles.subscriptions.commentRequiresModeration.isSubscribed(data);
                    },

                    /**                         
                     * Returns a promise that is commentReported once the unSubscribe action has been performed.                         
                     * @method
                     * @param data The unsubscribe information.
                     * @returns A promise that is commentReported once the unSubscribe action has been performed.                        
                     * @example ArticleClient.articles.subscriptions.commentRequiresModeration.unSubscribed(data)
                                    .then(function (data) { 
                                        // perform success action here 
                                    },
                                    function (response, status, headers, config) { 
                                        // perform error handling here 
                                    });                        
                    **/
                    unSubscribed(data: IArticleSubscription): PromiseLike<IHttpResponse<void>> {
                        return baasicApp.articleModule.articles.subscriptions.commentRequiresModeration.unSubscribed(data);
                    }
                }
            },

            tags: {
                /**                 
                 * Returns a promise that is resolved once the find action has been performed. Success response returns a list of article tag resources matching the given criteria.                 
                 * @method
                 * @param articleId Article slug or id which uniquely identifies article whose tag resources need to be retrieved.
                 * @param options Query resource options object.
                 * @returns A promise that is resolved once the find action has been performed.                         
                 * @example ArticleClient.articles.tags.find({  
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
                find(articleId: string, options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IArticleTag>>> {
                    return baasicApp.articleModule.articles.tags.find(articleId, options);
                },

                /**                 
                 * Returns a promise that is resolved once the get action has been performed. Success response returns the specified article tag resource.                
                 * @method 
                 * @param articleId Article slug or id which uniquely identifies article whose tag resource needs to be retrieved.
                 * @param id A slug or id which uniquely identifies article tag resource that needs to be retrieved.
                 * @param options Options object that contains embed data.  	
                 * @returns A promise that is resolved once the get action has been performed.                       
                 * @example ArticleClient.articles.tags.get('<articleTag-id>')
                             .then(function (data) {  
                                 // perform success action here 
                             },
                                function (response, status, headers, config) {  
                                // perform error handling here 
                            });                
                **/
                get(articleId: string, id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IArticleTag>> {
                    return baasicApp.articleModule.articles.tags.get(articleId, id, options);
                },

                /**                     
                 * Returns a promise that is resolved once the create article tag action has been performed; this action creates a new tag for an article.                     
                 * @method
                 * @param data An article tag value that needs to be inserted as new article tag resource into the system.
                 * @returns A promise that is resolved once the create article tag action has been performed.                         
                 * @example ArticleClient.articles.tags.create({   
                                articleId : '<article-id>',   
                                tag : {     
                                    slug : '<slug>',     
                                    sortOrder : 1,    
                                    tag : '<tag>'   
                                } 
                            })
                            .then(function (data) {   
                                // perform success action here 
                            },
                            function (response, status, headers, config) {   
                                // perform error handling here 
                            });                     
                **/
                create(data: IArticleTag): PromiseLike<IHttpResponse<IArticleTag>> {
                    return baasicApp.articleModule.articles.tags.create(data);
                },

                /**                 
                 * Returns a promise that is resolved once the remove article tag action has been performed. If the action is successfully completed, the article tag resource will be permanently removed from the system. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicArticleTagsRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
                 * ``` 
                 * let params = modelMapper.removeParams(articleTag); 
                 * let uri = params['model'].links('delete').href; 
                 * ```                 
                 * @method
                 * @param data Article Tag object that needs to be removed from the system.
                 * @returns A promise that is resolved once the remove article tag action has been performed.                         
                 * @example // articleTag is a resource previously fetched using get action.
                                ArticleClient.articles.tags.remove(articleTag)
                                    .then(function (data) {   
                                        // perform success action here 
                                    },
                                    function (response, status, headers, config) {   
                                        // perform error handling here 
                                    });						
                **/
                remove(data: IArticleTag): PromiseLike<IHttpResponse<void>> {
                    return baasicApp.articleModule.articles.tags.remove(data);
                },

                /**                     
                 * Returns a promise that is resolved once the removeAll article tag action has been performed. This action will remove all tags from an article if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicArticleRouteClient` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
                 * ``` 
                 * let params = modelMapper.removeParams(article); 
                 * let uri = params['model'].links('delete-tags-by-article').href; 
                 * ```                     
                 * @method
                 * @param data Article object whoose tags needs to be removed from the system.
                 * @returns A promise that is resolved once the removeAll article tag action has been performed.                     
                 * @example // article is a resource previously fetched using get action.					
                                ArticleClient.articles.tags.removeAll(article)
                                    .then(function (data) {   
                                        // perform success action here 
                                    },
                                    function (response, status, headers, config) {   
                                        // perform error handling here 
                                    });						    
                **/
                removeAll(data: IArticle): PromiseLike<IHttpResponse<void>> {
                    return baasicApp.articleModule.articles.tags.removeAll(data);
                }
            }
        };
    }

    get comments(): IArticleCommentClient {
        let baasicApp = this.baasicApp;
        return {
            /**
            * Contains a reference to valid list of article comment states. It returns an object containing all article comment states.
            * @method
            * @example ArticleClient.comments.statuses.approved;
            **/
            statuses: baasicApp.articleModule.comments.statuses,

            /**
             * Returns a promise that is resolved once the approve article comment action has been performed. This action sets the state of an article comment to "approved". This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicarticleCommentsRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
             * ``` 
             * let params = modelMapper.updateParams(articleComment); 
             * let uri = params['model'].links('comment-approve').href; 
             * ```
             * @method
             * @param data Article Comment object.
             * @param options Notification configuration used to control the article comment recourse access when managing notification distribution.
             * @returns A promise that is resolved once the approve article comment action has been performed. 
             * @example // articleComment is a resource previously fetched using get action. 
                            ArticleClient.comments.approve(articleComment, commentOptions)
                                .then(function (data) { 
                                    // perform success action here 
                                },
                                function (response, status, headers, config) { 
                                    // perform error handling here 
                                });
            **/
            approve(data: IArticleComment, options: INotificationConfiguration): PromiseLike<IHttpResponse<void>> {
                return baasicApp.articleModule.comments.approve(data, options);
            },

            /**
             * Returns a promise that is resolved once the unapprove article comment action has been performed. This action sets the state of an article comment to "unapproved". This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicarticleCommentsRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
             * ``` 
             * let params = modelMapper.updateParams(articleComment); 
             * let uri = params['model'].links('comment-unapprove').href; 
             * ```
             * @method 
             * @param data Article Comment object.
             * @returns A promise that is resolved once the unapprove article comment action has been performed.
             * @example // articleComment is a resource previously fetched using get action. 
                            ArticleClient.comments.unapprove(articleComment)
                                .then(function (data) { 
                                    // perform success action here 
                                },
                                function (response, status, headers, config) { 
                                    // perform error handling here 
                                });
            **/
            unapprove(data: IArticleComment): PromiseLike<IHttpResponse<void>> {
                return baasicApp.articleModule.comments.unapprove(data);
            },

            /**
             * Returns a promise that is resolved once the create article comment action has been performed; this action creates a new comment for an article.
             * @method
             * @param data Article Comment object.
             * @returns A promise that is resolved once the create article comment action has been performed.
             * @example ArticleClient.comments.create({ 
                                articleId : '<article-id>', 
                                comment : <comment>, 
                                userId : '<user-id>' })
                            .then(function (data) { 
                                // perform success action here 
                            },
                            function (response, status, headers, config) { 
                                // perform error handling here 
                            });
            **/
            create(data: IArticleComment): PromiseLike<IHttpResponse<IArticleComment>> {
                return baasicApp.articleModule.comments.create(data);
            },

            /**
             * Returns a promise that is resolved once the find action has been performed. Success response returns a list of article comment resources matching the given criteria.
             * @method
             * @param options Query resource options object.
             * @returns A promise that is resolved once the find action has been performed.  
             * @example ArticleClient.comments.find({ 
                            pageNumber : 1, 
                            pageSize : 10, 
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
            find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IArticleComment>>> {
                return baasicApp.articleModule.comments.find(options);
            },

            /**
             * Returns a promise that is resolved once the flag article comment action has been performed. This action sets the state of an article comment to "flagged". This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicarticleCommentsRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
             * ``` 
             * let params = modelMapper.updateParams(articleComment); 
             * let uri = params['model'].links('comment-flag').href; 
             * ```                     
             * @method
             * @param data Article Comment object.
             * @returns A promise that is resolved once the flag article comment action has been performed. 
             * @example // articleComment is a resource previously fetched using get action. 
                            ArticleClient.comments.flag(articleComment)
                                .then(function (data) { 
                                    // perform success action here 
                                },
                                function (response, status, headers, config) { 
                                    // perform error handling here 
                                });		                
            **/
            flag(data: IArticleComment): PromiseLike<IHttpResponse<void>> {
                return baasicApp.articleModule.comments.flag(data);
            },

            /**
             * Returns a promise that is resolved once the unflag article comment action has been performed. This action removes the "flagged" comment mark. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicarticleCommentsRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
             * ``` 
             * let params = modelMapper.updateParams(articleComment); 
             * let uri = params['model'].links('comment-unflag').href; 
             * ```
             * @method
             * @param data Article Comment object.
             * @returns A promise that is resolved once the unflag article comment action has been performed. 
             * @example // articleComment is a resource previously fetched using get action. 
                            ArticleClient.comments.unflag(articleComment)
                                .then(function (data) { 
                                    // perform success action here 
                                },
                                function (response, status, headers, config) { 
                                    // perform error handling here 
                                });
            **/
            unflag(data: IArticleComment): PromiseLike<IHttpResponse<void>> {
                return baasicApp.articleModule.comments.unflag(data);
            },

            /**
             * Returns a promise that is resolved once the get action has been performed. Success response returns the specified article comment resource.
             * @method 
             * @param id Id which uniquely identifies article comment resource that needs to be retrieved.
             * @param options Options object that contains embed data.
             * @returns A promise that is resolved once the get action has been performed. 
             * @example ArticleClient.comments.get('<article-id>', '<comment-id>')
                         .then(function (data) { 
                             // perform success action here 
                         },
                            function (response, status, headers, config) { 
                            // perform error handling here 
                        });
            **/
            get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IArticleComment>> {
                return baasicApp.articleModule.comments.get(id, options);
            },

            /**
             * Returns a promise that is resolved once the remove article comment action has been performed. If the action is successfully completed, the article comment resource and its replies will be permanently removed from the system. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicArticleCommentsRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
             ``` 
             let params = modelMapper.removeParams(articleComment); 
             let uri = params['model'].links('delete').href; 
             ```
             * @method
             * @param data Article Comment object.
             * @returns A promise that is resolved once the remove article comment action has been performed.  
             * @example // articleComment is a resource previously fetched using get action. 
                             ArticleClient.comments.remove(articleComment)
                                 .then(function (data) { 
                                     // perform success action here 
                                 }, 
                                    function (response, status, headers, config) { 
                                    // perform error handling here 
                                });
            **/
            remove(data: IArticleComment): PromiseLike<IHttpResponse<void>> {
                return baasicApp.articleModule.comments.remove(data);
            },

            /** 
             * Returns a promise that is resolved once the report article comment action has been performed. This action sets the state of an article comment to "reported". This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicarticleCommentsRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
             * ``` 
             * let params = modelMapper.updateParams(articleComment); 
             * let uri = params['model'].links('comment-report').href; 
             * ```
             * @method
             * @param data Article Comment object.
             * @param options Notification configuration used to control the article comment recourse access when managing notification distribution.
             * @returns A promise that is resolved once the report article comment action has been performed. 
             * @example // articleComment is a resource previously fetched using get action.
                            ArticleClient.comments.report(articleComment, commentOptions)
                                .success(function (data) { 
                                    // perform success action here 
                                })
                                .error(function (response, status, headers, config) { 
                                    // perform error handling here 
                                });
            **/
            report(data: IArticleComment, options: INotificationConfiguration): PromiseLike<IHttpResponse<void>> {
                return baasicApp.articleModule.comments.report(data, options);
            },

            /**
             * Returns a promise that is resolved once the unreport article comment action has been performed. This action removes the "reported" comment mark. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicarticleCommentsRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
             * ``` 
             * let params = modelMapper.updateParams(articleComment); 
             * let uri = params['model'].links('comment-unreport').href; 
             * ```
             * @method 
             * @param data Article Comment object.
             * @returns A promise that is resolved once the unreport article comment action has been performed. 
             * @example // articleComment is a resource previously fetched using get action. 
                            ArticleClient.comments.unreport(articleComment)
                                .then(function (data) { 
                                    // perform success action here 
                                },
                                function (response, status, headers, config) { 
                                    // perform error handling here 
                                });
            **/
            unreport(data: IArticleComment): PromiseLike<IHttpResponse<void>> {
                return baasicApp.articleModule.comments.unreport(data);
            },

            /**                 
             * Returns a promise that is resolved once the update article comment action has been performed; this action updates an article comment resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicarticleCommentsRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
             * ``` 
             * let params = modelMapper.updateParams(articleComment); 
             * let uri = params['model'].links('put').href; 
             * ```                     
             * @method 
             * @param data Article Comment object.
             * @returns A promise that is resolved once the update article comment action has been performed.                    
             * @example // articleComment is a resource previously fetched using get action.				 
                            ArticleClient.comments.update(articleComment)
                                .then(function (data) { 
                                    // perform success action here 
                                },
                                function (response, status, headers, config) { 
                                    // perform error handling here 
                                });		                
            **/
            update(data: IArticleComment): PromiseLike<IHttpResponse<void>> {
                return baasicApp.articleModule.comments.update(data);
            },

            commentReplies: {
                statuses: baasicApp.articleModule.comments.replies.statuses,

                /**
                 * Returns a promise that is resolved once the approve article comment reply action has been performed. This action sets the state of an article comment reply to "approved". This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicArticleCommentRepliesRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
                 * ``` 
                 * let params = modelMapper.updateParams(articleCommentReply); 
                 * let uri = params['model'].links('comment-approve').href; 
                 * ```
                 * @method
                 * @param data Article Comment Reply object.
                 * @param options Notification configuration used to control the article comment recourse access when managing notification distribution.
                 * @returns A promise that is resolved once the approve article comment reply action has been performed. 
                 * @example // articleCommentReply is a resource previously fetched using get action. 
                                ArticleClient.comments.commentReplies.approve(articleCommentReply, commentOptions)
                                    .then(function (data) { 
                                        // perform success action here 
                                    },
                                    function (response, status, headers, config) { 
                                        // perform error handling here 
                                    });
                **/
                approve(data: IArticleCommentReply, options: INotificationConfiguration): PromiseLike<IHttpResponse<void>> {
                    return baasicApp.articleModule.comments.replies.approve(data, options);
                },

                /**
                 * Returns a promise that is resolved once the unapprove article comment reply action has been performed. This action sets the state of an article comment reply to "unapproved". This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicarticleCommentRepliesRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
                 * ``` 
                 * let params = modelMapper.updateParams(articleCommentReply); 
                 * let uri = params['model'].links('comment-unapprove').href; 
                 * ```
                 * @method
                 * @param data Article Comment Reply object.
                 * @returns A promise that is resolved once the unapprove article comment reply action has been performed.  
                 * @example // articleCommentReply is a resource previously fetched using get action.
                                ArticleClient.comments.commentReplies.unapprove(articleCommentReply)
                                    .then(function (data) { 
                                        // perform success action here 
                                    },
                                    function (response, status, headers, config) { 
                                        // perform error handling here 
                                    });
                **/
                unapprove(data: IArticleCommentReply): PromiseLike<IHttpResponse<void>> {
                    return baasicApp.articleModule.comments.replies.unapprove(data);
                },

                /**
                 * Returns a promise that is resolved once the create article comment reply action has been performed; this action creates a new comment reply for an article.
                 * @method
                 * @param data An article comment reply object that needs to be inserted into the system.
                 * @returns A promise that is resolved once the create article comment reply action has been performed. 
                 * @example ArticleClient.comments.commentReplies.create('<article-id>', { 
                                commentId : '<comment-id>', 
                                comment : <comment>, 
                                userId : '<user-id>' })
                            .then(function (data) { 
                                // perform success action here 
                            },
                            function (response, status, headers, config) { 
                                // perform error handling here 
                            });
                **/
                create(data: IArticleCommentReply): PromiseLike<IHttpResponse<IArticleCommentReply>> {
                    return baasicApp.articleModule.comments.replies.create(data);
                },

                /**
                 * Returns a promise that is resolved once the find action has been performed. Success response returns a list of article comment reply resources matching the given criteria.
                 * @method
                 * @param options Query resource options object.
                 * @returns A promise that is resolved once the find action has been performed. 
                 * @example ArticleClient.comments.commentReplies.find({ 
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
                find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IArticleCommentReply>>> {
                    return baasicApp.articleModule.comments.replies.find(options);
                },

                /**
                 * Returns a promise that is resolved once the flag article comment reply action has been performed. This action sets the state of an article comment reply to "flagged". This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicarticleCommentRepliesRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
                 * ``` 
                 * let params = modelMapper.updateParams(articleCommentReply); 
                 * let uri = params['model'].links('comment-flag').href; 
                 * ```
                 * @method
                 * @param data Article Comment Reply object.
                 * @returns A promise that is resolved once the flag article comment reply action has been performed. 
                 * @example     // articleCommentReply is a resource previously fetched using get action.
                                    ArticleClient.comments.commentReplies.flag(articleCommentReply)
                                        .then(function (data) { 
                                            // perform success action here 
                                        },
                                        function (response, status, headers, config) { 
                                            // perform error handling here 
                                        });
                **/
                flag(data: IArticleCommentReply): PromiseLike<IHttpResponse<void>> {
                    return baasicApp.articleModule.comments.replies.flag(data);
                },

                /**
                 * Returns a promise that is resolved once the unflag article comment reply action has been performed. This action removes the "flagged" comment reply state. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicarticleCommentRepliesRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
                 * ``` 
                 * let params = modelMapper.updateParams(articleCommentReply); 
                 * let uri = params['model'].links('comment-unflag').href; 
                 * ```
                 * @method 
                 * @param data Article Comment Reply object.
                 * @returns A promise that is resolved once the unflag article comment reply action has been performed. 
                 * @example // articleCommentReply is a resource previously fetched using get action. 
                                ArticleClient.comments.commentReplies.unflag(articleCommentReply)
                                    .success(function (data) { 
                                        // perform success action here 
                                    }).error(function (response, status, headers, config) { 
                                        // perform error handling here 
                                    });
                **/
                unflag(data: IArticleCommentReply): PromiseLike<IHttpResponse<void>> {
                    return baasicApp.articleModule.comments.replies.unflag(data);
                },

                /**
                 * Returns a promise that is resolved once the get action has been performed. Success response returns the specified article comment reply resource.
                 * @method
                 * @param id Id which uniquely identifies article comment reply resource that needs to be retrieved.
                 * @param options Options object that contains embed data.
                 * @returns A promise that is resolved once the get action has been performed. 
                 * @example ArticleClient.comments.commentReplies.get('<comment-reply-id>')
                                .then(function (data) { 
                                    // perform success action here 
                                },
                                function (response, status, headers, config) {
                                    // perform error handling here 
                                });
                **/
                get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IArticleCommentReply>> {
                    return baasicApp.articleModule.comments.replies.get(id, options);
                },

                /**
                 * Returns a promise that is resolved once the remove article comment reply action has been performed. If the action is successfully completed, the article comment reply resource will be permanently removed from the system. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicarticleCommentRepliesRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
                 * ``` 
                 * let params = baasicApiClient.removeParams(articleCommentReply); 
                 * let uri = params['model'].links('delete').href; 
                 * ```
                 * @method
                 * @param data An article Comment Reply object used to update specified article comment reply resource. 
                 * @returns A promise that is resolved once the remove article comment reply action has been performed. 
                 * @example // articleCommentReply is a resource previously fetched using get action. 
                                ArticleClient.comments.commentReplies.remove(articleCommentReply)
                                    .then(function (data) { 
                                        // perform success action here 
                                    },
                                    function (response, status, headers, config) { 
                                        // perform error handling here 
                                    });
                **/
                remove(data: IArticleCommentReply): PromiseLike<IHttpResponse<void>> {
                    return baasicApp.articleModule.comments.replies.remove(data);
                },

                /**
                 * Returns a promise that is resolved once the report article comment reply action has been performed. This action sets the state of an article comment reply to "reported". This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicarticleCommentRepliesRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
                 * ``` 
                 * let params = modelMapper.updateParams(articleCommentReply); 
                 * let uri = params['model'].links('comment-report').href; 
                 * ```
                 * @method 
                 * @param data Article Comment Reply object.
                 * @param options Notification configuration used to control the article comment recourse access when managing notification distribution.
                 * @returns A promise that is resolved once the report article comment reply action has been performed. 
                 * @example // articleCommentReply is a resource previously fetched using get action. 
                                ArticleClient.comments.commentReplies.report(articleCommentReply, commentOptions)
                                    .then(function (data) { 
                                        // perform success action here 
                                    },
                                    function (response, status, headers, config) { 
                                        // perform error handling here 
                                    });
                **/
                report(data: IArticleCommentReply, options?: INotificationConfiguration): PromiseLike<IHttpResponse<void>> {
                    return baasicApp.articleModule.comments.replies.report(data, options);
                },

                /**
                 * Returns a promise that is resolved once the unreport article comment reply action has been performed. This action removes the "reported" comment reply state. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicarticleCommentRepliesRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
                 * ``` 
                 * let params = modelMapper.updateParams(articleCommentReply); 
                 * let uri = params['model'].links('comment-unreport').href; 
                 * ```
                 * @method
                 * @param data Article Comment Reply object.
                 * @returns A promise that is resolved once the unreport article comment reply action has been performed. 
                 * @example // articleCommentReply is a resource previously fetched using get action. 
                                ArticleClient.comments.commentReplies.unreport(articleCommentReply)
                                    .then(function (data) { 
                                        // perform success action here 
                                    },
                                    function (response, status, headers, config) { 
                                        // perform error handling here 
                                    });
                **/
                unreport(data: IArticleCommentReply): PromiseLike<IHttpResponse<void>> {
                    return baasicApp.articleModule.comments.replies.unreport(data);
                },

                /**
                 * Returns a promise that is resolved once the mark as spam article comment reply action has been performed. This action sets the state of an article comment reply to "spam". This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicarticleCommentRepliesRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
                 * ``` 
                 * let params = modelMapper.updateParams(articleCommentReply); 
                 * let uri = params['model'].links('comment-spam').href; 
                 * ```
                 * @method
                 * @param data Article Comment Reply object.
                 * @returns A promise that is resolved once the mark as spam article comment reply action has been performed. 
                 * @example // articleCommentReply is a resource previously fetched using get action. 
                                ArticleClient.comments.commentReplies.spam(articleCommentReply)
                                    .then(function (data) { 
                                        // perform success action here 
                                    },
                                    function (response, status, headers, config) { 
                                        // perform error handling here 
                                    });
                **/
                spam(data: IArticleCommentReply): PromiseLike<IHttpResponse<void>> {
                    return baasicApp.articleModule.comments.replies.spam(data);
                },

                /**
                 * Returns a promise that is resolved once the unspam article comment reply action has been performed. This action removes the "spam" comment reply state. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicarticleCommentRepliesRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
                 * ``` 
                 * let params = modelMapper.updateParams(articleCommentReply); 
                 * let uri = params['model'].links('comment-unspam').href; 
                 * ```
                 * @method 
                 * @param data Article Comment Reply object.
                 * @returns A promise that is resolved once the unspam article comment reply action has been performed. 
                 * @example // articleCommentReply is a resource previously fetched using get action. 
                                 ArticleClient.comments.commentReplies.unspam(articleCommentReply)
                                    .then(function (data) { 
                                        // perform success action here 
                                    },
                                    function (response, status, headers, config) { 
                                        // perform error handling here 
                                    });
                **/
                unspam(data: IArticleCommentReply): PromiseLike<IHttpResponse<void>> {
                    return baasicApp.articleModule.comments.replies.unspam(data);
                },

                /**
                 * Returns a promise that is resolved once the update article comment reply action has been performed; this action updates an article comment reply resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicarticleCommentRepliesRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
                 * ``` 
                 * let params = modelMapper.updateParams(articleCommentReply); 
                 * let uri = params['model'].links('put').href; 
                 * ```
                 * @method
                 * @param data An Article Comments Reply object used to update specified article comment reply resource.
                 * @returns A promise that is resolved once the update article comment reply action has been performed. 
                 * @example // articleCommentReply is a resource previously fetched using get action. 
                                ArticleClient.comments.commentReplies.update(articleCommentReply)
                                    .then(function (data) { 
                                        // perform success action here 
                                    },
                                    function (response, status, headers, config) { 
                                        // perform error handling here 
                                    });
                **/
                update(data: IArticleCommentReply): PromiseLike<IHttpResponse<void>> {
                    return baasicApp.articleModule.comments.replies.update(data);
                }
            }
        };
    }

    get files(): IArticleFilesClient {
        let baasicApp = this.baasicApp;
        return {
            /**                  
            * Returns a promise that is resolved once the find action has been performed. Success response returns a list of file resources matching the given criteria.                  
            * @method 
            * @param options Query resource options object.
            * @returns A promise that is resolved once the find action has been performed.                         
            * @example ArticleClient.files.find({   
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
            find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IArticleFile>>> {
                return baasicApp.articleModule.files.find(options);
            },

            /**                 
             * Returns a promise that is resolved once the get action has been performed. Success response returns requested file resource.                 
             * @method
             * @param id Article file id which uniquely identifies article resource that needs to be retrieved.                       
             * @param options Options object that contains embed data.
             * @returns A promise that is resolved once the get action has been performed. 
             * @example ArticleClient.files.get('<file-id>')
                         .then(function (data) {   
                             // perform success action here 
                         },
                            function (response, status, headers, config) {   
                            // perform error handling here 
                        });                 
            **/
            get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IArticleFile>> {
                return baasicApp.articleModule.files.get(id, options);
            },

            /**                  
             * Returns a promise that is resolved once the unlink action has been performed. This action will remove one or many file resources from the system if successfully completed. Specified file and all its accompanying derived resources will be removed from the system. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply baasicArticleFilesRouteClient route template. Here is an example of how a route can be obtained from HAL enabled objects: 
             * ``` 
             * let params = modelMapper.removeParams(fileEntry); 
             * let uri = params['model'].links('unlink').href; 
             * ```                  
             * @method
             * @param data Article file object.
             * @param options options object.
             * @returns A promise that is resolved once the unlink action has been performed.                          
             * @example // fileEntry is a file resource previously fetched using get action. The following action will remove the original file resource and all accompanying derived file resources.			 
                            ArticleClient.files.remove(fileEntry)
                                .then(function (data) {   
                                    // perform success action here 
                                },
                                function (response, status, headers, config) {   
                                    // perform error handling here 
                                }); 				
            **/
            unlink(data: IArticleFile, options: Object): PromiseLike<IHttpResponse<void>> {
                return baasicApp.articleModule.files.unlink(data, options);
            },

            /**                  
             * Returns a promise that is resolved once the update file action has been performed; this action will update a file resource if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicArticleFilesRouteClient` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
             ``` 
             let params = modelMapper.updateParams(fileEntry); 
             let uri = params['model'].links('put').href; 
             ```                  
             * @method
             * @param data Article file object that need to be updated in the system.
             * @returns A promise that is resolved once the update file action has been performed.                          
             * @example // fileEntry is a file resource previously fetched using get action. 
                         fileEntry.description = '<description>'; 
                         ArticleClient.files.update(fileEntry)
                             .then(function (data) {   
                                 // perform success action here 
                             },
                                function (response, status, headers, config) {   
                                // perform error handling here 
                            }); 				
            **/
            update(data: IArticleFile): PromiseLike<IHttpResponse<void>> {
                return baasicApp.articleModule.files.update(data);
            },

            /** 
             * Returns a promise that is resolved once the link action has been performed; this action links file resource from other modules into the Article Files module (For example: file resources from the Media Vault module can be linked directly into the Article Files module).                  
             * @method
             * @param data Article file object.
             * @returns A promise that is resolved once the link action has been performed.                          
             * @example ArticleClient.files.link(fileObject)
                            .then(function (response, status, headers, config) {   
                                // perform success handling here 
                            },
                                function (response, status, headers, config) {   
                                // perform error handling here 
                            });                 
            **/
            link(data: IArticleFile): PromiseLike<IHttpResponse<IArticleFile>> {
                return baasicApp.articleModule.files.link(data);
            },

            batch: {
                /**                   
                 * Returns a promise that is resolved once the unlink action has been performed. This action will remove file resources from the system if successfully completed. If derived resource's format is passed, such as `width` and `height` for the image type of file resource, the operation will remove just derived resource. Otherwise, specified file and all its accompanying derived resources will be removed from the system.                   
                 * @method
                 * @param data Collection of article files that needs to be deleted.
                 * @returns A promise that is resolved once the unlink action has been performed.                          
                 * @example // Remove original file resources                
                             ArticleClient.files.batch.unlink([{ id: '<file-id>' }])
                                 .then(function (data) {   
                                     // perform success action here 
                                 },
                                    function (response, status, headers, config) {   
                                    // perform error handling here 
                                });		
                        // Remove derived file resources  
                            ArticleClient.files.batch.unlink([{ id: '<file-id>', fileFormat: { width: <width>, height: <height> } }])
                                .then(function (data) {   
                                    // perform success action here 
                                },
                                    function (response, status, headers, config) {   
                                    // perform error handling here 
                                });		                    
                **/
                unlink(data: Object[]): PromiseLike<IHttpResponse<void>> {
                    return baasicApp.articleModule.files.batch.unlink(data);
                },

                /**                   
                 * Returns a promise that is resolved once the update action has been performed; this action updates specified file resources.                  
                 * @method
                 * @param data A collection of article files objects used to update specified article files.
                 * @returns A promise that is resolved once the update action has been performed.                        
                 * @example ArticleClient.files.batch.update(files)
                                .then(function (data) {   
                                    // perform success action here 
                                },
                                function (response, status, headers, config) {   
                                    // perform error handling here 
                                });                   
                **/
                update(data: IArticleFile[]): PromiseLike<IHttpResponse<void>> {
                    return baasicApp.articleModule.files.batch.update(data);
                },

                /**                   
                 * Returns a promise that is resolved once the link action has been performed; this action links file resources from other modules into the Files module (For example: file resources from the Media Vault module can be linked directly into the Files module).                   
                 * @method
                 * @param data A collection of article file objects that need to be inserted into the system.
                 * @returns A promise that is resolved once the link action has been performed.                           
                 * @example ArticleClient.files.batch.link(files)
                                .then(function (data) {   
                                    // perform success action here 
                                },
                                function (response, status, headers, config) {   
                                    // perform error handling here 
                                });                   
                **/
                link(data: IArticleFile[]): PromiseLike<IHttpResponse<any>> {
                    return baasicApp.articleModule.files.batch.link(data);
                }
            },

            streams: {
                /**                     
                 * Returns a promise that is resolved once the get action has been performed. Success response returns the file stream if successfully completed. If derived resource's format is passed, such as `width` and `height` for the image type of file resource, the operation will return a stream of the derived resource. Otherwise, stream of the original file resource will be retrieved.                     
                 * @method
                 * @param data Article file id of the original article file used to identify stream that needs to be retrieved from the system.
                 * @returns A promise that is resolved once the get action has been performed.                             
                 * @example // Request the original file stream              
                                ArticleClient.files.streams.get({id: '<file-id>'})
                                    .then(function (data) {     
                                        // perform success action here 
                                    },
                                    function (response, status, headers, config) {     
                                        // perform error handling here 
                                    });

                            // Request derived file stream                
                                    ArticleClient.files.streams.get({id: '<file-id>', width: <width>, height: <height>})
                                        .then(function (data) {     
                                            // perform success action here 
                                        },
                                        function (response, status, headers, config) {    
                                            // perform error handling here 
                                        });                     
                **/
                get(data: any): PromiseLike<IHttpResponse<any>> {
                    return baasicApp.articleModule.files.streams.get(data);
                },

                /**                     
                 * Returns a promise that is resolved once the get action has been performed. Success response returns the file stream as a blob. If derived resource's format is passed, such as `width` and `height` for the image type of file resource, the operation will return a blob of the derived file resource. Otherwise, blob of the original file resource will be retrieved. For more information on Blob objects please see [Blob Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Blob).                     
                 * @method
                 * @param data Article file id of the original article file used to identify stream that needs to be retrieved from the system.
                 * @returns A promise that is resolved once the get action has been performed.                             
                 * @example // Request the original blob                
                                ArticleClient.files.streams.getBlob('<file-id>')
                                    .then(function (data) {     
                                        // perform success action here 
                                    },
                                    function (response, status, headers, config) {     
                                        // perform error handling here 
                                    }); 
                                    
                            // Request derived blob                 
                                    ArticleClient.files.streams.getBlob({
                                        id: '<file-id>', 
                                        width: <width>, 
                                        height: <height>
                                    })
                                    .then(function (data) {     
                                        // perform success action here 
                                    },
                                    function (response, status, headers, config) {     
                                        // perform error handling here 
                                    });                     
                **/
                getBlob(data: any): PromiseLike<IHttpResponse<any>> {
                    return baasicApp.articleModule.files.streams.getBlob(data);
                },

                /**                      
                 * Returns a promise that is resolved once the update file stream action has been performed; this action will replace the existing stream with a new one. Alternatively, if a derived stream is being updated it will either create a new derived stream or replace the existing one. In order to update a derived stream, format needs to be passed (For example: `width` and `height` for the image type of file stream data type).                      
                 * @method
                 * @param data article file used to identify stream that needs to be updated.
                 * @param stream
                 * @returns A promise that is resolved once the update file stream action has been performed.                     
                 * @example // Update original file stream 
                                ArticleClient.files.streams.update('<file-id>', <file-stream>)
                                    .then(function (data) {   
                                        // perform success action here 
                                    },
                                    function (response, status, headers, config) {   
                                        // perform error handling here 
                                    }); 
                            // Update derived file stream 
                                ArticleClient.files.streams.update({id: '<file-id>', width: <width>, height: <height>}, <file-stream>)
                                    .then(function (data) {   
                                        // perform success action here 
                                    },
                                    function (response, status, headers, config) {   
                                        // perform error handling here 
                                    });                     
                **/
                update(data: any, stream: any): PromiseLike<IHttpResponse<any>> {
                    return baasicApp.articleModule.files.streams.update(data, stream);
                },

                /**                      
                 * Returns a promise that is resolved once the create file stream action has been performed; this action will upload the specified blob. For more information on Blob objects please see [Blob Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Blob).                      
                 * @method
                 * @param data article file that needs to be saved into the system.
                 * @param stream
                 * @returns A promise that is resolved once the create file stream action has been performed.                       
                 * @example ArticleClient.files.streams.create('<file-id>', <blob>)
                             .then(function (data) {  
                                    // perform success action here 
                            },
                                function (response, status, headers, config) {   
                                // perform error handling here 
                            });                     
                **/
                create(data: IArticleFile, stream: any): PromiseLike<IHttpResponse<any>> {
                    return baasicApp.articleModule.files.streams.create(data, stream);
                }
            }
        };
    }

    get ratings(): IArticleRatingsClient {
        let baasicApp = this.baasicApp;
        return {
            /**       
             * Returns a promise that is resolved once the create article rating action has been performed; this action creates a new rating for an article.                   
             * @method 
             * @param data An article rating object that needs to be inserted into the system.
             * @returns A promise that is resolved once the create article rating action has been performed.                      
             * @example ArticleClient.ratings.create({ 
                            articleId : '<article-id>', 
                            rating : 5, 
                            userId : '<user-id>' 
                        })
                        .then(function (data) { 
                            // perform success action here 
                        },
                        function (response, status, headers, config) { 
                            // perform error handling here 
                        });                   
            **/
            create(data: IRating): PromiseLike<IHttpResponse<IRating>> {
                return baasicApp.articleModule.ratings.create(data);
            },

            /**                  
             * Returns a promise that is resolved once the find action has been performed. Success response returns a list of article rating resources matching the given criteria.                  
             * @method
             * @param options Query resource options object.
             * @returns A promise that is resolved once the find action has been performed.                         
             * @example ArticleClient.ratings.find({ 
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
            find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IRating>>> {
                return baasicApp.articleModule.ratings.find(options);
            },

            /**                  
             * Returns a promise that is resolved once the findByUser action has been performed. Success response returns a list of article rating resources filtered by username.                  
             * @method
             * @param username Username which uniquely identifies a user which has created an article rating.
             * @param options Query resource options object.
             * @returns A promise that is resolved once the findByUser action has been performed.                        
             * @example ArticleClient.ratings.find('<username>', {   
                            pageNumber : 1,   
                            pageSize : 10,   
                            orderBy : '<field>',   
                            orderDirection : '<asc|desc>'
                        })
                        .then(function (collection) {   
                            // perform success action here 
                        },
                        function (response, status, headers, config) {   
                            // perform error handling here 
                        });                     
            **/
            findByUser(username: string, options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IRating>>> {
                return baasicApp.articleModule.ratings.findByUser(username, options);
            },

            /**                  
             * Returns a promise that is resolved once the get action has been performed. Success response returns the specified article rating resource.                  
             * @method
             * @param id Id which uniquely identifies article rating resource that needs to be retrieved.
             * @param options Options object that contains embed data.
             * @returns A promise that is resolved once the get action has been performed.                           
             * @example ArticleClient.ratings.get('<articleRating-id>')
                            .then(function (data) {   
                                // perform success action here 
                            },
                            function (response, status, headers, config) {   
                                // perform error handling here 
                            });                 
            **/
            get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IRating>> {
                return baasicApp.articleModule.ratings.get(id, options);
            },

            /**                  
             * Returns a promise that is resolved once the update article rating action has been performed; this action updates an article rating. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicArticleRatingsRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
             * ``` 
             * let params = modelMapper.removeParams(articleRating); 
             * let uri = params['model'].links('put').href; 
             * ```                  
             * @method
             * @param data An article object used to update specified article rating resource.
             * @returns A promise that is resolved once the update article rating action has been performed.                          
             * @example // articleRating is a resource previously fetched using get action. 
                            articleRating.rating = 4; 
                            ArticleClient.ratings.update(articleRating)
                                .then(function (data) {   
                                    // perform success action here 
                                },
                                function (response, status, headers, config) {   
                                    // perform error handling here 
                                }); 				
            **/
            update(data: IRating): PromiseLike<IHttpResponse<void>> {
                return baasicApp.articleModule.ratings.update(data);
            },

            /**                 
             * Returns a promise that is resolved once the remove article rating action has been performed. If the action is successfully completed, the article rating resource will be permanently removed from the system. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicArticleRatingsRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
             * ``` 
             * let params = modelMapper.removeParams(articleRating); 
             * let uri = params['model'].links('delete').href; 
             * ```                 
             * @method
             * @param data An article object used to delete specified article rating resource.
             * @returns A promise that is resolved once the remove article rating action has been performed.                          
             * @example // articleRating is a resource previously fetched using get action.				 
                            ArticleClient.ratings.remove(articleRating)
                                .then(function (data) {   
                                    // perform success action here 
                                },
                                function (response, status, headers, config) {   
                                    // perform error handling here 
                                });						
            **/
            remove(data: IRating): PromiseLike<IHttpResponse<void>> {
                return baasicApp.articleModule.ratings.remove(data);
            }
        };
    }

    get subscriptions(): IArticleSubscriptionsClient {
        let baasicApp = this.baasicApp;
        return {
            /**                         
             * Returns a promise that is resolved once the subscribe action has been performed. This action subscribes an user to the article module.                         
             * @method
             * @param data The subscribe information.
             * @returns A promise that is resolved once the subscribe action has been performed.                         
             * @example ArticleClient.subscriptions.subscribe(data)
                         .then(function (data) { 
                             // perform success action here 
                         },
                            function (response, status, headers, config) { 
                                // perform error handling here 
                        });                         
            **/
            subscribe(data: IArticleSubscription): PromiseLike<IHttpResponse<any>> {
                return baasicApp.articleModule.subscriptions.subscribe(data);
            },

            /**                         
             * Returns a promise that is resolved once the isSubscribed action has been performed. This action checks if a user is subscribed to the article module.                         
             * @method
             * @param data The subscribe information.
             * @returns A promise that is resolved once the isSubscribed action has been performed.                       
             * @example ArticleClient.subscriptions.isSubscribe(data)
                         .then(function (data) { 
                             // perform success action here 
                         },
                            function (response, status, headers, config) { 
                                // perform error handling here 
                        });                         
            **/
            isSubscribed(data: IArticleSubscription): PromiseLike<IHttpResponse<any>> {
                return baasicApp.articleModule.subscriptions.isSubscribed(data);
            },

            /**                         
             * Returns a promise that is resolved once the unSubscribe action has been performed. This action unsubscribes a user from the article module.                         
             * @method
             * @param data The subscribe information.
             * @returns A promise that is resolved once the unSubscribe action has been performed.                           
             * @example ArticleClient.subscriptions.unSubscribe(data)
                         .then(function (data) { 
                             // perform success action here 
                         },
                            function (response, status, headers, config) { 
                                // perform error handling here 
                        });                          **/
            unSubscribe(data: IArticleSubscription): PromiseLike<IHttpResponse<void>> {
                return baasicApp.articleModule.subscriptions.unSubscribe(data);
            }
        };
    }

    get tags(): IArticleTagsClient {
        let baasicApp = this.baasicApp;
        return {
            /**                 
             * Returns a promise that is resolved once the find action has been performed. Success response returns a list of article tag resources matching the given criteria.                 
             * @method
             * @param options Query resource options object.
             * @returns A promise that is resolved once the find action has been performed.                         
             * @example ArticleClient.tags.find({  
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
            find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IArticleTag>>> {
                return baasicApp.articleModule.tags.find(options);
            },

            /**                 
             * Returns a promise that is resolved once the get action has been performed. Success response returns the specified article tag resource.             
             * @method                        
             * @param id Article tag id or slug that uniquely identifies article tag resource that needs to be retrieved.
             * @param options Options object that contains embed data.
             * @returns A promise that is resolved once the get action has been performed. 
             * @example ArticleClient.tags.get('<articleTag-id>')
                         .then(function (data) {  
                             // perform success action here 
                         },
                            function (response, status, headers, config) {  
                            // perform error handling here 
                        });                
            **/
            get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IArticleTag>> {
                return baasicApp.articleModule.tags.get(id, options);
            },

            /**                 
             * Returns a promise that is resolved once the update article tag action has been performed; this action updates a tag. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicArticleTagsRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
             * ``` 
             * let params = modelMapper.removeParams(articleTag); 
             * let uri = params['model'].links('put').href; 
             * ```               
             * @method
             * @param data An article tag object used to update specified article tag resource.
             * @returns A promise that is resolved once the update article tag action has been performed.                           
             * @example // articleTag is a resource previously fetched using get action. 
                            articleTag.tag = '<new-tag>'; 
                            ArticleClient.tags.update(articleTag)
                                .then(function (data) {  
                                    // perform success action here 
                                },
                                function (response, status, headers, config) {  
                                    // perform error handling here 
                                });                
            **/
            update(data: IArticleTag): PromiseLike<IHttpResponse<void>> {
                return baasicApp.articleModule.tags.update(data);
            },

            /**                 
             * Returns a promise that is resolved once the remove article tag action has been performed. If the action is successfully completed, the article tag resource will be permanently removed from the system. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicArticleTagsRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
             * ``` 
             * let params = modelMapper.removeParams(articleTag); 
             * let uri = params['model'].links('delete').href; 
             * ```                 
             * @method
             * @param data An article tag object used to delete specified article tag resource.
             * @returns A promise that is resolved once the remove article tag action has been performed.                         
             * @example // articleTag is a resource previously fetched using get action.
                            ArticleClient.tags.remove(articleTag)
                                .then(function (data) {   
                                    // perform success action here 
                                },
                                function (response, status, headers, config) {   
                                    // perform error handling here 
                                });						
            **/
            remove(data: IArticleTag): PromiseLike<IHttpResponse<void>> {
                return baasicApp.articleModule.tags.remove(data);
            },

            subscriptions: {
                /**                     
                 * Returns a promise that is resolved once the subscribe action has been performed. This action subscribes an user to the specified tag.                     
                 * @method
                 * @param tag article tag object.
                 * @param data The subscribe information.
                 * @returns A promise that is resolved once the subscribe action has been performed.                   
                 * @example ArticleClient.tags.subscriptions.subscribe(tag, user) 
                                .then(function (data) { 
                                    // perform success action here 
                                },
                                function (response, status, headers, config) { 
                                    // perform error handling here 
                                });                     
                **/
                subscribe(tag: IArticleTag, data: any): PromiseLike<IHttpResponse<IArticleSubscription>> {
                    return baasicApp.articleModule.tags.subscriptions.subscribe(tag, data);
                },

                /**                    
                 * Returns a promise that is resolved once the isSubscribed action has been performed. This action checks if a user is subscribed to the specified tag.                
                 * @method
                 * @param tag Article tag object.
                 * @param data The subscriber identifier.
                 * @returns A promise that is resolved once the isSubscribed action has been performed.                       
                 * @example ArticleClient.tags.subscriptions.isSubscribed(tag, user)
                                .then(function (data) { 
                                    // perform success action here 
                                },
                                function (response, status, headers, config) { 
                                    // perform error handling here 
                                });                     
                **/
                isSubscribed(tag: IArticleTag, data: any): PromiseLike<IHttpResponse<IArticleSubscription>> {
                    return baasicApp.articleModule.tags.subscriptions.isSubscribed(tag, data);
                },

                /**                     
                 * Returns a promise that is resolved once the unSubscribe action has been performed. This action unsubscribes a user from the specified tag.                    
                 * @method
                 * @param tag Article tag object.
                 * @param data The unsubscribe information.
                 * @returns A promise that is resolved once the unSubscribe action has been performed.                    
                 * @example ArticleClient.tags.subscriptions.unSubscribe(tag, user)
                             .then(function (data) { 
                                 // perform success action here 
                             },
                                function (response, status, headers, config) { 
                                // perform error handling here 
                            });                     
                **/
                unSubscribe(tag: IArticleTag, data: any): PromiseLike<IHttpResponse<void>> {
                    return baasicApp.articleModule.tags.subscriptions.unSubscribe(tag, data);
                }
            }
        };
    }

    get settings(): IArticleSettingsClient {
        let baasicApp = this.baasicApp;
        return {
            /**                  
             * Returns a promise that is resolved once the get action has been performed. Success response returns the article settings.                  
             * @method
             * @param options Options object that contains embed data.
             * @returns A promise that is resolved once the get action has been performed.                          
             * @example baasicArticleSettingsClient.get()
                            .then(function (data) {   
                                // perform success action here 
                            },
                            function (response, status, headers, config) {   
                                // perform error handling here 
                            });                 
            **/
            get(options?: IGetRequestOptions): PromiseLike<IHttpResponse<any>> {
                return baasicApp.articleModule.settings.get(options);
            },

            /**                  
             * Returns a promise that is resolved once the update article settings action has been performed; this action updates article settings. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicArticleSettingsRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
             * ``` 
             * let params = modelMapper.removeParams(articleSettings); 
             * let uri = params['model'].links('put').href; 
             * ```               
             * @method
             * @param options Options object that contains embed data.
             * @returns A promise that is resolved once the update article settings action has been performed.                          
             * @example // articleSettings is a resource previously fetched using get action. 
                            articleSettings.allowArchive = true; 
                            baasicArticleSettingsClient.update(articleSettings)
                                .then(function (data) {   
                                    // perform success action here 
                                },
                                function (response, status, headers, config) {   
                                    // perform error handling here 
                                }); 				
            **/
            update(data: IArticleSettings): PromiseLike<IHttpResponse<void>> {
                return baasicApp.articleModule.settings.update(data);
            }
        };
    }
}