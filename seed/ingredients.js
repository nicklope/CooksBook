const db = require('../db')
const Ingredient = require('../models/Ingredient')

const main = async () => {
  const ingredients = [
    { ingredientName: 'salmon' },
    { ingredientName: 'sesame oil' },
    { ingredientName: 'soy sauce' },
    { ingredientName: 'black pepper' },
    { ingredientName: 'salt' },
    { ingredientName: 'teriyaki sauce' }
  ]
  await Ingredient.insertMany(ingredients)
  console.log('Here come some ingredients!')
}
const run = async () => {
  await main()
  db.close()
}
run()
