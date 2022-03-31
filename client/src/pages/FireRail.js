import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import NavBar from '../components/NavBar'
import Ticket from '../components/Ticket'
import LineHeader from '../components/LineHeader'
import Landing from '../components/Landing'
import firelogored from '../images/firelogored.png'

const FireRail = () => {
  const [recipes, setRecipes] = useState([])
  const [fireChecker, setFireChecker] = useState(0)

  const grabRecipes = async () => {
    const response = await axios.get('http://localhost:3001/fire')
    console.log(response.data.recipe)
    setRecipes(response.data.recipe)
  }
  useEffect(() => {
    grabRecipes()
    console.log('change')
  }, [fireChecker])

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
  let fire = 0
  return (
    <div>
      <header>
        <NavBar firelogored={firelogored} />
      </header>
      <div id="timeline">
        <div id="firerail-header">
          <LineHeader
            title={'Tickets on the Fire Rail'}
            onClick={() => {
              navNewTicket()
            }}
          />
        </div>
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
                    fire++
                    setFireChecker(fire)
                    console.log(fireChecker)
                  } else {
                    fireClickFalse(recipe._id)
                    fire++
                    setFireChecker(fire)
                    console.log(fireChecker)
                  }
                }}
                src={recipe.fireLogo}
                key={recipe._id}
              />
            ))}
        </div>
      </div>
    </div>
  )
}
export default FireRail
