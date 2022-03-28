const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const Recipe = new Schema(
  {
    recipeName: { type: String, required: true },
    recipeImage: { type: String, required: true },
    recipeOverview: { type: String, required: true },
    recipeInstructions: { type: String, required: true },
    tags: [{ type: Schema.Types.ObjectId, ref: 'tag_id' }],
    recipeIngredients: [{ type: Schema.Types.ObjectId, ref: 'ingredient_id' }]
  },
  { timestamps: true }
)

module.exports = mongoose.model('Recipe', Recipe)
