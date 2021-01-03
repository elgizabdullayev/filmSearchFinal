/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer1 from './redux/reducers/reducer1';
const store = createStore(reducer1, applyMiddleware(thunk));
const AppContainer = () => <Provider store={store}><App/></Provider>;
AppRegistry.registerComponent(appName, () => AppContainer);
