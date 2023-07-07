class Api::V1::RecipesController < ApplicationController
  def index
    recipes = Recipe
      .with_ingredients(ingredients_params)
      .preload(:ingredients)
      .limit(10)

    render json: recipes.to_json(include: :ingredients)
  end

  private

  def ingredients_params
    params[:ingredients]&.join("|")
  end
end
