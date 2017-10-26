// @flow
import React from 'react';
import {
    Text,
    Container,
    Header,
    Title,
    Content,
    Button,
} from '@addison-global/primitives';
import TodoForm from '@addison-global/todo-form';
import PageHeader from '@addison-global/page-header';
import { Platform } from 'react-native';

type PropsType = {
    push: (path: string) => {},
};

const Head = ({ push }: PropsType) => (
    <PageHeader
        Title={<Title>Add</Title>}
        LeftIcon={
            <Button transparent onPress={() => push('/')}>
                <Text>Back</Text>
            </Button>}
    />
);

const HomeScreen = (props: PropsType) => (
    <Container>
        {Platform.OS === 'web' ? <Header><Head {...props} /></Header> : <Head {...props} />}
        <Content
            style={{ backgroundColor: '#FFFFFF' }}
        >
            <TodoForm />
        </Content>
    </Container>
);

export default HomeScreen;
