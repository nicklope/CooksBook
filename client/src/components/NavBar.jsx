import logo from '../images/481490.png'
import { useNavigate } from 'react-router-dom'
const NavBar = () => {
  const navigate = useNavigate()
  const navLine = () => {
    navigate('/')
  }
  return (
  <div id="navbar">
    <div id="logo">
    <h1>cooksbook</h1>
    <img 
      id="navicon" 
      src ={logo} 
      alt ="logo"
      onClick={()=>navLine()}
      />
    
    </div>
    
    <div  id="search-form">
      <h1 id='search-title'>search:</h1>
      <form>
        <div id='search-input'>
          <label>
            <input type="text" name="search" id="search-bar"/>
          </label>
          <input type="submit" value="go" id="submit-button"/>
        </div>
      </form>
    </div>
  </div>
  )
}
export default NavBar