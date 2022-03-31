import logo from '../images/481490.png'
import firelogo from '../images/firelogo.png'
import firelogored from '../images/firelogored.png'
import { useNavigate } from 'react-router-dom'


const NavBar = (props) => {
 
  const navigate = useNavigate()

    

  return (
  <div id="navbar">
    <div id={"logo"}>
    <h1>cooksbook</h1>
    <img 
      id="navicon" 
      src ={(logo)} 
      alt ="logo"
      onClick={()=>navigate('/')}
      />
    
    </div>
    
    <div  id="search-form">
      <img id='fireicon' src={props.firelogored ? props.firelogored : firelogo} onClick={()=>navigate("/firerail")}/>
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