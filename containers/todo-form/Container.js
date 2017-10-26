// @flow
import { connect } from 'react-redux';
import { addTodoAction } from '@addison-global/todos-client';

import TodoForm from './TodoForm';

const mapDispatchToProps = {
    addTodo: addTodoAction,
};

export default connect(null, mapDispatchToProps)(TodoForm);
