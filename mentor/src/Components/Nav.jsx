import React from 'react'
import like from '../images/like.png'
const Nav = () => {
  return (
    <div className='flex justify-between  items-center py-[10px]'>
        <i className="fas fa-angle-left"></i>
        <p className="text-sm font-semibold">Mentor profile</p>
        <img className='w-6' src={like} alt="" />
    </div>
  )
}

export default Nav