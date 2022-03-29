const Ticket = () => {
  return (
    <div id="ticket">
      <img src="https://i.imgur.com/m8TyWye.jpg"/>
      <div id="ticket-middle">
        <h1 id="ticket-name">Japanese Salmon Cubes</h1>
        <h3 id="ticket-overview"></h3>
        <button id="view-ticket-button">View Full Ticket</button>
      </div>
      <div id="ticked-end">
        <h1 id="ticket-ingredients-title">Ingredients</h1>
        <ul id="ticket-ingredient-list">
          <li>ingredient</li>
          <li>ingredient</li>
          <li>ingredient</li>
        </ul>
        <p>Tag 1</p>
        <p>Tag 2</p>
        <p>Tag 3</p>
      </div>
    </div>
  )
}
export default Ticket