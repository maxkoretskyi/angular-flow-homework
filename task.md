Implement a custom change detection & rendering mechanism
---------------------

Framework part
--------------

 * all custom types like interfaces and constants can be put in `type.ts` file

 * implement `PROPERTIES_SYMBOL` constant with the value '__afProperties__';

 * implement `ComponentDescriptor` interfaces that defines an object with
   the `properties` key that is an array of strings

 * implement `Component(descriptor: ComponentDescriptor)` decorator that
   takes a component descriptor and returns a decorator function. This function
   takes a class as a parameter and defines the non-configurable and
   non-writable property define by `PROPERTIES_SYMBOL` constant on the class prototype.
   This property is used to hold an array of properties to watch in the form
   `[property1name, property1value,... propertyNname, propertyNvalue]`.
   Property names should be filled using data provided by the component descriptor.
   Place the decorator in the `decorators.ts` file.

  * implement `Renderer` interface with three methods. The methods `init` and `clear` take no
  parameters and return nothing. The method `render` takes two parameters: `property` of type string
  and `value` of type `any`. All renderer implementations should be placed in the `renderers.ts` module.

  * implement `ConsoleRenderer` defined by the `Renderer` interface. This renderer is used to render
  component properties to the console. It has `container` property that holds a reference to the `window.console`.
  The `init` method initializes `container` property with the `window.console`.
  The method `render` takes two parameters defined by the interface and
  simply logs them to console as in the form "${p}: ${v}". The `clear` method
  simply calls `console.clear` using the reference to the `container` property.
  Both `render` and `clear` methods should initialize the container if not initialized.

  * implement `DOMRenderer` defined by the `Renderer` interface. This renderer is used to render
  component properties to the DOM. It has a container property that holds a reference the manually
  created `div` HTML element with the `dom-renderer` class. The `div` should be appended to the
  `document.body` to be considered initialized. The method `render` takes two parameters
  defined by the interface and for each parameter creates a `span` DOM node with the text
  in the form "${p}: ${v}" and adds it to the container. The `clear` method
  simply removes all DOM nodes from the container. Both `render` and `clear` methods
  should initialize the container if not initialized.

  * implement `setRenderer(type: string)` function that sets up the current renderer in the application.
  The function takes a type of a render and creates the respective instance of a renderer. It assigns
  it to the `renderer` variable private to the module.

  * implement `getRenderer()` function that returns renderer stored in the private `renderer` property.
  The default renderer should be initialized to the `ConsoleRenderer` when the module is being loaded.

  * implement `renderChanges(c: any)` function that takes a component instances and iterates over
  watchable component properties defined in the `PROPERTIES_SYMBOL` array. For each property it
  retrieves the current renderer using `getRenderer` function and uses it to render the proprerty
  and its value.

  * implement `renderComponent<T>(C: any): T` function that takes a component class, instantiates it
  and returns a component instance. The function also initializes the `PROPERTIES_SYMBOL` array with
  the initial values for the watchable component properties. And for each watchable property it
  defines a non-configurable property descriptor with a settter and a getter. A getter simply returns
  a corresponding value for the property from the `PROPERTIES_SYMBOL` array. A setter updates a value
  for the corresponding property in the `PROPERTIES_SYMBOL` array. But besides doing that, it also
  calls `renderChanges` function and passes in a component instance. This is in effect
  the change detection process. Whenever the new value is updated, it's rendered in the DOM or console.
  The function should also use current renderer to render each initial property similarly
  to the `renderChanges` function.

Application part
----------------

  * implement `MyComponent` class with two properties `name=Nick` and `age=15`. Apply a `Component` decorator
  to the component and pass in an array of watchable properties `name` and `age`.
  Call the `renderComponent` function and pass in `MyComponent` class. Update `name` and `age` properties
  and observe the changes in the console and the DOM.