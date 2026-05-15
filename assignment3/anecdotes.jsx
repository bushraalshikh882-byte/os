import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'إذا كان تنقيح الأخطاء هو عملية إزالة الأخطاء، فإن البرمجة هي عملية وضعها.',
    'أفضل طريقة للبدء هي أن تتوقف عن الكلام وتبدأ بالعمل.',
    'أي أحمق يمكنه كتابة كود يفهمه الكمبيوتر. المبرمجون الجيدون يكتبون كوداً يفهمه البشر.',
    'التحسين المبكر هو أصل كل شر.',
    'البساطة هي أقصى درجات التطور.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const handleNext = () => setSelected(Math.floor(Math.random() * anecdotes.length))
  
  const handleVote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  const mostVoted = votes.indexOf(Math.max(...votes))

  return (
    <div>
      <h1>حكمة اليوم</h1>
      <p>"{anecdotes[selected]}"</p>
      <p>عدد الأصوات: {votes[selected]}</p>
      <button onClick={handleVote}>تصويت</button>
      <button onClick={handleNext}>حكمة أخرى</button>
      <h2>الحكمة الأكثر شعبية</h2>
      <p>"{anecdotes[mostVoted]}"</p>
    </div>
  )
}

export default App