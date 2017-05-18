import { combineReducers } from '@ngrx/store';
import { createSelector } from 'reselect';

import * as fromTodo  from './todo-state';

// ** Define Application State

export interface AppState {
    todoState: fromTodo.TodoState;
}

// ** List all reducers

const reducers = {
    todoState: fromTodo.reducer 
}

// ** Combine all the reducers

export function reducer(state: any, action: any) {
    return combineReducers(reducers)(state, action);
}

// ** Selectors

export const getTodoState = (state: AppState) => state.todoState;

export const getTodoItems = createSelector(getTodoState, fromTodo.getItems);
export const getTodoCount = createSelector(getTodoState, fromTodo.getCount);