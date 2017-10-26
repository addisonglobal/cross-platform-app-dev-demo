// @flow
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { todosListSelector, removeTodoAction, getTodosAction } from '@addison-global/todos-client';

import TodoList from './TodoList';

const mapStateToProps = createStructuredSelector({
    todos: todosListSelector,
});

const mapDispatchToProps = {
    deleteTodo: removeTodoAction,
    loadTodos: getTodosAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
