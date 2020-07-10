/*
 *
 * App.js
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

// eslint-disable-next-line import/no-unresolved
import HomePage from 'containers/HomePage/Loadable';
// eslint-disable-next-line import/no-unresolved
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Drawer from '../../components/ResponsiveDrawer';
import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Drawer>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
        <GlobalStyle />
      </Drawer>
    </div>
  );
}
