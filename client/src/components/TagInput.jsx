import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
const TagInput = () => {
  const {ticketId} = useParams()
  const navigate = useNavigate()
  const [formValue, setFormValue] = useState({
    tagName: ""
  })
  const handleChange = (event) => {
    const { name, value } = event.target
    const newValues = (prevState) => {
      return {
        ...prevState,
        [name]: value
      }
    }
    
    setFormValue(newValues)
    console.log(formValue)
  }

  const createTags = async (e) => {
    e.preventDefault()
    axios.post(`http://localhost:3001/createtags/${ticketId}`, formValue)
    
  }

  const {
 tagName
  } = formValue
  return(
    
    <div> 
      <form onSubmit={createTags}>     
      <input
    className="tag-form"
    id="tag-input"
    type="text"
    name="tagName"
    placeholder="tag, you're it!"
    onChange={handleChange}
    />
     <button id="submittags-button" type="submit">Submit Tags</button>
     </form>   
  </div>
  )
}
export default TagInput