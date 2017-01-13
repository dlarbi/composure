import React from 'react';
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import { ComposureApp } from './components/ComposureApp/ComposureApp.jsx';
import { RecipesDashboard } from './components/RecipesDashboard/RecipesDashboard.jsx';

document.addEventListener("DOMContentLoaded", function() {

  render((
    <Router history={browserHistory}>
      <Route path="/" component={ComposureApp}>
        <Route path="recipes" component={RecipesDashboard}>
        </Route>
      </Route>
    </Router>
  ), document.getElementById("composure-app"))

});
