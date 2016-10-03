require('./styles/symbolset/ss-black-tie-light.css'); 
require('./styles/app.scss');
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import App from './App.js';
import reducers from './reducers';
import Routes from './routes';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router history={browserHistory} routes={Routes}/>
    </Provider>
    , document.getElementById('root')
);