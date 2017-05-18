import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule } from '@ngrx/effects'
import { reducer } from "./store/app-state";

import { AppComponent } from './app.component';
import { NewTodoComponent } from './new-todo/new-todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoContainerComponent } from './todo-container/todo-container.component';
import { TodoCountComponent } from './todo-count/todo-count.component';
import { TodoEffectService } from './store/todo-effect.service';

@NgModule({
  declarations: [
    AppComponent,
    NewTodoComponent,
    TodoListComponent,
    TodoContainerComponent,
    TodoCountComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    StoreModule.provideStore(reducer),
    EffectsModule.run(TodoEffectService),
    StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
