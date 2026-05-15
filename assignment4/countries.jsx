import { useState, useEffect } from 'react'
import axios from 'axios'

const CountryDetails = ({ country }) => (
  <div>
    <h2>{country.name.common}</h2>
    <p>العاصمة: {country.capital?.[0]}</p>
    <p>السكان: {country.population?.toLocaleString()}</p>
    <img src={country.flags.png} alt="علم الدولة" width="150" />
  </div>
)

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all').then(response => {
      setCountries(response.data)
    })
  }, [])

  const filtered = countries.filter(c => c.name.common.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <h1>معلومات الدول</h1>
      <input value={filter} onChange={(e) => setFilter(e.target.value)} placeholder="ابحث عن دولة..." />
      {filtered.length > 10 ? <p>نتائج كثيرة جداً</p> : 
       filtered.length === 1 ? <CountryDetails country={filtered[0]} /> :
       <ul>{filtered.map(c => <li key={c.cca3}>{c.name.common}</li>)}</ul>}
    </div>
  )
}

export default App