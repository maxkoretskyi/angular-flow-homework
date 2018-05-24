import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, TodoListComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
