import {
    IArticleInstanceSubscriptionsCommentReportedClient,
    IArticleInstanceSubscriptionsArticleClient,
    IArticleInstanceSubscriptionsCommentRequiresModerationClient
} from '../';

export interface IArticleInstanceSubscriptionsClient {
    commentReported: IArticleInstanceSubscriptionsCommentReportedClient,
    article: IArticleInstanceSubscriptionsArticleClient,
    commentRequiresModeration: IArticleInstanceSubscriptionsCommentRequiresModerationClient
}