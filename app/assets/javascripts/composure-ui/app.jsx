import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener("DOMContentLoaded", function() {
  class ComposureApp extends React.Component {
    render() {
      return (
        <div className="composure-app">
        Hello world
        </div>
      )
    }
  }

  ReactDOM.render(<ComposureApp />, document.getElementById("composure-app"));
});
