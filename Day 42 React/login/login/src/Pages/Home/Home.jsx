import React, { useState } from 'react'
import { arr } from '../../utils/product'

const Home = () => {
    const [toggle,setToggle] = useState(true)
    const [count,setCount] = useState(0)
    const [slectedCategory,setCategory] = useState('')
    
    

  return (
    <div>
      {/* <h1>{toggle.toString()}</h1> */}
      <h1>Count : {count}</h1>
      <button className='btn btn-dark' onClick={()=>setToggle(!toggle)}>Toggle false</button>
      <button className='btn btn-primary' onClick={()=>setToggle(true)}>Toggle true</button>
      <button className='btn btn-success' onClick={()=>setCount(count+1)}>Increment</button>
      <button className='btn btn-danger' disabled={count === 0 } onClick={()=>setCount(count-1)}>Decrement</button>
      {arr.map(i=>{
        return (
          <button className={`btn ${slectedCategory === i ?'btn-dark':'btn-outline-dark'}`} key={i} onClick={()=>setCategory(i)}>{i}</button>
        )
      })}
      
      <h1>{slectedCategory}</h1>

    </div>
  )
}

export default Home