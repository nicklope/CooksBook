const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const Tag = new Schema(
  {
    tagName: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Tag', Tag)
