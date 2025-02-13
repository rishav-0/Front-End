import React from 'react'

const BtnBlac = (props) => {
    const {onClick,title,type}  = props
  return (
    <button className='text-xs bg-black w-full p-3 text-white cursor-pointer'  type={type} onClick={onClick}>{title}</button>
  )
}

export default BtnBlac