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
      <div id="full-ticket-container">
        <img src={selectedTicket.recipeImage} />
      </div>
    </div>
  )
}

export default FullTicket
