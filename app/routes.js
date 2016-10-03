import React from 'react';
import { Router, Route, IndexRoute, Redirect, match, browserHistory } from 'react-router';
import App from './App';
import IndexSite from './components/index_site';

export default (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={IndexSite} />
        </Route>
    </Router>

);