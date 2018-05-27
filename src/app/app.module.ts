import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Http } from './http';
import { TodoListComponent } from './todo-list.component';

@NgModule({
    imports: [BrowserModule],
    providers: [Http],
    declarations: [AppComponent, TodoListComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
