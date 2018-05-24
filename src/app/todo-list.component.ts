import { Component, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
    selector: 'to-do-list',
    template: `
        <ng-container #vc></ng-container>
    `,
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
