import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs'
import { Store } from '@ngrx/store';
import { AppState, getTodoCount } from '../store/app-state';

@Component({
  selector: 'todo-count',
  template: `
    <div>
      Count: {{ count$ | async}}
    </div>
  `
})
export class TodoCountComponent implements OnInit {

  count$: Observable<number>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.count$ = this.store.select(getTodoCount);
  }

}
