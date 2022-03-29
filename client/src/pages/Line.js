import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Ticket from '../components/Ticket'
import LineHeader from '../components/LineHeader'
import Landing from '../components/Landing'

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
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <Landing />
      <div id="timeline">
        <LineHeader />
        <div id="ticket-line">
          <Ticket />
        </div>
      </div>
    </div>
  )
}
export default Line
