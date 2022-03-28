const Recipe = require('../models/Recipe')
const Ingredient = require('../models/Ingredient')
const Tag = require('../models/Tag')
const axios = require('axios')

const getRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.find()
    return res.status(200).json({ recipe })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getRecipe
}
