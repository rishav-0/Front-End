import React from 'react'

const Button = (props) => {
  return (
    <div className='bg-[#273b94] text-center p-2 rounded-md text-white cursor-pointer mb-3' onClick={props.onClick}>{props.name}</div>
  )
}

export default Button