import {
    AfterViewInit,
    Component,
    EmbeddedViewRef,
    OnInit,
    QueryList,
    TemplateRef,
    ViewChild,
    ViewChildren
} from '@angular/core';
import { TodoListComponent } from './todo-list.component';

@Component({
    selector: 'my-app',
    template: `
        <div class="top">
            <div>All tasks</div>
        </div>
        <div class="bottom">
            <div>Completed tasks</div>
        </div>
        <button (click)="move()">move</button>
    `,
    styles: ['.top, .bottom {border: 1px solid black; padding: 10px; margin: 10px 0; height: 30px; width: 500px; }']
})
export class AppComponent {
    move() {
    }
}
