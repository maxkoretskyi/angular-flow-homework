import { MyComponent } from './app/my-component';
import { renderComponent } from './framework/component';
import { setRenderer } from './framework/renderer';

const c = renderComponent<MyComponent>(MyComponent);

setRenderer('dom');

// expect to see `name: Jane` on the screen
c.name = 'Jane';

// expect to see `name: Nick` on the screen
c.name = 'Nick';

setRenderer('console');

// expect to see `age: 18` in the console
c.age = 18;

// expect to see `age: 38` in the console
c.age = 38;


