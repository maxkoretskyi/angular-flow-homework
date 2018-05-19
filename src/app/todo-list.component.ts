import { Component } from '@angular/core';

@Component({
    selector: 'to-do-list',
    template: `
        <h1>To-do list</h1>
        <todo-item [item]="todoItem" (completed)="updateCompletedStatus($event)"></todo-item>
    `
})
export class TodoListComponent {
}
