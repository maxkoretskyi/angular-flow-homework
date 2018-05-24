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
            <to-do-list></to-do-list>
        </div>
        <div class="bottom">
            <div>Completed tasks</div>
            <to-do-list></to-do-list>
        </div>
        <ng-template #tpl>
            <span>I am a task</span>
        </ng-template>
        <button (click)="move()">move</button>
    `,
    styles: ['.top, .bottom {border: 1px solid black; padding: 10px; margin: 10px 0; height: 30px; width: 500px; }']
})
export class AppComponent implements AfterViewInit {
    @ViewChildren(TodoListComponent) comps: QueryList<TodoListComponent>;
    @ViewChild('tpl') tpl: TemplateRef<null>;
    embeddedView: EmbeddedViewRef<null>;
    isTop: boolean = true;

    ngAfterViewInit() {
        this.embeddedView = this.tpl.createEmbeddedView(null);
        this.comps.first.addItem(this.embeddedView);
        this.isTop = true;
    }

    move() {
        if (!this.isTop) {
            this.comps.last.removeItem(0);
            this.comps.first.addItem(this.embeddedView);
            this.isTop = true;
        } else {
            this.comps.first.removeItem(0);
            this.comps.last.addItem(this.embeddedView);
            this.isTop = false;
        }
    }
}
