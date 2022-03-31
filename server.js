const express = require('express')
const cors = require('cors')
const foodController = require('./controller/foodController')
const db = require('./db')
const logger = require('morgan')

const app = express()

const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(cors())
app.use(logger('dev'))
app.use(express.urlencoded({ extended: false }))

app.get('/recipes', foodController.getRecipe)
app.get('/recipe/:id', foodController.getRecipeById)
app.get('/fire', foodController.getRecipeByFire)
app.delete('/recipe/:id', foodController.deleteRecipe)
app.post('/createrecipe', foodController.createRecipeTicket)
app.post('/createtags/:id', foodController.createTags)
app.put('/updaterecipe/:id', foodController.updateRecipeTicket)
app.put('/togglefiretrue/:id', foodController.toggleFireTicketTrue)
app.put('/togglefirefalse/:id', foodController.toggleFireTicketFalse)
app.disable('etag')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
