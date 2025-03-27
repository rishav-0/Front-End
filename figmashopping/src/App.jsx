import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Globalcontext } from './Globalcontext'
import Signup from './pages/signup/Signup'
import Footer from './Components/Footer'
import Home from './pages/home/Home'
import Nav from './Components/Nav'
import { Route, Routes } from 'react-router'
import ProductDetail from './pages/detail/ProductDetail'
import Cart from './pages/Cart/Cart'
import FooterDarkTheme from './Components/Footer'
import { useAuth } from '@clerk/clerk-react'


function App() {
   const {  userId,isSignedIn } = useAuth()
  const {flash,best,products,categories} = useContext(Globalcontext)

  console.log(userId,'data')

  return (
    <>
      <Nav />  
      <Routes>
        <Route path='/' exact element={ <Home />}></Route>
         <Route path='/signup' exact element={ <Signup /> }></Route>
        
        <Route path='/productdetail/:id' exact element={ <ProductDetail />}></Route>
        <Route path='/cart' exact element={ <Cart />}></Route>

      </Routes>
       
     
      <FooterDarkTheme />
    </>
  )
}

export default App
