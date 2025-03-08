import React from 'react'

const Btn = (props) => {
    const {title,onClick} = props
  return (
    <button className='bg-[#DB4444] text-white py-4 px-12 rounded-md' onClick={onClick}>{title}</button>
  )
}

export default Btn