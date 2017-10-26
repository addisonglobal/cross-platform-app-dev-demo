// @flow
import type { TodoListType } from '@addison-global/todos-service-types';

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { View, Text, Icon, List, ListItem } from '@addison-global/primitives';

const styles = StyleSheet.create({
    listItemWrap: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});

type PropsType = {
    todos: TodoListType,
    deleteTodo: (id: number) => {},
    loadTodos: () => {},
};

class TodoList extends Component {
    componentWillMount() {
        this.props.loadTodos();
    }

    props: PropsType;

    render() {
        const { todos, deleteTodo } = this.props;
        return (
            <List>
                {todos.map(todo => (
                    <ListItem key={todo.id}>
                        <View style={styles.listItemWrap}>
                            <Text>
                                {todo.title}
                            </Text>
                            <Text onPress={() => deleteTodo(todo.id)}>
                                {/* <Icon name="ios-trash" color={yayoiTheme.grey} /> */}
                                <Icon name="ios-trash" />
                            </Text>
                        </View>
                    </ListItem>
                ))}
                {todos.length === 0 && (
                    <ListItem>
                        <Text>You have no Todo. Add one!</Text>
                    </ListItem>
                )}
            </List>
        );
    }
}

export default TodoList;
