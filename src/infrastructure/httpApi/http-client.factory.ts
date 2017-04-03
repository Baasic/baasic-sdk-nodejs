import { IHttpClient, IHttpRequest, IHttpResponse, IHttpHeaders } from 'baasic-sdk-javascript'

export class HttpClientFactory implements IHttpClient {
    constructor(private http: Http) { }

    createPromise<TData>(deferFn: (resolve: (TData) => void, reject: (any) => void) => void): PromiseLike<TData> {
        return new Promise<TData>(deferFn);
    }

    request<ResponseType>(request: IHttpRequest) {
        let httpRequest: RequestOptionsArgs = {
            method: request.method,
        };

        if (request.headers) httpRequest.headers = new Headers(request.headers);
        if (request.data) httpRequest.body = request.data;

        return this.http.request(request.url.toString(), httpRequest)
            .map(response => {
                return <IHttpResponse<ResponseType>>{
                    request: request,
                    statusCode: response.status,
                    statusText: response.statusText,
                    headers: response.headers.toJSON(),
                    data: <ResponseType>response.json()
                };
            })
            .catch((response: Response | any) => {
                if (response instanceof Response) {
                    return Observable.throw(<IHttpResponse<ResponseType>>{
                        request: request,
                        statusCode: response.status,
                        statusText: response.statusText,
                        headers: response.headers.toJSON(),
                        data: response.json()
                    });
                } else {
                    Observable.throw(response);
                }
            })
            .toPromise();
    };
};