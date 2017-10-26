// @flow
import React, { Component } from 'react';
import { View } from 'react-native';
import Expo from 'expo';
import { Provider } from 'react-redux';

import createStore from '@addison-global/create-store';
import { reducer as todos, sagas as todoSagas } from '@addison-global/todos-client';
import { Route } from 'react-router-native';

import AddTodoScreen from '@addison-global/add-todo-screen';
import HomeScreen from '@addison-global/home-screen';

import { createMemoryHistory } from 'history';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';

const history = createMemoryHistory();
const middleware = routerMiddleware(history);

const store = createStore({
    ...todos,
    router: routerReducer,
}, [todoSagas], {}, [middleware]);

type StateType = {
    isReady: boolean,
};

export default class AppContainer extends Component {
    constructor() {
        super();

        this.state = {
            isReady: false,
        };
    }

    state: StateType;

    // $FlowFixMe Fix async incompatibility
    async componentWillMount() {
        await Expo.Font.loadAsync({
            /* eslint-disable global-require */
            // $FlowFixMe Fix font support
            Roboto: require('native-base/Fonts/Roboto.ttf'),
            // $FlowFixMe Fix font support
            Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
            Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf'),
            /* eslint-enable global-require */
        });
        this.setState({ isReady: true });
    }

    render() {
        if (!this.state.isReady) {
            return <Expo.AppLoading />;
        }

        return (
            <Provider store={store}>
                <ConnectedRouter history={history} >
                    <View style={{ flex: 1 }}>
                        <Route exact path="/" component={HomeScreen} />
                        <Route path="/add" component={AddTodoScreen} />
                    </View>
                </ConnectedRouter>
            </Provider>
        );
    }
}
