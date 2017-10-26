// @flow
import { all, fork } from 'redux-saga/effects';

export type SagaFunctionType = () => (Generator<*, *, *> | Iterable<*>);
export type SagaType = Array<SagaFunctionType>;

const combineSagas = (sagas: SagaType) => function* rootSaga(): Iterable<*> {
    yield all(sagas.map(saga => fork(saga)));
};

export default combineSagas;
