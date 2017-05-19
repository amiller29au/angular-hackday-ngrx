import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { Actions, Effect } from '@ngrx/effects';
import { Action, Dispatcher } from '@ngrx/store';

import { AssignTodosAction } from './todo-state';

@Injectable()
export class TodoEffectService {

  constructor(
    private actions$: Actions,
    private http: Http) { }

  @Effect()
  loadTodoItems$: Observable<Action> = this.actions$
    .ofType(Dispatcher.INIT)
    .switchMap(action => {
      return this.http.get('/api/todos.json');
    })
    .map(response => response.json())
    .map(data => new AssignTodosAction(data));
}
