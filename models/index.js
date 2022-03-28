const mongoose = require('mongoose')
const RecipeSchema = require('./recipe')
const IngredientSchema = require('./ingredient')

const Recipe = mongoose.model('Recipe', RecipeSchema)
const Ingredient = mongoose.model('Ingredient', IngredientSchema)

module.exports = {
  Recipe,
  Ingredient
}
