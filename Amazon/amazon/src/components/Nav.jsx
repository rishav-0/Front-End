import React from 'react'
import PrimaryBtn from './PrimaryBtn'
import logo from '../images/logo.png'
import Search from './Search'
import { Link } from 'react-router'

const Nav = () => {
  return (
    <div  className='flex flex-wrap items-center justify-between md:gap-3 px-2 textColor text-white p-2 '>

        <div className="flex gap-3 items-center mb-2">
            <Link to='/'>
                <img className='w-20 invert' src={logo} alt="" />
            </Link>
        <i className="fas fa-bars "></i>
        <div className="">
            <p className="text-xs ml-1 -mb-1">Select</p>
            <select name="" id="" className='textColor focus-visible:outline-none text-sm'>
                <option >Category</option>
                <option value="">Food</option>
                <option value="">Jwellery</option>
                <option value="">Electronics</option>
                <option value="">Clothing</option>
            </select>

        </div></div>
        
        <Search />
        <div className="flex gap-3 items-center">
            <img className='w-6 h-6 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMe8A8n_KwazMDF3Ud-OA3ju79mNQTAyBHug&s" alt="" />
        <div className="">
            <p className="text-xs ml-1 -mb-1">Select</p>
            <select name="" id="" className='textColor focus-visible:outline-none text-sm'>
                <option >Category</option>
                <option value="">Food</option>
                <option value="">Jwellery</option>
                <option value="">Electronics</option>
                <option value="">Clothing</option>
            </select>        
        </div>
        <div className="text-center">
            <p className="text-xs -mb-1 text-[#ff8500]">3</p>
            <i className="fa-light fa-cart-minus"></i>
        </div>
        </div>
        
    </div>
  )
}

export default Nav