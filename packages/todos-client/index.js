// @flow
import todos from './reducer';

export type {
    AddTodosActionType,
    AddTodosSuccessActionType,
    AddTodosFailureActionType,
    GetTodosActionType,
    GetTodosSuccessActionType,
    GetTodosFailureActionType,
    RemoveTodosActionType,
    RemoveTodosSuccessActionType,
    RemoveTodosFailedActionType,
} from './actions';

export {
    ADD_TODO,
    ADD_TODO_SUCCESS,
    ADD_TODO_FAILURE,
    addTodoAction,
    addTodoSuccessAction,
    addTodoFailedAction,
    GET_TODOS,
    GET_TODOS_SUCCESS,
    GET_TODOS_FAILURE,
    getTodosAction,
    getTodosSuccessAction,
    getTodosFailedAction,
    REMOVE_TODO,
    REMOVE_TODO_SUCCESS,
    REMOVE_TODO_FAILURE,
    removeTodoAction,
    removeTodosSuccessAction,
    removeTodosFailedAction,
} from './actions';

export const reducer = {
    todos,
};

export { default as sagas } from './sagas';

export {
    todosListSelector,
    todosLoadingSelector,
} from './selectors';
