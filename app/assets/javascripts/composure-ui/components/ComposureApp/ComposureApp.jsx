import React from 'react';
import Theme from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
require('./ComposureApp.scss');

class ComposureApp extends React.Component {
  render() {
    return (
      <Theme>
        <div className="composure-app">
          <AppBar
            title="Composure"
            iconClassNameRight="muidocs-icon-navigation-expand-more"/>
          {this.props.children}
        </div>
      </Theme>
    )
  }
}

export { ComposureApp }
