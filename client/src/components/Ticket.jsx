const Ticket = () => {
  return (
    <div id="ticket">
      <div id="ticket-start">
        <img id="ticket-image" src="https://i.imgur.com/m8TyWye.jpg"/>
      </div>
      <div id="ticket-middle">
        <h1 id="ticket-name">Japanese Salmon Cubes</h1>
        <h3 id="ticket-overview"> HJKDSHfjkahbsdfgjkbasdjkhfasjkd jkasdhf jklasdf jklasdhfjasdfasdfasdfasdfasdfasdf sadfasfklnasdfjklnaskjbnkjasdbcvjkasbdjk bv</h3>
        <button id="view-ticket-button">View Full Ticket</button>
      </div>
      <div id="ticket-end">
        <h1 id="ticket-ingredients-title">Ingredients</h1>
        <ul id="ticket-ingredient-list">
          <li>ingredient</li>
          <li>ingredient</li>
          <li>ingredient</li>
        </ul>
        <p className="tag">Tag 1</p>
        <p className="tag">Tag 2</p>
        <p className="tag">Tag 3</p>
      </div>
    </div>
  )
}
export default Ticket