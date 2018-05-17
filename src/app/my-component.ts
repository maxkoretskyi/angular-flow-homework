import { Component } from '../framework/decorators';

@Component({
    properties: ['name', 'age']
})
export class MyComponent {
    name: string = 'Some';
    age: number = 15;
}