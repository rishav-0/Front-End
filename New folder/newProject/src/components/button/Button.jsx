import React from 'react'

const Button = (props) => {
  return (
    <button className={`px-3 py-1 bg-blue-600 rounded-xl text-xs cursor-pointer text-white ${props.className}`} onClick={props.onClick} >{props.title}</button>
  )
}

export default Button