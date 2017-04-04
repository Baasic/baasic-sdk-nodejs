import { IHttpClient, IHttpRequest, IHttpResponse, IHttpHeaders } from 'baasic-sdk-javascript';
import * as http from 'http';

export class HttpClient implements IHttpClient {
    createPromise<TData>(deferFn: (resolve: (TData) => void, reject: (any) => void) => void): PromiseLike<TData> {
        return new Promise<TData>(deferFn);
    }

    request<ResponseType>(request: IHttpRequest): PromiseLike<IHttpResponse<ResponseType>> {
        return this.createPromise<IHttpResponse<ResponseType>>(function (resolve, reject) {
            let postData;
            if (request.data) {
                postData = JSON.stringify(request.data);
            }
            
            let headers: any = Object.assign({}, request.headers);
            if (postData) {
                headers['Content-Length']  = Buffer.byteLength(postData);
            }

            let url = request.url;
            let req = http.request({
                hostname: url.hostname,
                port: url.protocol.startsWith('https') ? 443 : 80,
                path: url.pathname + url.search,
                method: request.method,
                headers: headers
            }, (res) => {
                res.setEncoding('utf8');
                let body = '';
                res.on('data', (chunk) => {
                    body += chunk;
                });

                res.on('end', () => {
                    resolve({
                        request: request,
                        headers: res.headers,
                        statusCode: res.statusCode,
                        statusText: res.statusMessage,
                        data: body ? JSON.parse(body) : null
                    });
                });
            });

            req.on('error', (e) => {
                reject(e);
            });

            if (postData) {
                req.write(postData);
            }
            req.end();
        }) 
    };
};