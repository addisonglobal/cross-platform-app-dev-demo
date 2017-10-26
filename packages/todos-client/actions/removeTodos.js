// @flow
import type { ActionType, GenericActionType } from '@addison-global/redux-common-types';

export const REMOVE_TODO = 'REMOVE_TODO';
export const REMOVE_TODO_SUCCESS = 'REMOVE_TODO_SUCCESS';
export const REMOVE_TODO_FAILURE = 'REMOVE_TODO_FAILURE';

export type RemoveTodosActionType = GenericActionType<'REMOVE_TODO', { id: string }>;
export type RemoveTodosSuccessActionType = ActionType<'REMOVE_TODO_SUCCESS'>;
export type RemoveTodosFailedActionType = ActionType<'REMOVE_TODO_FAILURE'>;

export const removeTodoAction = (id: string): RemoveTodosActionType => ({
    type: REMOVE_TODO,
    payload: {
        id,
    },
});

export const removeTodosSuccessAction = (id: string) => ({
    type: REMOVE_TODO_SUCCESS,
    payload: {
        id,
    },
});

export const removeTodosFailedAction = (id: string) => ({
    type: REMOVE_TODO_FAILURE,
    payload: {
        id,
    },
});
