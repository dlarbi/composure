import React from 'react';
require('./RecipeList.scss');
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

class RecipeList extends React.Component {
  render() {
    return (
      <div className="recipe-list">
        <List>
          <Subheader>Recipes</Subheader>
          <ListItem primaryText="Cheesey Risotto" />
          <ListItem primaryText="Parmesan Bread" />
          <ListItem primaryText="Quinoa Salad with Kale" />
          <ListItem primaryText="Bean sprout saute" />
          <ListItem primaryText="Country Chicken" />
        </List>
      </div>
    )
  }
}

export { RecipeList }
