import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class RecipeCard extends React.Component {
  render() {
    return (
      <div className="recipe-card">
        <Card>
            <CardHeader
              title="URL Avatar"
              subtitle="Subtitle"
              avatar="images/jsa-128.jpg"/>
            {this.props.image.length ?
            <CardMedia overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle"/>}>
              <img src="images/nature-600-337.jpg" />
            </CardMedia>
            : null }
            <CardTitle title="Cheesey Risotto" subtitle="Rice, feta cheese, butter, .." />
            <CardText>
              Dice carrots and 2 cloves of Garlic.  Saute and cover on medium heat.<br/>
              Dice one pear, half a cup of parsley, and mix with 1 tbsp olive oil and 2 tbsp balsamic vinegar.<br/>
              Cook a few corn tortillas.<br/>
              Make some tacos.
            </CardText>
            <CardActions>
              <FlatButton label="Edit Recipe" />
              <FlatButton label="Add to Calendar" />
            </CardActions>
          </Card>
      </div>
    )
  }
}

RecipeCard.propTypes = {
  image: React.PropTypes.string
};

export { RecipeCard }
