import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TodoItemComponent } from './todo-item';
import { TodoListComponent } from './todo-list.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, TodoListComponent, TodoItemComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
