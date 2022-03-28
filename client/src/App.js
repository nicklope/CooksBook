import './App.css'
import { Route, Routes } from 'react-router-dom'
import Line from './pages/Line'
import About from './pages/About'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Line />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
