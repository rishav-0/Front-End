import React from 'react'
import { NavLink } from 'react-router'

const Sidebar = () => {
  return (
    <div className="bg-gray-300 p-2 flex gap-3 ">
        <NavLink to='/' className={({ isActive }) =>isActive && "text-red-500"}>Home</NavLink>
        <NavLink to='/register' className={({ isActive }) => isActive && "text-red-500"}>Register</NavLink>
        <NavLink to='/login' className={({ isActive }) => isActive && "text-red-500"}>Login</NavLink>
      </div>
  )
}

export default Sidebar