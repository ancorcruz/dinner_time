# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require "json"

Ingredient.delete_all
Recipe.delete_all

recipes_seed_file = Rails.root.join "db/seeds/recipes-en.json"

recipes_json = JSON.parse(File.read(recipes_seed_file))

recipes_json.each do |recipe_data|
  recipe = Recipe.create(recipe_data.except("ingredients"))

  ingredients = recipe_data["ingredients"].map do |i|
    { recipe_id: recipe.id, name: i }
  end

  Ingredient.insert_all(ingredients)
  GC.start
end
