import React from 'react'

const Logo = (props) => {
  return (
    <div className='flex gap-2 items-center mb-3'>
        <img className='w-5' src={props.logo} alt="" />
        <p className="text-slate-200">{props.name}</p>
    </div>
  )
}

export default Logo