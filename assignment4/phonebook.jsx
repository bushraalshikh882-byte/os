import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/persons').then(response => {
      setPersons(response.data)
    })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.find(p => p.name === newName)) {
      alert(`${newName} موجود مسبقاً`)
      return
    }
    const personObject = { name: newName, number: newNumber, id: String(persons.length + 1) }
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  const personsToShow = filter 
    ? persons.filter(p => p.name.toLowerCase().includes(filter.toLowerCase())) 
    : persons

  return (
    <div>
      <h1>دليل الهاتف</h1>
      البحث: <input value={filter} onChange={(e) => setFilter(e.target.value)} />
      <form onSubmit={addPerson}>
        <div>الاسم: <input value={newName} onChange={(e) => setNewName(e.target.value)} /></div>
        <div>الرقم: <input value={newNumber} onChange={(e) => setNewNumber(e.target.value)} /></div>
        <button type="submit">إضافة</button>
      </form>
      <h2>الأرقام</h2>
      <ul>{personsToShow.map(p => <li key={p.id}>{p.name}: {p.number}</li>)}</ul>
    </div>
  )
}

export default App