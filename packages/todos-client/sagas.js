// @flow
import { takeLatest, call, put, fork } from 'redux-saga/effects';
import dataProvider from '@addison-global/data-provider';

import { push } from 'react-router-redux';

import {
    type AddTodosActionType,
    type RemoveTodosActionType,

    GET_TODOS,
    ADD_TODO,
    REMOVE_TODO,

    getTodosSuccessAction,
    getTodosFailedAction,

    addTodoSuccessAction,
    addTodoFailedAction,

    removeTodosSuccessAction,
    removeTodosFailedAction,
} from './actions';

const getTodos = function* getTodos() {
    try {
        const response = yield call(dataProvider, 'todos', 'GET');

        yield put(getTodosSuccessAction(response));
    } catch (err) {
        // eslint-disable-next-line
        console.error(err);
        yield put(getTodosFailedAction());
    }
};

const addTodo = function* addTodo({ payload: { title } }: AddTodosActionType) {
    try {
        yield call(dataProvider, 'todos', 'POST', {
            todo: { title },
        });
        yield put(addTodoSuccessAction());
        yield put(push('/'));
    } catch (err) {
        // eslint-disable-next-line
        console.error(err);
        yield put(addTodoFailedAction());
    }
};

const deleteTodo = function* deleteTodo({ payload: { id } }: RemoveTodosActionType) {
    try {
        yield call(dataProvider, `todos/${id}`, 'DELETE');
        yield put(removeTodosSuccessAction(id));
    } catch (err) {
        // eslint-disable-next-line
        console.error(err);
        yield put(removeTodosFailedAction(id));
    }
};

const watchTodosGet = function* watchTodosGet() {
    yield takeLatest(GET_TODOS, getTodos);
};

const watchTodoAdd = function* watchTodoAdd() {
    yield takeLatest(ADD_TODO, addTodo);
};

const watchTodoDelete = function* watchTodoDelete() {
    yield takeLatest(REMOVE_TODO, deleteTodo);
};

const sagas = function* sagas(): Iterable<*> {
    yield fork(watchTodosGet);
    yield fork(watchTodoAdd);
    yield fork(watchTodoDelete);
};

export default sagas;
