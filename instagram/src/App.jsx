import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Left from './pages/left/Left'
import Mid from './pages/Mid'
import Right from './pages/Right'


function App() {

  return (
    <>
    <div className="grid grid-cols-3">
      <Left />  
      <Mid />
      <Right />
    </div>

    </>
  )
}

export default App
