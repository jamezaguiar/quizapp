import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import ThemeSelection from '../pages/ThemeSelection';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/themes" exact component={ThemeSelection} />
  </Switch>
);

export default Routes;
