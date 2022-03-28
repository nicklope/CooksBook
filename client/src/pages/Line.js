import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Ticket from '../components/Ticket'
import LineHeader from '../components/LineHeader'

const Line = () => {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <div id="timeline">
        <LineHeader />
        <div id="ticket-line"></div>
      </div>
    </div>
  )
}
export default Line
