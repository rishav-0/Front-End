
import { useState } from 'react'
import './App.css'
import Button from './components/Button/button'
import Card from './components/Cards/card'



function App() {
  const data = [
    {
      id:1,
      title:'Mouse',
      summary:'Good mouse',
      image:'https://www.fingers.co.in/secure/api/uploads/products/1713252661_New-angle.png',
    },
    {
      id:2,
      title:'Keyboard',
      summary:'Good mouse',
      image:'https://www.fingers.co.in/secure/api/uploads/products/1713252661_New-angle.png',

    },
    {
      id:3,
      title:'house',
      summary:'Good mouse',
      image:'https://www.fingers.co.in/secure/api/uploads/products/1713252661_New-angle.png',

    },
    {
      id:4,
      title:'Pet',
      summary:'Good mouse',
      image:'https://www.fingers.co.in/secure/api/uploads/products/1713252661_New-angle.png',

    }
  ]
const [mode,setMode] = useState(true)
  

  return (
    <>
    <div className={`${mode?'bg-white':'bg-black text-white'}`}>
      <button className='p-2 border-2 border-black' onClick={()=>setMode(!mode)}>{mode?'Dark':'Light'}</button>
      <h1 onClick={()=>setMode('Rishav')}>hello</h1>
     <Button title="Hello world"/>
    <h1 className="text-3xl font-bold underline text-red-500">
      {mode}
    </h1>
    {data?.map(i=><Card key={i.id} title={i.title} summary={i.summary} image={i.image}/>)}
    </div>
     
     
  
    </>
  )
}

export default App
