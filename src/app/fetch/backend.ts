import { HttpBackend } from '../http-backend';

export class HttpFetchBackend implements HttpBackend {
    get(url): Promise<any> {
        return Promise.resolve('Data from HttpFetchBackend');
    }
}