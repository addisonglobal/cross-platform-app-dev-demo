// @flow
import { createSelector } from 'reselect';

import type { StateType } from './reducer';

const todosSelector = state => state.todos;

export const todosListSelector = createSelector([todosSelector], (todos: StateType) => todos.list);
export const todosLoadingSelector = createSelector([todosSelector], (todos: StateType) => todos.isLoading);

