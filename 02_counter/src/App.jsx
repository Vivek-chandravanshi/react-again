import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'

function App() {
  let [counter, setCounter] = useState(15) //for dynamically dom manipulation without fetching element explicitly

  //let counter = 5
  const addValue = () =>{
    //counter++;
    setCounter(counter+1)
  }
  const decrement = () =>{
    counter--;
    setCounter(counter)
  }
  return (
    <>
      <h1>hello react</h1>
      <h2>counter value : {counter}</h2>

      <button onClick={addValue}>increment value</button>
      <button onClick={decrement}>decrement value</button>
    </>
  )
}

export default App
