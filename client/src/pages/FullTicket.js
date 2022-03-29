import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import NavBar from '../components/NavBar'
const FullTicket = () => {
  let { ticketId } = useParams()

  const [selectedTicket, setSelectedTicket] = useState([])

  const getTicketById = async () => {
    const response = await axios.get(`http://localhost:3001/recipe/${ticketId}`)
    console.log(response)
    setSelectedTicket(response.data.recipe)
  }
  useEffect(() => {
    getTicketById()
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
        <h2>Instructions</h2>
        <h3 id="fullticket-instructions">
          {selectedTicket.recipeInstructions}
        </h3>
      </div>
    </div>
  )
}

export default FullTicket
