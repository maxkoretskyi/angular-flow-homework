Moving a view between two containers inside child components
------------------------------------------------------------

* Take the `moving-view-solution` as a base for this task

* Instead of quering `ToDoListComponent` using its class, query it using
an abstract class `ContainerComponent` and the `useExisting` strategy.

* Implement `Http` class with one method `get` that takes a url and returns
a query result. It injects the `HttpBackend` intstance into a constructor
and delegates the query to it.

* Declare an abstract class `HttpBackend` with the interface
`abstract get(url: string): Promise<any>;`. Implement two concrete implementations
of the class `HttpFetchBackend` and `HttpXhrBackend`. Each should simply return
a string identifying a service in the `get` method. Put each service in a separate
module.

* Inject `Http` service into the `AppComponent` component and query data from the
constructor. Log the result.

* Import `HttpFetchModule` and `XhrFetchModule` into the main `AppModule`.
Observe the log result. Now change the order of imports. Observer the log result.
