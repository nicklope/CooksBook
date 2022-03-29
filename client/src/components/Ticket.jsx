const Ticket = (props) => {
  return (
    <div id="ticket">
      <div id="ticket-start">
        <img id="ticket-image" src={props.ticketImage}/>
      </div>
      <div id="ticket-middle">
        <h1 id="ticket-name">{props.ticketName}</h1>
        <h3 id="ticket-overview">{props.ticketOverview}</h3>
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