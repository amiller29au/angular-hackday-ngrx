import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'new-todo',
  styleUrls: ['./new-todo.component.css'],
  template: `
  <form [formGroup]="form" (ngSubmit)="submit()">
    <label for="Description">Description</label>
    <input id="Description" type="text" autocomplete="false" formControlName="description">
    <button type="submit">Add</button>
  </form>
`,
})
export class NewTodoComponent implements OnInit {

  form: FormGroup;

  @Output()
  addItem = new EventEmitter();

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this._formBuilder.group({
      "description": ['']
    });
  }

  submit(): void {
    this.addItem.emit(this.form.value);
    this.form.reset();
  }

}
