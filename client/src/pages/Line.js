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
    console.log(response.data.recipe)
    setRecipes(response.data.recipe)
  }
  useEffect(() => {
    grabRecipes()
  }, [])

  let navigate = useNavigate()

  const showTicket = (ticket) => {
    navigate(`/ticket/${ticket}`)
  }
  const navNewTicket = () => {
    navigate(`/newticket`)
  }
  const fireClickTrue = (ticketId) => {
    axios.put(`http://localhost:3001/togglefiretrue/${ticketId}`)
  }
  const fireClickFalse = (ticketId) => {
    axios.put(`http://localhost:3001/togglefirefalse/${ticketId}`)
  }
  let color = 'black'
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <Landing />
      <div id="timeline">
        <LineHeader
          onClick={() => {
            navNewTicket()
          }}
        />
        <div id="ticket-line">
          {recipes
            .slice(0)
            .reverse()
            .map((recipe) => (
              <Ticket
                ticketImage={recipe.recipeImage}
                ticketName={recipe.recipeName}
                ticketOverview={recipe.recipeOverview}
                onClick={() => {
                  showTicket(recipe._id)
                }}
                fireClick={async () => {
                  const response = await axios.get(
                    `http://localhost:3001/recipe/${recipe._id}`
                  )

                  if (response.data.recipe.fire == false) {
                    fireClickTrue(recipe._id)
                  } else {
                    fireClickFalse(recipe._id)
                  }
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
