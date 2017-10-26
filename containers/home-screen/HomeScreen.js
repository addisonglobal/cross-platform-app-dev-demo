// @flow
import React from 'react';
import {
    Container,
    Title,
    Icon,
    Content,
    Button,
    Header,
} from '@addison-global/primitives';
import PageHeader from '@addison-global/page-header';
import { RefreshControl, Platform } from 'react-native';
import TodoList from '@addison-global/todo-list';

type PropsType = {
    isLoading: boolean,
    fetchTodos: () => {},
    push: (path: string) => {},
};

const Head = ({ push }: { push: (path: string) => {} }) => (
    <PageHeader
        Title={<Title>Home</Title>}
        RightIcon={
            <Button transparent onPress={() => push('/add')}>
                <Icon name="md-add" />
            </Button>}
    />
);

const HomeScreen = ({ isLoading, fetchTodos, ...rest }: PropsType) => (
    <Container>
        {Platform.OS === 'web' ? <Header><Head {...rest} /></Header> : <Head {...rest} />}

        <Content
            refreshControl={
                <RefreshControl
                    refreshing={isLoading}
                    onRefresh={() => fetchTodos()}
                />}
            style={{ backgroundColor: '#FFFFFF' }}
        >
            <TodoList />
        </Content>
    </Container>
);

export default HomeScreen;
