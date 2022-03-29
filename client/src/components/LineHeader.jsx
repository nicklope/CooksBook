const LineHeader = (props) => {
  return (
  <div id="lineheader">
    <div id="lineheader-title">
      Tickets on the Line
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