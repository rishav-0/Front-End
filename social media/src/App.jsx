import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from '../src/pages/login/Login'
import Home from './pages/DesktopZero/Home'
import Nav from './Components/Nav'
import Settings from './pages/DesktopTwo/Settings'
import User from './pages/Profile/User'
import { Route, Routes } from 'react-router'


function App() {

  return (
    <>
      {/* <Login /> */}
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/settings' element={<Settings />}></Route>
        <Route path='/profile' element={<User usrName='Bruce Wyane' photo='https://www.themarketingnutz.com/wp-content/uploads/2018/01/opulent-profile-square-07.jpg'
      caption='we are a small team of idiots who aimed bring you the best ui materials on the web' post='Ui developer'/>}></Route>
      </Routes>
      {/* <Home /> */}
      {/* <Settings /> */}
      {/* <User usrName='Bruce Wyane' photo='https://www.themarketingnutz.com/wp-content/uploads/2018/01/opulent-profile-square-07.jpg'
      caption='we are a small team of idiots who aimed bring you the best ui materials on the web' post='Ui developer'/> */}
    </>
  )
}

export default App
