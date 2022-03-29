import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import NavBar from '../components/NavBar'
const FullTicket = () => {
  let { ticketId } = useParams()

  const [selectedTicket, setSelectedTicket] = useState([])
  const [selectedIngredients, setSelectedIngredients] = useState([])
  const [selectedTags, setSelectedTags] = useState([])

  const getTicketById = async () => {
    const response = await axios.get(`http://localhost:3001/recipe/${ticketId}`)
    console.log(response.data.recipe)
    setSelectedTicket(response.data.recipe)
    setSelectedIngredients(response.data.recipe.recipeIngredients)
  }
  const getTagsById = async () => {
    const response = await axios.get(`http://localhost:3001/tags/${ticketId}`)
    console.log(response.data.recipe.tags)
    setSelectedTags(response.data.recipe.tags)
  }
  useEffect(() => {
    getTicketById()
    getTagsById()
  }, [])

  return (
    <div>
      <header>
        <NavBar />
      </header>
      <div id="fullticket-container">
        <img id="fullticket-image" src={selectedTicket.recipeImage} />
        <h1 id="fullticket-title">{selectedTicket.recipeName}</h1>
        <h2 id="fullticket-overview">{selectedTicket.recipeOverview}</h2>
        <hr />
        <h1>Ingredients</h1>
        <ul>
          {selectedIngredients.map((ingredient) => (
            <li>{ingredient.ingredientName}</li>
          ))}
        </ul>
        <h1>Instructions</h1>
        <h3 id="fullticket-instructions">
          {selectedTicket.recipeInstructions}
        </h3>
        <h1>Tags</h1>
        <div id="fullticket-tag-container">
          {selectedTags.map((tag) => (
            <p id="fullticket-tags">{tag.tagName}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FullTicket
