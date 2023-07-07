require "rails_helper"

RSpec.describe "/api/v1/recipes" do
  describe "GET /" do
    let(:recipe_1) { create(:recipe, title: "Recipe 1") }
    let(:recipe_2) { create(:recipe, title: "Recipe 2") }
    let(:recipe_3) { create(:recipe, title: "Recipe 3") }

    let!(:ingredient_1) { create(:ingredient, name: "a cup of yellow cornmeal", recipe: recipe_1) }
    let!(:ingredient_2) { create(:ingredient, name: "two table spoons of white sugar", recipe: recipe_1) }
    let!(:ingredient_3) { create(:ingredient, name: "30oz cornmeal", recipe: recipe_2) }
    let!(:ingredient_4) { create(:ingredient, name: "500 ml of vegetable oil", recipe: recipe_2) }
    let!(:ingredient_5) { create(:ingredient, name: "70 ml of olive oil", recipe: recipe_3) }

    it "responds with all the recipes" do
      get "/api/v1/recipes"

      json_response = JSON.parse(response.body)

      expect(response.status).to eq(200)

      expect(json_response).to eq(
        [
          recipe_1.as_json(include: :ingredients),
          recipe_2.as_json(include: :ingredients),
          recipe_3.as_json(include: :ingredients)
        ]
      )
    end
  end
end
