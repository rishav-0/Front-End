import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'


function App() {
  const [num,setNum] = useState(0)
  const [sqrt,setSqrt] = useState(0)

  const square = useMemo(()=>{
    console.log('called square root')
    const data = sqrt == 100 ?0:sqrt*sqrt
    return data
  },[sqrt])

  return (
    <>
      {/* <Card name='The Rishav'/>    
      <Card name='john'/>    
      <Card name='Ram'/>     */}
      <input className='border p-1 rounded-none outline-none' value={num} type="number" onChange={(e)=>setNum(e.target.value)}/>
      <button className='p-3' onClick={()=>setSqrt(num)}>Click me</button>
      <h1>{square}</h1>
    </>
  )
}

export default App
