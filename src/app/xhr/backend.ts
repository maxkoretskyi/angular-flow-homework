import { HttpBackend } from '../http-backend';

export class HttpXhrBackend implements HttpBackend {
    get(url): Promise<any> {
        return Promise.resolve('Data from HttpXhrBackend');
    }
}