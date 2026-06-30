import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { use } from 'react'

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    if(counter < 20){
    setCounter(counter + 1)
    }
    else{
      alert("Can't add more than 20");
    }
  }
 const removeValue = () => {
   if(counter > 0){
    setCounter(counter - 1)
   }else{
    alert("negative no cannot be shown")
   }
  }
  return (
    <>
     <h1>Chai aur react</h1>
     <h2>Counter value : {counter}</h2>

     <button onClick={addValue} >Add value {counter}</button>
     <button onClick={removeValue}>Sub value {counter}</button>
     <p>Footer : {counter}</p>
    </>
  )
}

export default App
