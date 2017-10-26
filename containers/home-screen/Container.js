// @flow
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { todosLoadingSelector, getTodosAction } from '@addison-global/todos-client';
import { push } from 'react-router-redux';

import HomeScreen from './HomeScreen';

const mapStateToProps = createStructuredSelector({
    isLoading: todosLoadingSelector,
});

const mapDispatchToProps = {
    fetchTodos: getTodosAction,
    push,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
