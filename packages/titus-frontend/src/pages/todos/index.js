import React, { useEffect, useState } from 'react'
import './todo-list.css' // Custom todo list CSS

const Todo = props => {
  const [checked, setChecked] = useState(Boolean(props.completedAt))
  return (
    <label className="todo">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(checked => !checked)}
      />
      {props.description}
    </label>
  )
}

const TodoList = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    getTodos()
  }, [])

  async function getTodos() {
    const results = await fetch('/todos')
    const fetchedTodos = await results.json()
    setTodos(fetchedTodos.data)
  }

  return (
    <div>
      {todos.map(todo => (
        <Todo key={todo.id} {...todo} />
      ))}
    </div>
  )
}

export default TodoList
