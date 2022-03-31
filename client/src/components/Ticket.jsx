


const Ticket = (props) => {

  return (
    <div id="ticket">
      <div id="ticket-start">
        <img id="ticket-image" src={props.ticketImage}/>
      </div>
      <div id="ticket-middle">
        <h1 id="ticket-name">{props.ticketName}</h1>
        <h3 id="ticket-overview">{props.ticketOverview}</h3>
        <button id="view-ticket-button" onClick={props.onClick}>View Full Ticket</button>
      </div>
      <div id="ticket-end">
        <img id='fire-button' onClick={props.fireClick} src={props.src} key={props.imgKey}/>
      </div>
    </div>
  )
}
export default Ticket