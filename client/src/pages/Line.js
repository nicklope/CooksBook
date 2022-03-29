import { useState, useEffect } from 'react'
import axios from 'axios'
import NavBar from '../components/NavBar'
import Ticket from '../components/Ticket'
import LineHeader from '../components/LineHeader'
import Landing from '../components/Landing'
import { useNavigate } from 'react-router-dom'

const Line = () => {
  const [recipes, setRecipes] = useState([])
  const grabRecipes = async () => {
    const response = await axios.get('http://localhost:3001/recipes')
    console.log(response)
    setRecipes(response.data.recipe)
  }
  useEffect(() => {
    grabRecipes()
  }, [])

  let navigate = useNavigate()

  const showTicket = (ticket) => {
    navigate(`/ticket/${ticket}`)
  }
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <Landing />
      <div id="timeline">
        <LineHeader />
        <div id="ticket-line">
          {recipes.map((recipe) => (
            <Ticket
              ticketImage={recipe.recipeImage}
              ticketName={recipe.recipeName}
              ticketOverview={recipe.recipeOverview}
              onClick={() => {
                showTicket(recipe._id)
              }}
              key={recipe._id}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
export default Line
