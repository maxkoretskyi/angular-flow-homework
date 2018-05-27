import { NgModule } from '@angular/core';
import { HttpBackend } from '../http-backend';
import { HttpXhrBackend } from './backend';

@NgModule({
    providers: [
        {
            provide: HttpBackend,
            useClass: HttpXhrBackend
        }
    ]
})
export class HttpXhrModule {
}