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
    `
})
export class TodoItemComponent {
}
