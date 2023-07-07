class Api::V1::RecipesController < ApplicationController
  def index
    recipes = Recipe.preload(:ingredients).limit(10)

    render json: recipes.to_json(include: :ingredients)
  end
end
