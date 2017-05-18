import { Component, OnInit, Input } from '@angular/core';

import { TodoModel } from '../models/todo-model';

@Component({
  selector: 'todo-list',
  styleUrls: ['./todo-list.component.css'],
  template: `
    <ul *ngFor="let item of items">
      <li>{{ item.description }}</li>
    </ul>
  `,
})
export class TodoListComponent implements OnInit {

  @Input()
  items: TodoModel[] = []

  constructor() { }

  ngOnInit() {
  }

}
