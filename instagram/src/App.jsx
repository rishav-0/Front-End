import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Left from './pages/left/Left'
import Mid from './pages/mid/Mid'
import Right from './pages/Right/Right'


function App() {

  return (
    <>
    <div className="grid md:grid-cols-4 h-screen">
      <Left />  
      <Mid />
      <Right />
    </div>

    </>
  )
}

export default App
