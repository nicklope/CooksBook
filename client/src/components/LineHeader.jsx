const LineHeader = (props) => {
  return (
  <div id="lineheader">
    <div id="lineheader-title">
      Tickets on the Rail
    </div>
    <div 
      onClick={props.onClick}
      id="newpost-button">
      New Ticket +
    </div>
  </div>
  )
}
export default LineHeader