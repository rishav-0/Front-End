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


function App() {
  
  const {flash,best,products,categories} = useContext(Globalcontext)

  // console.log(categories,'data')
  return (
    <>
      <Nav />  
      <Routes>
        <Route path='/' element={ <Home />}></Route>
        <Route path='/signup' element={ <Signup /> }></Route>
        <Route path='/productdetail/:id' element={ <ProductDetail />}></Route>
        <Route path='/cart' element={ <Cart />}></Route>

      </Routes>
      {/* <Signup />   */}
     
      {/* <Footer /> */}
    </>
  )
}

export default App
