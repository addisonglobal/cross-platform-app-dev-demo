// @flow
import type { TodoListType } from '@addison-global/todos-service-types';
import type { ActionType, GenericActionType } from '@addison-global/redux-common-types';

export const GET_TODOS = 'GET_TODOS';
export const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS';
export const GET_TODOS_FAILURE = 'GET_TODOS_FAILURE';

export type GetTodosActionType = ActionType<'GET_TODOS'>;
export type GetTodosSuccessActionType = GenericActionType<'GET_TODOS_SUCCESS', { data: TodoListType}>;
export type GetTodosFailureActionType = ActionType<'GET_TODOS_FAILURE'>;

export const getTodosAction = (): GetTodosActionType => ({
    type: GET_TODOS,
});

export const getTodosSuccessAction = (data: TodoListType): GetTodosSuccessActionType => ({
    type: GET_TODOS_SUCCESS,
    payload: {
        data,
    },
});

export const getTodosFailedAction = (): GetTodosFailureActionType => ({
    type: GET_TODOS_FAILURE,
});
