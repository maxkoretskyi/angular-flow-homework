import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{name}}</h1>
        <to-do-list></to-do-list>
    `
})
export class AppComponent {
    name = 'Angular Flow Homework';
}
