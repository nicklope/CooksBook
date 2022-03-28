const db = require('../db')
const Recipe = require('../models/Recipe')

const main = async () => {
  const recipes = [
    {
      recipeName: 'Japanese Salmon Cubes',
      recipeImage: 'https://i.imgur.com/m8TyWye.jpg',
      recipeOverview:
        'Tender chunks of salmon that have been marinated in soy sauce and sesame.',
      recipeInstructions: `Cut salmon into 2” x 2” chucks by making three evenly spaced vertical cuts, and three or four evenly spaced horizontal cuts.
    Add salmon chunks, soy sauce, teriyaki, and sesame oil to bowl.  Mix with spoon to evenly coat salmon. Season with black pepper.
    Marinate for at least half an hour, then preheat oven to 450
    Place marinated salmon chunks on lightly greased sheet and cook for 12-15 minutes depending on thickness.
    Serve with steamed rice and seaweed sheets`,
      tags: [
        '6242028f08747d1781bf39b0',
        '6242028f08747d1781bf39b1',
        '6242028f08747d1781bf39b2'
      ],
      recipeIngredients: [
        '624202829992117e9ec9e9ff',
        '624202829992117e9ec9ea00',
        '624202829992117e9ec9ea01',
        '624202829992117e9ec9ea02',
        '624202829992117e9ec9ea03'
      ]
    }
  ]

  await Recipe.insertMany(recipes)
  console.log('Here come some recipes!')
}
const run = async () => {
  await main()
  db.close()
}
run()
