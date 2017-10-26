// @flow
import type { TodoListType } from '@addison-global/todos-service-types';
import {
    GET_TODOS,
    GET_TODOS_SUCCESS,
    GET_TODOS_FAILURE,
    REMOVE_TODO_SUCCESS,
} from './actions';

export type StateType = {
    list: TodoListType,
    isLoading: boolean,
    error: ?string,
};

const initialState = {
    list: [],
    isLoading: false,
    error: null,
};

const actionMap = {
    [GET_TODOS]: (state: StateType) => ({
        ...state,
        isLoading: true,
    }),
    [GET_TODOS_SUCCESS]: (state: StateType, action) => ({
        list: action.payload.data,
        isLoading: false,
        error: null,
    }),
    [GET_TODOS_FAILURE]: () => ({
        list: [],
        isLoading: false,
        error: 'Failed to load todos',
    }),
    [REMOVE_TODO_SUCCESS]: ({ list, ...rest }: StateType, action: *) => {
        const index = list.findIndex(({ id }) => id === action.payload.id);
        if (index !== -1) {
            return {
                ...rest,
                list: [...list],
            };
        }

        return { list, ...rest };
    },
};

export default (state: StateType = initialState, action: *) => {
    if (action.type && typeof actionMap[action.type] === 'function') {
        return actionMap[action.type](state, action);
    }
    return state;
};
