import React from 'react'
import { NavLink } from 'react-router'

const Tabs = (props) => {
  return (
    <NavLink to={props.to} className={({ isActive }) =>
    isActive ? "rounded-md bg-slate-300 " : "text-slate-200 "
  }>
        <div className={`flex gap-3 items-center rounded-lg p-1`}>
        <p className='w-3 flex items-center justify-center  text-xs'><i className={props.logo}></i></p>
        <p className="text-sm ">{props.tabName}</p>
    </div>
    </NavLink>
  )
}

export default Tabs