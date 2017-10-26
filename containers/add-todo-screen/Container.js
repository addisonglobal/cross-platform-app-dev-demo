// @flow
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import AddTodoScreen from './AddTodoScreen';

const mapDispatchToProps = {
    push,
};

export default connect(null, mapDispatchToProps)(AddTodoScreen);
