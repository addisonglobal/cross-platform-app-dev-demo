/**
* react-native-web + native-base-web starter app
* Chion82 https://github.com/Chion82/rnweb-native-base-starter
* https://miria.moe
*/
import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
// import * as navi from 'react-navigation';

import createStore from '@addison-global/create-store';
import { reducer as todos, sagas as todoSagas } from '@addison-global/todos-client';

import HomeScreen from '@addison-global/home-screen';
import AddTodoScreen from '@addison-global/add-todo-screen';

import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router-dom';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore({
    ...todos,
    router: routerReducer,
}, [todoSagas], {}, [middleware]);

const AppContainer = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Route exact path="/" component={HomeScreen} />
                <Route path="/add" component={AddTodoScreen} />
            </div>
        </ConnectedRouter>
    </Provider>
);

AppRegistry.registerComponent('App', () => AppContainer);
AppRegistry.runApplication('App', {
    rootTag: document.getElementById('react-root'),
});
