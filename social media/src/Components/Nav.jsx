import React from 'react'
import Logo from './Logo'
import BtnNav from './BtnNav'
import { Link } from 'react-router'

const Nav = () => {
  return (
    <div className='bg-[#1a1a1a] flex items-center justify-between p-4'>
        <div className="flex items-center gap-6">
          <Link to='/'>
            <Logo />
          </Link>
            <input className='bg-[#282828] p-1 rounded-xl focus-visible:outline-none text-white' placeholder='#Explore' type="text" />
        </div>
        <div className="flex items-center gap-4">
          <Link to='/'><BtnNav icon='fa-solid fa-house' /></Link>
          <Link to='/profile'><BtnNav icon='fa-solid fa-user' /></Link>
    
          <Link to='/settings'><BtnNav icon='fa-solid fa-gear' /></Link>
          
        </div>
        <img className='h-10 w-10' src="https://www.themarketingnutz.com/wp-content/uploads/2018/01/opulent-profile-square-07.jpg" alt="" />
    </div>
  )
}

export default Nav