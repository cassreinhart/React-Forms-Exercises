import React, {useState} from 'react'

const NewBoxForm = ({addBox}) => {
  const initialState = {
    backgroundColor: '',
    width: '',
    height: '',
  }

  const [formData, setFormData]  = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox({...formData})
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
    <div>
      <form onSubmit={handleSubmit}>
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
        <button>Add Box</button>
      </form>
    </div>
  )
}

export default NewBoxForm