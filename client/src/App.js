import './App.css'
import { Route, Routes } from 'react-router-dom'
import Line from './pages/Line'
import About from './pages/About'
import FullTicket from './pages/FullTicket'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Line />} />
        <Route path="/about" element={<About />} />
        <Route path="/ticket/:ticketId" element={<FullTicket />} />
      </Routes>
    </div>
  )
}

export default App
