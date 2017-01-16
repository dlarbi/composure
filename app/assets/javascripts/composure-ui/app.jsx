import React from 'react';
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import { ComposureApp } from './components/ComposureApp/ComposureApp.jsx';
import { CalendarDashboard } from './components/CalendarDashboard/CalendarDashboard.jsx';
import { RecipesDashboard } from './components/RecipesDashboard/RecipesDashboard.jsx';

// Allows onTouchTap events
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

document.addEventListener("DOMContentLoaded", function() {

  render((
    <Router history={browserHistory}>
      <Route path="/users/:user_id" component={ComposureApp}>
        <Route path="/users/:user_id/recipes" component={RecipesDashboard}>
        </Route>
        <Route path="/users/:user_id/calendar" component={CalendarDashboard}>
        </Route>
      </Route>
    </Router>
  ), document.getElementById("composure-app"))

});
