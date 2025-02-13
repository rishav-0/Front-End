import React, { useState } from 'react'
import SectionOne from './SectionOne'
import Button from '../components/button/Button'

const Home = () => {

    const [mode, setMode] = useState('Light')

    const handlemode = ()=>{
        setMode(mode == 'Dark'?'Light':'Dark')
    }

  return (
    <div>
        
        <SectionOne  
        // onClick={()=>setMode(mode == 'Dark'?'Light':'Dark')} 
        onClick={handlemode}
        title={mode} />

    </div>
  )
}

export default Home