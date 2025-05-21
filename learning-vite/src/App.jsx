import { useState } from 'react'
import './App.css'
import Chai from './chai'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>react with vite</h1>
      <Chai></Chai>
    </div>
    
  )
}

export default App
