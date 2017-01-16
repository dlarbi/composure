import React from 'react';
import Theme from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router'

require('./ComposureApp.scss');

class ComposureApp extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      ui: {
        mainMenuOpen: false
      }
    }
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleToggle() {
    console.log(this.state)
    this.setState({ui: {mainMenuOpen: !this.state.ui.mainMenuOpen}});
  }

  handleClose() {
    this.setState({ui: {mainMenuOpen: false}})
  }

  render() {
    return (
      <Theme>
        <div className="composure-app">
          <AppBar
            title="Composure"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onLeftIconButtonTouchTap={this.handleToggle}/>
          <Drawer
            docked={false}
            width={200}
            open={this.state.ui.mainMenuOpen}
            onRequestChange={(open) => this.setState({open})}>
            <Link to={`/users/${this.props.params.user_id}/calendar`}><MenuItem onTouchTap={this.handleClose}>Calendar</MenuItem></Link>
            <Link to={`/users/${this.props.params.user_id}/recipes`}><MenuItem onTouchTap={this.handleClose}>Recipes</MenuItem></Link>
          </Drawer>
          {this.props.children}
        </div>
      </Theme>
    )
  }
}

export { ComposureApp }
