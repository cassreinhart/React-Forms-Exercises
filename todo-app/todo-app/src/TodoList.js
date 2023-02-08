import React, {useState} from 'react'
import NewTodoForm from './NewTodoForm'
import {v4 as uuid} from 'uuid'
import Todo from './Todo'

const TodoList = () => {
  const initialState = [
    {task: 'do laundry', id: uuid()},
    {task: 'wash dishes', id: uuid()},
  ]
  const [todos, setTodos] = useState(initialState)

  return (
    <div className='TodoList'>
      <NewTodoForm />
      <ul>
      {todos.map(({task, id}) => <Todo key={id} task={task} />)}
      </ul>
    </div>
  )
}

export default TodoList