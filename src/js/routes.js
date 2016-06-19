import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import App from './components/App';
import ACase from './components/ACase';
import BCase from './components/BCase';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ACase} />
    <Route path="404" component={BCase} />
    <Redirect from="*" to="404" />
  </Route>
);
