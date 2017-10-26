// @flow
import type { ActionType, GenericActionType } from '@addison-global/redux-common-types';

export const ADD_TODO = 'ADD_TODO';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const ADD_TODO_FAILURE = 'ADD_TODO_FAILURE';

export type AddTodosActionType = GenericActionType<'ADD_TODO', { title: string }>;
export type AddTodosSuccessActionType = ActionType<'ADD_TODO_SUCCESS'>;
export type AddTodosFailureActionType = ActionType<'ADD_TODO_FAILURE'>;

export const addTodoAction = (title: string): AddTodosActionType => ({
    type: ADD_TODO,
    payload: {
        title,
    },
});

export const addTodoSuccessAction = () => ({
    type: ADD_TODO_SUCCESS,
});

export const addTodoFailedAction = () => ({
    type: ADD_TODO_FAILURE,
});
