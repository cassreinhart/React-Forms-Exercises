import React, {useState} from 'react'
import './NewBoxForm.css'

const NewBoxForm = ({addBox}) => {
  const initialState = {
    backgroundColor: '#aabbcc',
    width: '',
    height: '',
  }

  const [formData, setFormData]  = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    addBox(formData)
    setFormData(initialState)
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    
    setFormData(formData => ({
      ...formData, 
      [name]: value
    }))
  }

  return (
    <div className='NewBoxForm'>
      <form onSubmit={handleSubmit}>
        <h4>Add a New Box</h4>
        <label htmlFor="backgroundColor">Box Color</label>
        <input 
          type="color"
          name='backgroundColor'
          placeholder='Enter a color'
          value={formData.backgroundColor}
          onChange={handleChange} 
          />
        <label htmlFor="height">Height: {formData.height}</label>
        <input 
          type="number"
          name='height'
          placeholder='Box height'
          value={formData.height}
          onChange={handleChange} 
          />
        <label htmlFor="width">Width: {formData.width}</label>
        <input 
          type="number"
          name='width'
          placeholder='Box width'
          value={formData.width}
          onChange={handleChange} 
          />
        <button className='add'>Add Box</button>
      </form>
    </div>
  )
}

export default NewBoxForm