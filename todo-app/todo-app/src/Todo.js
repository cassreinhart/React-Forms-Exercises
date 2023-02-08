import React from 'react'

const Todo = ({id, task}) => {
  return (
    <div className='Todo'>
        <li>{task}</li>
        <button>X</button>
    </div>
  )
}

export default Todo