class Recipe < ApplicationRecord
  has_many :ingredients

  scope :with_ingredients, ->(ingredients) {
    return unless ingredients.present?

    joins(:ingredients)
      .where("ingredients.name ~* :ingredients", ingredients: ingredients)
      .group(:id)
      .order(Arel.sql("COUNT(*) DESC"))
  }
end
