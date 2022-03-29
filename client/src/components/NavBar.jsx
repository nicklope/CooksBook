import logo from '../images/481490.png'
const NavBar = () => {
  return (
  <div id="navbar">
    <div id="logo">
    <h1>cooksbook</h1>
    <img id="navicon" src ={logo} alt ="logo"/>
    
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