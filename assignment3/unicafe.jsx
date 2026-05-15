import { useState } from 'react'

const StatisticLine = ({ text, value }) => (
  <tr><td>{text}</td><td>{value}</td></tr>
)

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  if (total === 0) return <p>لم يتم جمع أي آراء بعد</p>

  const average = (good - bad) / total
  const positivePercent = (good / total) * 100

  return (
    <table>
      <tbody>
        <StatisticLine text="جيد" value={good} />
        <StatisticLine text="عادي" value={neutral} />
        <StatisticLine text="سيء" value={bad} />
        <StatisticLine text="المجموع" value={total} />
        <StatisticLine text="المعدل" value={average.toFixed(2)} />
        <StatisticLine text="النسبة الإيجابية" value={`${positivePercent.toFixed(1)}%`} />
      </tbody>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>أعطنا رأيك</h1>
      <button onClick={() => setGood(good + 1)}>جيد</button>
      <button onClick={() => setNeutral(neutral + 1)}>عادي</button>
      <button onClick={() => setBad(bad + 1)}>سيء</button>
      <h2>الإحصائيات</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App