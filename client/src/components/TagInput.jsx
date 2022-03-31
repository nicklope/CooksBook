import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const TagInput = () => {
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

  const createTags = async () => {
    axios.post('http://localhost:3001/createrecipe', formValue)
    navigate('/')
  }

  const {
 tagName
  } = formValue
  return(
    
    <div>         
      <input
    className="tag-form"
    id="tag-input"
    type="text"
    name="tagName"
    placeholder="tag, you're it!"
    onChange={handleChange}
    />
  </div>
  )
}
export default TagInput