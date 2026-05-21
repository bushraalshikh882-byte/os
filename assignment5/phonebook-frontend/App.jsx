import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  // جلب البيانات من السيرفر عند تحميل الصفحة
  useEffect(() => {
    axios
      .get('http://localhost:3001/api/persons')
      .then(response => {
        setPersons(response.data)
      })
      .catch(error => console.log('خطأ في جلب البيانات:', error))
  }, [])

  // معالجة إضافة شخص جديد
  const addPerson = (event) => {
    event.preventDefault()
    
    if (!newName || !newNumber) {
      alert('الرجاء إدخال الاسم والرقم معاً!')
      return
    }

    // التحقق من تكرار الاسم
    if (persons.some(person => person.name === newName)) {
      alert(${newName} موجود بالفعل في دليل الهاتف!)
      return
    }

    const personObject = {
      name: newName,
      number: newNumber,
    }

    // إرسال البيانات الجديدة للسيرفر
    axios
      .post('http://localhost:3001/api/persons', personObject)
      .then(response => {
        setPersons(persons.concat(response.data))
        setNewName('')
        setNewNumber('')
      })
      .catch(error => {
        alert('حدث خطأ أثناء الإضافة')
        console.log(error)
      })
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', direction: 'rtl' }}>
      <h2>دليل الهاتف (الوظيفة الخامسة)</h2>
      
      <form onSubmit={addPerson} style={{ marginBottom: '20px' }}>
        <h3>إضافة جهة اتصال جديدة</h3>
        <div style={{ marginBottom: '10px' }}>
          الاسم: <input value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          الرقم: <input value={newNumber} onChange={(e) => setNewNumber(e.target.value)} />
        </div>
        <div>
          <button type="submit">إضافة</button>
        </div>
      </form>

      <h3>الأرقام المسجلة</h3>
      <ul>
        {persons.map(person => 
          <li key={person.id} style={{ marginBottom: '5px' }}>
            {person.name} : {person.number}
          </li>
        )}
      </ul>
    </div>
  )
}

export default App