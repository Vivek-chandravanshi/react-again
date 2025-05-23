import { useState } from "react"


function App() {
  const [color, setColor] = useState('olive')

  return (
    <>
      <div className='bg-green-400 w-full h-screen overflow-hidden ' 
      style = {{backgroundColor:color}}>
      </div>

      <div className="fixed flex flex-wrap justify-center  bottom-12 px-2 inset-x-0">
        <div className="flex flex-wrap justify-centr gap-3 bg-white px-4 py-4 rounded-3xl">
          <button className="outline-none px-4 py-1 text-white rounded-full " style={{backgroundColor:'red'}} onClick={()=> {setColor('red')}}>Red</button>
          <button className="outline-none px-4 py-1 text-white rounded-full " style={{backgroundColor:'blue'}} onClick={()=> {setColor('blue')}}>Blue</button>
          <button className="outline-none px-4 py-1 text-white rounded-full " style={{backgroundColor:'green'}} onClick={()=> {setColor('green')}}>Green</button>
          <button className="outline-none px-4 py-1 text-white rounded-full " style={{backgroundColor:'orange'}} onClick={()=> {setColor('orange')}}>Orange</button>
          <button className="outline-none px-4 py-1 text-white rounded-full " style={{backgroundColor:'black'}} onClick={()=> {setColor('black')}}>Black</button>
          <button className="outline-none px-4 py-1 text-white rounded-full " style={{backgroundColor:'grey'}} onClick={()=> {setColor('grey')}}>Grey</button>
        </div>
      </div>
    </>
  )
}

export default App
