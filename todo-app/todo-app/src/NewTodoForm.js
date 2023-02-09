import React, {useState} from 'react'
import './NewTodoForm.css'

const NewTodoForm = ({addTodo}) => {
  const [input, setInput] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({...input}) //fix add todo
    setInput('')
  }

  const handleChange = (e) => {
    const {name, value} = e.target;

    setInput(text => ({
      ...text, 
      [name]: value      
    }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Todo:</h2>
      <label htmlFor="addTodo">Add Todo</label>
      <input 
        type="text" 
        id='addTodo' 
        placeholder='Buy groceries...'
        name='addTodo'
        value={input.todo}
        onChange={handleChange}
        />
      <button>Add</button>
    </form>
  )
}

export default NewTodoForm