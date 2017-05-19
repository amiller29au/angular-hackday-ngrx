import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs'
import { Store } from '@ngrx/store';
import { AppState, getTodoItems } from '../store/app-state';
import { AddTodoAction } from '../store/todo-state';

import { TodoModel } from '../models/todo-model';

@Component({
  selector: 'todo-container',
  styleUrls: ['./todo-container.component.css'],
  template: `
    <new-todo (addItem)="onAddItem($event)"></new-todo>
  
    <todo-list [items]="items$ | async"></todo-list>
  `,
})
export class TodoContainerComponent implements OnInit {

  //items: TodoModel[] = [];
  items$: Observable<TodoModel[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.items$ = this.store.select(p => p.todoState.todoItems);
    //this.items$ = this.store.select(getTodoItems);
  }

  onAddItem(todoItem: TodoModel): void {
    //console.log('AddItem - ', todoItem);
    //this.items = [...this.items, todoItem];
    this.store.dispatch(new AddTodoAction(todoItem));
  }

}
