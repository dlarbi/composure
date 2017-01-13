import React from 'react';
import { RecipeList } from '../RecipeList/RecipeList.jsx';
import { RecipeCard } from '../RecipeCard/RecipeCard.jsx';
require('./RecipesDashboard.scss');

class RecipesDashboard extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      recipe: {
        image: '',
        ingredients: [
          {
            name: 'Carrots',
            amount: 8,
            unit: 'oz'
          },
          {
            name: 'Garlic',
            amount: 1,
            unit: 'oz'
          }
        ],
        procedure: {
          steps: [
            'Dice carrots and 2 cloves of Garlic.  Saute and cover on medium heat.',
            'Dice one pear, half a cup of parsley, and mix with 1 tbsp olive oil and 2 tbsp balsamic vinegar.',
            'Cook a few corn tortillas.',
            'Make some tacos.'
          ]
        }
      }
    };
  }

  render() {
    return (
      <div className="recipes-dashboard">
        <div style={{width:'20%',float:'left'}}>
          <RecipeList />
        </div>
        <div style={{width:'80%',float:'left'}} className="recipe-wrapper">
          <RecipeCard image={this.state.recipe.image} ingredients={this.state.recipe.ingredients} procedure={this.state.recipe.procedure}/>
        </div>
      </div>
    )
  }
}

export { RecipesDashboard }
