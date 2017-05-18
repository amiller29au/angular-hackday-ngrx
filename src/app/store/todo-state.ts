import { TodoModel } from '../models/todo-model';
import { Action } from '@ngrx/store';

// ** State
export interface TodoState {
    todoItems: TodoModel[];
}

export const INITIAL_TODO_STATE: TodoState = {
    todoItems: []
}

// ** Reducer

export function reducer(state = INITIAL_TODO_STATE, action: Action): TodoState {
    
    let newState: TodoState = null;

    switch (action.type) {

        case 'ADD_TODO': 

            newState = Object.assign({}, state);
            newState.todoItems = [...state.todoItems, action.payload];
            return newState;

        case 'ASSIGN_TODO': 

            newState = Object.assign({}, state);
            newState.todoItems = action.payload;
            return newState;

        default:
            return state;
    }
}

// ** Actions

export class AddTodoAction implements Action {

    readonly type: string = 'ADD_TODO'

    constructor(public payload: TodoModel) { }
}

export class AssignTodosAction implements Action {

    readonly type: string = 'ASSIGN_TODO';

    constructor(public payload: TodoModel[]) { }
}

// ** Selectors

export const getItems = (state: TodoState) => state.todoItems;
export const getCount = (state: TodoState) => state.todoItems ? state.todoItems.length : 0;
