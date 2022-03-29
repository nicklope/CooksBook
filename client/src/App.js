import './App.css'
import { Route, Routes } from 'react-router-dom'
import Line from './pages/Line'
import About from './pages/About'
import FullTicket from './pages/FullTicket'
import NewTicket from './pages/NewTicket'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Line />} />
        <Route path="/about" element={<About />} />
        <Route path="/ticket/:ticketId" element={<FullTicket />} />
        <Route path="/newticket" element={<NewTicket />} />
      </Routes>
    </div>
  )
}

export default App
