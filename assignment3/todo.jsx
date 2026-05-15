import { useState } from 'react'

const App = () => {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState('')

  const addTodo = () => {
    if (newTodo.trim() === '') return
    setTodos(todos.concat({
      id: Date.now(),
      text: newTodo,
      done: false
    }))
    setNewTodo('')
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div>
      <h1>قائمة المهام</h1>
      <input 
        value={newTodo} 
        onChange={(e) => setNewTodo(e.target.value)} 
        placeholder="أضف مهمة جديدة..."
      />
      <button onClick={addTodo}>إضافة</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
            <span onClick={() => toggleTodo(todo.id)} style={{ cursor: 'pointer' }}>
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)} style={{ color: 'red' }}>حذف</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App