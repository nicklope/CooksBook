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
const getRecipeById = async (req, res) => {
  try {
    const { id } = req.params
    const recipe = await Recipe.findById(id).populate('recipeIngredients')
    return res.status(200).json({ recipe })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const getTags = async (req, res) => {
  try {
    const { id } = req.params
    const recipe = await Recipe.findById(id).populate('tags')
    return res.status(200).json({ recipe })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const createRecipeTicket = async (req, res) => {
  try {
    const recipe = await new Recipe(req.body)
    await recipe.save()
    return 'test'
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
const deleteRecipe = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Recipe.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Recipe deleted')
    }
    throw new Error('Recipe not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getRecipe,
  getRecipeById,
  getTags,
  createRecipeTicket,
  deleteRecipe
}
