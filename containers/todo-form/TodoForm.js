// @flow
import React, { Component } from 'react';
import {
    View,
    Alert,
} from 'react-native';
import {
    Text,
    List,
    ListItem,
    InputGroup,
    Input,
    Icon,
    Button,
} from '@addison-global/primitives';

type PropsType = {
    addTodo: *,
};

type StateType = {
    title: string,
};

class TodoForm extends Component {
    constructor(props: PropsType) {
        super(props);
        this.state = {
            title: '',
        };
    }

    state: StateType;
    props: PropsType;

    handleAddTodoBtnPress() {
        const { title } = this.state;

        if (!title.trim()) {
            Alert.alert('Warning', 'Please enter your todo title.');
            return;
        }
        this.props.addTodo(title);
    }

    render() {
        return (
            <View>
                <List>
                    <ListItem>
                        <InputGroup>
                            <Icon name="ios-list" color="pink" />
                            <Input
                                placeholder="Enter your todo"
                                onChangeText={title => this.setState({ title })}
                            />
                        </InputGroup>
                    </ListItem>
                </List>
                <Button
                    primary
                    block
                    style={{ margin: 10 }}
                    onPress={() => this.handleAddTodoBtnPress()}
                >
                    <Text>Add Todo</Text>
                </Button>
            </View>
        );
    }
}

export default TodoForm;
