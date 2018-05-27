import { Injectable } from '@angular/core';
import { HttpBackend } from './http-backend';

@Injectable()
export class Http {
    constructor(private backend: HttpBackend) {
    }

    get(url): Promise<any> {
        return this.backend.get('https://jsonplaceholder.typicode.com/posts/1');
    };
}