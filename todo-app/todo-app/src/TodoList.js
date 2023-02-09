import React, {useState} from 'react'
import NewTodoForm from './NewTodoForm'
import {v4 as uuid} from 'uuid'
import Todo from './Todo'
import './TodoList.css'

const TodoList = () => {
  const initialState = [
    {task: 'do laundry', id: uuid()},
    {task: 'wash dishes', id: uuid()},
  ]
  const [todos, setTodos] = useState(initialState)

  const addTodo = (newTodo) => {
    setTodos(todos => [...todos, {...newTodo, id: uuid()}])
  }
  const removeTodo = (e) => {
    e.target.parentNode.remove()
    setTodos(todos.filter(todo => todo.id !== e.target.key))
  }
  const editTodo = () => {
    console.log('implement me')
  }

  return (
    <div className='TodoList'>
      <h1>Todos</h1>
      <NewTodoForm addTodo={addTodo} />
      <ul>
      {todos.map(({task, id, removeBox, editBox}) => <Todo key={id} task={task} removeTodo={removeTodo} editTodo={editTodo} />)}
      </ul>
    </div>
  )
}

export default TodoList