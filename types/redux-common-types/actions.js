// @flow
export type ActionType<T> = {
    type: T,
};

export type GenericActionType<T, P> = $Exact<{
    type: T,
    payload: P,
}>;
