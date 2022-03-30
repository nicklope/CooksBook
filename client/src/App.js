import './App.css'
import { Route, Routes } from 'react-router-dom'
import Line from './pages/Line'
import About from './pages/About'
import FullTicket from './pages/FullTicket'
import NewTicket from './pages/NewTicket'
import ConfirmationPage from './pages/ConfirmationPage'
import UpdateTicket from './pages/UpdateTicket'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Line />} />
        <Route path="/about" element={<About />} />
        <Route path="/ticket/:ticketId" element={<FullTicket />} />
        <Route path="/confirm/:ticketId" element={<ConfirmationPage />} />
        <Route path="/newticket" element={<NewTicket />} />
        <Route path="/updateticket/:ticketId" element={<UpdateTicket />} />
      </Routes>
    </div>
  )
}

export default App
