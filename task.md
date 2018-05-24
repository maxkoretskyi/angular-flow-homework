Moving a view between two containers inside child components
------------------------------------------------------------

* Implement the `ToDoListComponent` with one view container in the template.
The component should have the `addItem` method that takes a view
and adds it to a view container. And the `removeItem` method that detaches
the view from a container and returns it.

* Implement the `AppComponent` with the template `<span>I am a task</span>` and
two wrapper divs for the `to-do-list` component. The `AppComponent` should create
an embedded view from the template. It also should should query
two child ToDoList components and using their API add/remove this view when
a user clicks `Move` button. See `task.gif` for the demo.
