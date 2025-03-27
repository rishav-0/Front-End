import { useAuth } from '@clerk/clerk-react'
import React from 'react'
import { Link } from 'react-router'
import { SignOutButton } from '@clerk/clerk-react'
import {  UserButton } from '@clerk/clerk-react'

const Nav = () => {

    const {  isSignedIn } = useAuth()

  return (
    <div className='px-10 flex items-center flex-wrap justify-between border-b mb-10 py-4'>
        <Link to='/'><p className="text-2xl font-semibold">Exclusive</p></Link>
        
        <div className="flex items-center justify-between sm:gap-12">
            <Link to='/'><p className="cursor-pointer">Home</p></Link>
       
            <p className="cursor-pointer">Contact</p>
            <p className="cursor-pointer">About</p>
            {!isSignedIn && <Link to='/signup'><p className="cursor-pointer">Sign up</p></Link>}
       
        </div>
        <div className="flex items-center justify-between sm:gap-4">
            <div className="flex items-center px-[20px] bg-[#F5F5F5]">
                <input className='outline-none  py-[10px] bg-[#F5F5F5] placeholder:text-xs' type="text" placeholder='What are you looking for?'/>
                <i className="fa-light fa-magnifying-glass cursor-pointer"></i>
            </div>
            <i className="fa-light fa-heart cursor-pointer"></i>
            <Link to='/cart'>
                <i className="fa-light fa-cart-shopping cursor-pointer"></i>
            </Link>
            {isSignedIn && <UserButton /> }
            
        </div>
    </div>
  )
}

export default Nav