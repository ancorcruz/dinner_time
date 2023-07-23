import React from "react";

function Recipes(props) {
  return (
    <div>
      <h2>Recipes:</h2>
      {props.recipes.map((recipe) => {
        return(
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>Ingredients: {recipe.ingredients}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Recipes
