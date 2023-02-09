import React from 'react';
import './Todo.css'

const Todo = ({task, removeTodo, editTodo}) => {
  return (
    <div className='Todo'>
        <button className='delete' onClick={removeTodo}>X</button>
        <li>{task}</li>
        <button className='edit' onClick={editTodo}>Edit</button>
    </div>
  )
}

export default Todo