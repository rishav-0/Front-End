import React from 'react'
import SimpleBtn from '../Buttons/SimpleBtn'

const NavBar = () => {
  return (
    <div className='border-y border-slate-300 py-2 flex justify-between items-center mb-3'>
        <p className="font-semibold">Rishav</p>
        <div className="flex justify-between gap-3 items-center text-xs">
            <p className="cursor-pointer text-slate-400 hover:text-black">Home</p>
            <p className="cursor-pointer text-slate-400 hover:text-black">Product</p>
            <p className="cursor-pointer text-slate-400 hover:text-black">Overview</p>
            <p className="cursor-pointer text-slate-400 hover:text-black">About us</p>
            <SimpleBtn title={<i className="fas fa-magnifying-glass"></i>} className='border-slate-400'/>
            <SimpleBtn title='Contact us' className='border-slate-400'/>
        </div>
    </div>
  )
}

export default NavBar