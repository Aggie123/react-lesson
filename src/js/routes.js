import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import App from './components/App';
import ACase from './components/ACase';
import BCase from './components/BCase';
import NotFound from './components/404';
import Counter from './components/Counter-es6';
import Todos from './containers/todos/list'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ACase} />
    <Route path="counter" component={Counter} />
    <Route path="b" component={BCase} />
    <Route path="todos" component={Todos} />
    <Route path="404" component={NotFound} />
    <Redirect from="*" to="404" />
  </Route>
);
