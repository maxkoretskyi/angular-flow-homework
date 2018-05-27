import { NgModule } from '@angular/core';
import { HttpBackend } from '../http-backend';
import { HttpFetchBackend } from './backend';

@NgModule({
    providers: [
        {
            provide: HttpBackend,
            useClass: HttpFetchBackend
        }
    ]
})
export class HttpFetchModule {
}