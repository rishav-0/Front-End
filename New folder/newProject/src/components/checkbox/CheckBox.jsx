import React from 'react'

const CheckBox = (props) => {
  return (
    <div className='flex gap-2 mb-2'>
        <input className='rounded-full' type="checkbox" name="" id="" />
        <p className="text-xs font-medium">{props.title}</p>
    </div>
  )
}

export default CheckBox