import React, { useEffect, useState } from "react";
import axios from "axios";

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  const RECIPES_API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetchRecipes().then((recipes) => setRecipes(recipes))
  }, []);

  function fetchRecipes(params) {
    return axios.get(RECIPES_API_URL, { params: params }).then((response) => response.data);
  };

  const handleChange = (e) => { setIngredients(e.target.value); }

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedIngredients = String(ingredients).split(',').map((ingredient) => ingredient.trim());

    fetchRecipes({ ingredients: formattedIngredients }).then((recipes) => setRecipes(recipes));
  }

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="search">Ingredients:</label>
          <br/>
          <input type="text" id="search" onChange={handleChange}/>
          <button>Search</button>
        </form>
      </div>

      <div>
        <h2>Recipes:</h2>

        {recipes.map((recipe) => {
          return(
            <div key={recipe.id} id={"recipe-" + recipe.id}>
              <h3>{recipe.title}</h3>
              <span>Ingredients:</span>
              <ul>
                {recipe.ingredients.map((ingredient) => {
                  return(<li key={"ingredient-" + ingredient.id}>{ingredient.name}</li>);
                })}
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default RecipeList
