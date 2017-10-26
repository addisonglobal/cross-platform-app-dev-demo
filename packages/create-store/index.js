// @flow
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import combineSagas, { type SagaType } from '@addison-global/combine-sagas';

type ReducersType = { [key: string]: (...rest: *) => * };
type StateType = { [key: string]: * };

const createAppStore = (
    reducers: ReducersType,
    sagas?: SagaType = [],
    initialState?: StateType = {},
    middleware?: * = [],
) => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        combineReducers(reducers),
        initialState,
        composeWithDevTools(applyMiddleware(sagaMiddleware, ...middleware)),
    );

    sagaMiddleware.run(combineSagas(sagas));

    return store;
};

export default createAppStore;
