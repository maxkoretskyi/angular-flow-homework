import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { ContainerComponent } from './container-component';

@Component({
    selector: 'to-do-list',
    template: `
        <ng-container #vc></ng-container>
    `,
    providers: [
        {
            provide: ContainerComponent,
            useExisting: TodoListComponent
        }
    ]
})
export class TodoListComponent {
    @ViewChild('vc', {read: ViewContainerRef}) vc: ViewContainerRef;

    addItem(v) {
        this.vc.insert(v);
    }

    removeItem(index) {
        return this.vc.detach(index);
    }
}
