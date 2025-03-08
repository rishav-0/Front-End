import React, { useContext, useState } from 'react'
import SectionOne from './SectionOne'
import Button from '../components/button/Button'
import { Globalcontext } from '../context'

const Home = () => {

    const {setMode,mode} = useContext(Globalcontext)

    const handlemode = ()=>{
        setMode(mode == 'Dark'?'Light':'Dark')
    }

  return (
    <div>
        
        <SectionOne  
        // onClick={()=>setMode(mode == 'Dark'?'Light':'Dark')} 
        onClick={handlemode}
         />

    </div>
  )
}

export default Home