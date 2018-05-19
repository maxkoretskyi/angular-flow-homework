import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'todo-item',
    template: `
        <h4>Title: {{item.title}}</h4>
        <h4>Status: {{item.completed}}</h4>
        <label>
            Completed
            <input id="checkBox" type="checkbox" (change)="complete($event)">
        </label>
    `,
    styles: [':host {display: block; width: 90%; border: 2px solid green; padding: 20px}']
})
export class TodoItemComponent {
    @Input() item;
    @Output() completed = new EventEmitter();

    complete(event) {
        this.completed.emit(event.target.checked);
    }

    ngAfterViewInit() {
        // why does this line cause ExpressionChangedAfterItHasBeenCheckedError
        // this.item.completed = !this.item.completed;

        // why this error disappears if you remove
        // <h4>Status: {{item.completed}}</h4>
        // from this component's template
    }
}
