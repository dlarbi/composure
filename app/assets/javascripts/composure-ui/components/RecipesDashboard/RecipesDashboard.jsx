import React from 'react';
import { RecipeList } from '../RecipeList/RecipeList.jsx';

class RecipesDashboard extends React.Component {
  render() {
    return (
      <div className="recipes-dashboard">
        <div style={{width:'20%'}}>
          <RecipeList />
        </div>
        <div style={{width:'80%'}}>

        </div>
      </div>
    )
  }
}

export { RecipesDashboard }
