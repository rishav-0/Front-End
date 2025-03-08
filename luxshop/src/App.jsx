import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import ProductDetail from './pages/detail/ProductDetail'
import Cart from './pages/cart/Cart'


function App() {

  return (
    <>
      <div className="flex gap-4">
        {/* <Home /> */}
      {/* <ProductDetail off='6' title='Applle iPad Air Wi-Fi ' price='15.299.00' 
      img='https://iplanet.one/cdn/shop/files/iPad_Air_13_M2_Cellular_Blue_PDP_Image_Position_1b__en-IN_ac1ce69c-bd74-4359-a4aa-2eafc5da09ef.jpg?v=1716471230&width=823'
      about='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod asperiores dolor adipisci mollitia voluptatibus harum molestias in iusto? Magni vitae reprehenderit eos quod officia perferendis aut! Fugit harum obcaecati, et laudantium delectus odit debitis amet iusto, voluptatibus assumenda molestiae reprehenderit.'
      /> */}
      <Cart />
      </div>
      
    </>
  )
}

export default App
