import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
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
  const deleteRecipe = async () => {
    let deleteConfirmation = window.confirm(
      'Are you sure you want to delete this recipe?'
    )
    if (deleteConfirmation) {
      await axios.delete(`http://localhost:3001/recipe/${ticketId}`)
      navLine()
    }
  }
  useEffect(() => {
    getTicketById()
    getTagsById()
  }, [])

  let navigate = useNavigate()
  const navLine = () => {
    navigate('/')
  }

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
        <div id="fullticket-info-container">
          <div id="fullticket-ingredient-container">
            <h1>Ingredients</h1>
            <ul>
              {selectedIngredients.map((ingredient) => (
                <li>{ingredient.ingredientName}</li>
              ))}
            </ul>
          </div>
          <div id="fullticket-instruction-container">
            <h1>Instructions</h1>
            <h3 id="fullticket-instructions">
              {selectedTicket.recipeInstructions}
            </h3>
          </div>
          <div id="fullticket-tag-flexcontainer">
            <h1>Tags</h1>
            <div id="fullticket-tag-container">
              {selectedTags.map((tag) => (
                <p id="fullticket-tags">{tag.tagName}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div id="delete-button-container">
        <button onClick={() => deleteRecipe()} id="delete-button">
          Delete Recipe
        </button>
      </div>
    </div>
  )
}

export default FullTicket
