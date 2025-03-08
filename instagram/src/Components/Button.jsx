import React from 'react'

const Button = (props) => {
    const {title,onClick} = props
  return (
    <button className='bg-black px-2 rounded-full text-white text-xs py-1 cursor-pointer' onClick={onClick}>{title}</button>
  )
}

export default Button