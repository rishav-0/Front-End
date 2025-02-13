import React from 'react'

const Button = (props) => {
    const {disabled,handelClick,title,className} = props
  return (
    <button disabled={disabled} onClick={handelClick} className={`rounded-lg px-4 py-1 text-white  ${disabled?'bg-gray-300':'bg-orange-500'} ${className}`}>{title}</button>
  )
}

export default Button