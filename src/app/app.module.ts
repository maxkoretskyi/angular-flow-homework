import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpFetchModule } from './fetch/fetch.module';
import { Http } from './http';
import { TodoListComponent } from './todo-list.component';
import { HttpXhrModule } from './xhr/xhr.module';

@NgModule({
    imports: [BrowserModule, HttpXhrModule, HttpFetchModule],
    providers: [Http],
    declarations: [AppComponent, TodoListComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
