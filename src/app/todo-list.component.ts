import { Component } from '@angular/core';

@Component({
    selector: 'to-do-list',
    template: `
        <h1>To-do list</h1>
        <todo-item [item]="todoItem" (completed)="updateCompletedStatus($event)"></todo-item>
    `,
    styles: [':host {display: block; width: 500px; border: 2px solid blue; padding: 20px}']
})
export class TodoListComponent {
    todoItem = {
        title: 'Finish homework',
        completed: false
    };

    updateCompletedStatus(completed) {
        this.todoItem.completed = completed;
    }
}
