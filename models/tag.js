const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const Tag = new Schema(
  {
    tagName: { type: String, required: true },
    recipe: { type: Schema.Types.ObjectId, ref: 'Tag' }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Tag', Tag)
