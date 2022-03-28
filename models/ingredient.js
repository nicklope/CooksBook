const { Schema } = require('mongoose')

const Ingredient = new Schema(
  {
    ingredientName: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = Ingredient
