import { useState } from 'react'
import { Routes, Route } from "react-router";
import './App.css'
import Sidebar from './components/Sidebar'
import Orders from './pages/Orders/Orders'
import Sticky from './components/Sticky'
import Products from './pages/products/Products';
import Settings from './pages/settings/Settings';

function App() {

  return (
    <>
      <div className="flex  sm:flex-nowrap flex-nowrap">
        <div className="w-[300px] h-screen">
          <Sidebar/>
        </div>
        <div className="min-h-screen w-full bg-[#efeee7]">
          <Sticky/>
          <Routes>
            <Route path="/order" element={<Orders />} />
            <Route path="/products" element={<Products />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
