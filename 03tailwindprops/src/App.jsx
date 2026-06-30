import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-500  text-black p-4 rounded-xl'>Tailwind css</h1>
      <Card userName="Suraj" btnText = "click me"/>
      <Card userName="Kanojiya" btnText = "visit us" />
   
    </>
  )
}

export default App
