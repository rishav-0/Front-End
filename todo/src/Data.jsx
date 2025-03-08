import React, { useContext } from 'react'
import { Globalcontext } from './context/Globalcontext'

 

const Data = () => {
    const {setName} = useContext(Globalcontext)

  return (
    <button onClick={()=>setName('sushil')}>Click me</button>
  )
}

export default Data