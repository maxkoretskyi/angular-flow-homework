import { Component } from '../framework/decorators';

@Component({
    properties: ['name', 'age']
})
export class MyComponent {
    name: string = 'Nick';
    age: number = 15;
}