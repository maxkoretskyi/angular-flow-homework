Components input/output communication & ExpressionChangedAfterItHasBeenCheckedError
---------------------

Steps
---------------------

* Implement ToDoList component that contains one child componentn ToDoItem component.
Here is a template of the component:
<h1>To-do list</h1>
<todo-item [item]="todoItem" (completed)="updateCompletedStatus($event)"></todo-item>

* Implement ToDoItem component that takes a to-do item as an input. It shows
title and status of the to-do item that it takes. It also contains a checkbox
to switch status of the to-do item.

Here is a template of the component:
<h4>Title: {{item.title}}</h4>
<h4>Status: {{item.completed}}</h4>
<label>
    Completed
    <input id="checkBox" type="checkbox" (change)="complete($event)">
</label>

* ToDoItem component also has `completed` event that is listened to by
the ToDoList component. Once it receives the notification, it udpates the status
of the to-do item.

* Add styles with borders and padding according to the task.jpg